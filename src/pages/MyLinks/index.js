import React from 'react'

import { View, Text } from 'react-native'
// components
import StatusBarPage from '../../components/StatusBarPage'

const MyLinks = () => {
     return(
          <View>
               <StatusBarPage 
               backgroundColor="#132742"
               barStyle="light-content"/>
               <Text>Página MyLinks</Text>
          </View>
     )
}

export default MyLinks;