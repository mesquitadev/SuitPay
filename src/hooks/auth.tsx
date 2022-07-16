import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '@services/api';

interface User {
  name: string;
  username: string;
  usernameDisplay: string;
  email: string;
  personType: string;
  docsOk: boolean;
  verifCode: string;
  roles: [];
  transactionAuthorizationEmail: boolean;
  transactionAuthorizationTotp: boolean;
  avatarBase64: string;
  avatarFileType: string;
  approvedAccount: boolean;
}

interface SignInCredentials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): Promise<void>;
}

interface AuthState {
  ut: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider(props: {children: React.Component}) {
  const {children} = props;
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  async function loadStoredData(): Promise<void> {
    const [ut, user] = await AsyncStorage.multiGet([
      '@SuitPay:token',
      '@SuitPay:user',
    ]);
    if ({ut} && user[1]) {
      api.defaults.headers.authorization = ut;
      setData({ut: ut[0], user: JSON.parse(user[1])});
    }
    setLoading(false);
  }
  useEffect(() => {
    loadStoredData();
  }, []);

  const signIn = useCallback(async ({username, password}) => {
    const response = await api.post('auth/signin', {
      username,
      password,
    });

    const {ut} = response.headers;
    const user = response.data;

    await AsyncStorage.multiSet([
      ['@SuitPay:token', ut],
      ['@SuitPay:user', JSON.stringify(user)],
    ]);
    api.defaults.headers.authorization = ut;

    setData({ut, user});
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@SuitPay:user', '@SuitPay:token']);
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@SuitPay:user', JSON.stringify(user));

      setData({
        ut: data.ut,
        user,
      });
    },
    [setData, data.ut],
  );

  const contextValue = useMemo(
    () => ({
      user: data.user,
      loading,
      signIn,
      signOut,
      updateUser,
    }),
    [data.user, loading, signIn, signOut, updateUser],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export {AuthProvider, useAuth};
