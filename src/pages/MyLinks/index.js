import React from 'react'


// components
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import StatusBarPage from '../../components/StatusBarPage'
import { Container, Title, ListLinks } from './styles'

const MyLinks = () => {
     return(
          <Container>
               <StatusBarPage 
               backgroundColor="#132742"
               barStyle="light-content"/>
               <Menu />
               <Title>Meus Links</Title>


               <ListLinks 
                    data={[{id:1, link: 'test.com'}, {id:2, link: 'test.com'}]}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={ ({item}) => <ListItem data={item} />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
               />
          </Container>
     )
}

export default MyLinks;