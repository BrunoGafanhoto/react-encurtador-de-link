import React from 'react'

import {
     ModalContainer, Container, Header, 
     LinkArea, Title, LongUrl, 
     ShortLinkArea, ShortLinkUrl

} from './styles';

import { View, Text, TouchableOpacity, TouchableWithoutFeedback,Clipboard, Share } from 'react-native';
import { Feather } from '@expo/vector-icons';

const ModalLink = ({ onClose, response }) => {
    
     const copyLink = () =>{
          Clipboard.setString(response.link);
          alert('Link copiado com sucesso!');
     }

     const handleShare = async() => {
          try{
               const result = await Share.share({
                    message: `${response.link}`
               })

               if(result.action === Share.sharedAction){
                    if(result.activityType){
                         console.log('ActiveType');
                    }else{
                         console.log('Compartilhado com sucesso');
                    }
               }else if(result.action === Share.dismissedAction){
                    console.log('Modal fechado!')
               }
          }catch(err){
               console.log(err.message);
          }
     }

     return(
          <ModalContainer>
               <TouchableWithoutFeedback onPress={onClose}>
                    <View style={{flex:1}}></View>
               </TouchableWithoutFeedback>
               <Container>
                    <Header>
                         <TouchableOpacity onPress={onClose}>
                              <Feather name="x" color="#212743" size={30}/>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={handleShare}>
                              <Feather name="share" color="#212743" size={30}/>
                         </TouchableOpacity>
                    </Header>

                    <LinkArea>
                         <Title>Link encurtado</Title>
                         <LongUrl numberOfLines={1}>
                              {response.long_url}
                         </LongUrl>

                    <ShortLinkArea activeOpacity={1}>
                         <ShortLinkUrl numberOfLines={1}
                         onPress={copyLink}>
                              {response.link}
                              
                         </ShortLinkUrl>

                         <TouchableOpacity onPress={copyLink}>
                              <Feather name="copy" size={25} color="#fff"/>
                         </TouchableOpacity>
                    </ShortLinkArea>

                    </LinkArea>
               </Container>
          </ModalContainer>
     )
}

export default ModalLink;