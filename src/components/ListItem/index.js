import React from 'react'

import { View, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { ContainerButton, Item } from './styles'

 const ListItem = () =>{
      return(
          <View>
               <ContainerButton activeOpacity={0.8}>
                    <Feather name="link" color="#fff" size={24}/>
                    <Item>https://youtube.com</Item>
               </ContainerButton>
          </View>
      )
 }

 export default ListItem