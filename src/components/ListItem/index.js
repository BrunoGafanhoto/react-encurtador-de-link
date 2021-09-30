import React from 'react'
import  Swipeable  from 'react-native-gesture-handler/Swipeable'

import { View, Text } from 'react-native'

import { Feather } from '@expo/vector-icons'

import { ContainerButton, Item, ActionContainer } from './styles'





 const ListItem = ({data, press,deleteItem}) =>{

     const RightActions = () => {
          return(
               <ActionContainer onPress={() =>{ deleteItem(data.id)
               }}>
                    <Feather name="trash" color="#fff" size={24} />
               </ActionContainer>
          )
     }

      return(
          <View >
               <Swipeable renderRightActions={RightActions}>
                    <ContainerButton activeOpacity={0.8} onPress={press} >
                         <Feather name="link" color="#fff" size={24}/>
                         <Item>{data.long_url}</Item>
                    </ContainerButton>
               </Swipeable>
          </View>
      )
 }

 export default ListItem