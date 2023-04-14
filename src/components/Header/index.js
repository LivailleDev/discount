import React from 'react';
import { Image } from 'react-native';
import { Container } from './styles';
//import Logo from '../../../assets/Logo.png';

function Header() {
  return(
    <Container>
      <Image 
        source={Logo}
      />
    </Container>
  )
}

export default Header;


