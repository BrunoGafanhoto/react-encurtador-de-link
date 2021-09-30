import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

export const ContainerLogo = styled.View`
     align-items: center;
     justify-content: center;
     margin-top: ${Platform.OS === 'ios' ? 35 + 'px' : 15 + 'px' };
`;

export const Logo = styled.Image`
     width: 230px;
     height: 150px;
     border-radius: 50px;
     transform: rotate(-5deg);
     opacity: 0.85;
`;

export const ContainerContent = styled.View`
     width: 100%;
     align-items: center;
     justify-content: center;
     margin-top: ${Platform.OS === 'ios' ? 25 + '%' : 15 + '%' };
     padding-left: 15px;
     padding-right: 15px;
`;

export const Title = styled.Text`
     color: #fff;
     font-size: 30px;
     font-weight: bold;
     text-align: center;
     letter-spacing: 1px;
`;

export const SubTitle = styled.Text`
     color: #fff;
     font-size: 18px;
     text-align: center;
     padding-bottom: 10%;
`;

export const ContainerInput = styled.View`
     flex-direction: row;
     align-items: center;
     width: 100%;
     border-radius: 7px;
     margin: 15px 0;
  
`;
export const BoxIcon = styled.View`
     justify-content:center;
     align-items: center;
     padding-left: 10px;
     width: 11%;
     height: 50px;
     background-color: rgba(255,255,255,0.2);
     border-top-left-radius: 7px;
     border-bottom-left-radius: 7px;
`;
export const Input = styled.TextInput`
     justify-content:center;
     align-items: center;
     width: 89%;
     height: 50px;
     padding: 10px;
     background-color: rgba(255,255,255,0.2);
     border-top-right-radius: 7px;
     border-bottom-right-radius: 7px;
     font-size: 17px;
     color: #fff;
`;


export const ButtonLink = styled.TouchableOpacity`
     width: 100%;
     align-items: center;
     justify-content:center;
     height: 45px;
     background-color: #fff;
     margin: 0 15px !important;
     border-radius: 7px;
`;

export const ButtonLinkText = styled.Text`
     
`;