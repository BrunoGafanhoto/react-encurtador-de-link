import styled from 'styled-components/native'

export const ModalContainer = styled.View`
     flex: 1;
    
`;

export const Container = styled.View`
     flex:1;
     background-color: #fff;
     border-top-left-radius:25px;
     border-top-right-radius:25px;
     padding: 15px 25px;
`;
export const Header = styled.View`
     width: 100%;
     justify-content: space-between;
     flex-direction: row;
`;

export const LinkArea = styled.View`
     flex: 1;
     justify-content: center;
`;
export const Title = styled.Text`
     font-size: 33px;
     font-weight: bold;
     color: #1ccbae;
`;

export const LongUrl = styled.Text`
     font-size: 17px;
     color: #a7a7a7;
     margin-bottom: 30px;

`;
export const ShortLinkArea = styled.TouchableOpacity`
     height: 55px;
     width: 100%;
     background-color: #172742;
     border-radius: 15px;
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     padding: 0 15px;
`;
export const ShortLinkUrl = styled.Text`
     color: rgba(255,255,255,0.6);
     width: 90%;
`;
