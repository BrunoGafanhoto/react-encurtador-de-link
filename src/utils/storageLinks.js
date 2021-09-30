import AsyncStorage from '@react-native-async-storage/async-storage'

//Buscar os links salvos
export const getLinkSave = async(key) => {
     const myLinks = await AsyncStorage.getItem(key);

     let linkSaves = JSON.parse(myLinks) || [];

     return linkSaves;
}

//Salvar um link no storage
export const saveLink = async(key, newLink) => {

     let linksStored = await getLinkSave(key);

     // Se tiver algum link com esse id preciso ignorar;
     const hasLink = linksStored.some(link => link.id === newLink.id);
     if(hasLink){
          console.log('ESSE LINK JÁ EXISTE NA LISTA')
          return; //parar execução
     }

     linksStored.push(newLink);
     await AsyncStorage.setItem(key, JSON.stringify(linksStored))
}

//Deletar o link do storage
export const deleteLink = async(links,id) => {

    let myLinks = links.filter((item) => {
          return(item.id !== id);
    });

    await AsyncStorage.setItem('links', JSON.stringify(myLinks));

    return myLinks;
}