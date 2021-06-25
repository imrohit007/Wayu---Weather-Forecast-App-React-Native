import React from 'react'
import { Appbar, Text} from 'react-native-paper';

function Header() {

  const _handleMore = () => console.log('Shown more');

  return (
    <Appbar.Header style={{backgroundColor:'#57abff', height:'5%'}}>
    
      <Appbar.Content title={<Text style={{fontSize:30, fontWeight:'bold'}}> Wayu </Text>} style={{width:'100%'}}/>
      
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
  );

}

export default Header
