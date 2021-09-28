import React , { useState }from 'react'

import { LinearGradient } from 'expo-linear-gradient'
import { Feather } from "@expo/vector-icons"
import { TouchableWithoutFeedback, Keyboard , KeyboardAvoidingView, Platform } from 'react-native'

// components
import StatusBarPage from '../../components/StatusBarPage'
import Menu from '../../components/Menu'
import {
 ContainerLogo, Logo, ContainerContent,
 Title, SubTitle, ContainerInput,
 BoxIcon, Input, ButtonLink, ButtonLinkText

} from './styles'

const Home = () => {
     const [input, setInput] = useState('')
     return(
          <TouchableWithoutFeedback onPress={ () => Keyboard.dismiss()}>   
               <LinearGradient
                    colors={['#1ddbb9', '#132742']}
                    style={{flex:1, justifyContent: 'center'}}
               >
                    <StatusBarPage 
                    backgroundColor="#1ddbb9"
                    barStyle="light-content"/>

                    <Menu/>
               {/*LEVANTANDO CONTEUDO AO ABRIR TECLADO*/}
               <KeyboardAvoidingView behavior={Platform.OS === 'android' ? 'padding' : 'position'} enabled={true}> 
                    
                    <ContainerLogo>
                         <Logo source={require('../../assets/logo.jpg')}/>
                    </ContainerLogo>

                    <ContainerContent>
                         <Title>SujeitoLink</Title>
                         <SubTitle>Cole seu link para encurtar</SubTitle>

                         <ContainerInput>
                              <BoxIcon>
                                   <Feather  name="link" size={22} color="#fff" />
                              </BoxIcon>
                              <Input placeholder="Cole seu Link Aqui" placeholderTextColor="white" 
                              autoCapitalize="none" autoCorrect={false} keyboardType="url"
                              value={input} onChangeText={(text) => setInput(text)}
                              />
                         </ContainerInput>

                         <ButtonLink onPress={() => alert(input)}>
                              <ButtonLinkText>Gerar Link</ButtonLinkText>
                         </ButtonLink>
          