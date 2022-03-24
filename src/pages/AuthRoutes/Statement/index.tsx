import React from 'react';
import {View, Text, Alert} from 'react-native';
import {Button} from '@components/index';
import {useAuth} from '@hooks/auth';

function Statement() {
  const {signOut} = useAuth();

  function handleSignOut() {
    return Alert.alert('Você tem certeza?', 'Você deseja sair do app?', [
      {
        text: 'Sim',
        onPress: () => {
          signOut();
        },
      },
      {
        text: 'Não',
      },
    ]);
  }

  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Sair do App" onPress={() => handleSignOut()} />
    </View>
  );
}

export default Statement;
