import React from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         TouchableOpacity,
         TextInput,
 } from 'react-native';

 

 import * as Animatable from 'react-native-animatable'

 import { useNavigation } from '@react-navigation/native'

export default function Welcome (){
    const navigation = useNavigation();

    return(
    <View style={styles.containerLogo}> 
      
        <View>
        <Animatable.Image
            animation="flipInY"
            source={require('../../Logo/logo.png')}
            style={{ width: '100%' }}
            resizeMode='contain' 
            />
        </View>

          <Text style={styles.login}>E-mail</Text>
          <Text style={styles.password}>Password</Text>

          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('SignIn')}
            >
           <Text style={styles.buttonText}> Log in </Text>
           </TouchableOpacity>

          
            <TextInput style={styles.textInput}> 
            <Text> email@example.com </Text>
            </TextInput>

            <TextInput style={styles.textInputInput}>
            <Text> ********* </Text>
            </TextInput>
          
          
            <Image style={styles.groceries} source={require('../../Logo/groceries.png')}/>
          
            <View style={styles.input}> 
          
          </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerLogo:{
        flex: 1,
        backgroundColor: '#5E7572', 
    },
    groceries: {
        flex: 1,
       
    },
    login: {
        paddingLeft: '20%',
        color: '#FFF',
        width: '100%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
    },
    password: {
        paddingLeft: '20%',
        color: '#FFF',
        width: '100%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
    },
    textInput: {
        backgroundColor: 'red',
        borderRadius: 4,
        paddingVertical: 8,
        width: '75%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    textInputInput: {
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 8,
        width: '75%',
        alignSelf: 'center',
        bottom: '7%',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    button:{
        backgroundColor: '#A3AF8D',
        borderRadius: 4,
        paddingVertical: 4,
        width: '75%',
        alignSelf: 'center',
        bottom: '1%',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    buttonText:{
        color: '#FFF',
        fontWeight: 'bold',
    },
})
