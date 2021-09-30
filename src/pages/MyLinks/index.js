import React, {useState, useEffect} from 'react'
import { Modal, ActivityIndicator } from 'react-native'
import { useIsFocused } from '@react-navigation/native'



// components
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItem'
import StatusBarPage from '../../components/StatusBarPage'
import { Container, Title, ListLinks, ContainerEmpty, WarningText } from './styles'
import ModalLink from '../../components/ModalLink'

import {getLinkSave, deleteLink} from '../../utils/storageLinks';

const MyLinks = () => {
     const isFocused = useIsFocused();
     
     const [links, setLinks] = useState([]);
     const [data, setData] = useState({});
     const [modalVisible, setModalVisible] = useState(false);
     const [loading, setLoading] = useState(true);

     useEffect(() =>{
          const getLinks = async () => {
               const result = await getLinkSave('links')
               setLinks(result);
               setLoading(false)
          }

          getLinks();
     }, [isFocused])

     const handleDelete = async(id) =>{
          const result = await deleteLink(links,id)
          setLinks(result);
     }

     return(
          <Container>
               <StatusBarPage 
               backgroundColor="#132742"
               barStyle="light-content"/>
               <Menu />
               <Title>Meus Links</Title>
               
               {
                    loading && (
                         <ContainerEmpty>
                              <ActivityIndicator color="#fff" size={25}/>
                         </ContainerEmpty>
                    )
               }

               { !loading &&
                    links.length === 0 && (
                         <ContainerEmpty>
                              <WarningText>Você ainda não possui nenhum link :(</WarningText>
                         </ContainerEmpty>
                    )
               }

               <ListLinks 
                    data={links}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={ ({item}) => <ListItem data={item} deleteItem={handleDelete} press={() => {setModalVisible(true), setData(item)} } />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
               />
               <Modal visible={modalVisible} transparent animationType="slide">
                    <ModalLink onClose={() => setModalVisible(false)} response={data}/>
               </Modal>
          </Container>
     )
}

export default MyLinks;