import styled from 'styled-components/native';
import {RFValue} from 'react-native-responsive-fontsize';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.white[100]};
`;

export const SafeContainer = styled.SafeAreaView``;

export const InfoView = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoWrapper = styled.View`
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

export const BalanceWrapper = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

export const CardsContainer = styled.View`
  top: -${RFValue(25)}px;
`;

export const ItensContainer = styled.View`
  padding: 0 20px;
`;

export const Row = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const FooterCardsContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  decelerationRate: 0,
  snapToInterval: 20,
  snapToAlignment: 'center',
  contentContainerStyle: {
    paddingStart: 20,
    paddingEnd: 20,
  },
})`
  margin-top: 20px;
  height: 100%;
  width: 100%;
`;

export const HideBalance = styled.View`
  width: ${RFValue(90)}px;
  height: ${RFValue(20)}px;
  margin-right: 5px;
  background-color: ${({theme}) => theme.colors.white[100]};
`;

export const LogoContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: ${RFValue(113)}px;
  height: ${RFValue(97)}px;
`;
export const Logo = styled.Image``;

export const Icon = styled(Feather)`
  color: ${({theme}) => theme.colors.secondary};
  font-size: ${RFValue(20)}px;
`;

export const AtTitle = styled.Text`
  color: ${({theme}) => theme.colors.secondary}
  font-size: ${RFValue(18)}px;
  font-family: ${({theme}) => theme.fonts.semiBold};
`;

export const BalanceTitle = styled.Text`
  color: ${({theme}) => theme.colors.secondary};
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Title = styled.Text`
  color: white;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;
