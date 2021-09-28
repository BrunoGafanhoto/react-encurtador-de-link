import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import MyLinks from './pages/MyLinks';

import { Ionicons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

const Routes = () =>{
     return(
          <Drawer.Navigator

          screenOptions={{
               
               drawerActiveBackgroundColor: '#2ccbb9',
               drawerActiveTintColor: '#fff',
               drawerItemStyle:{
                    marginTop:16,
               },
               drawerLabelStyle:{
                    fontSize: 18
               }   
               }}
          >
               <Drawer.Screen 
               name="Home"
               component={Home}
               
               options={{
                    headerShown:false,
                    title: 'Encurtar Link',
                    drawerIcon:({focused, size, color}) => (
                         <Ionicons name={focused ? 'cube' : 'cube-outline'} size={size} color={color} />
                    )
               }}/>
               <Drawer.Screen name="MyLinks" component={MyLinks}
                    options={{
                         headerShown:false,
                         title: 'Meus Links',
                         drawerIcon:({focused, size, color}) => (
                              <Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} size={size} color={color} />
                         )
                    }}
               />
          </Drawer.Navigator>
     )
}

export default Routes;