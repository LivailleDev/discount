import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         TextInput,
 } from 'react-native';

 import * as Animatable from 'react-native-animatable'

 import { useNavigation } from '@react-navigation/native'

 import { Feather } from '@expo/vector-icons';

export default function Welcome (){
    const navigation = useNavigation();

    return(
        <View style={styles.container}> 

        <View style={styles.containerLogo}> 
      
        <View>
        <Animatable.Image
            animation="flipInY"
            source={require('../../Logo/logo.png')}
            style={{ width: '100%' }}
            resizeMode='contain' 
            />
        </View>

          <View style={styles.email}>
          <Text >E-mail</Text>
          </View>

    
          <View  style={styles.viewEmail}>
          <Feather name="mail" size={20} color="#808080" style={{ marginLeft: 1, flex: 1 }} />
          <TextInput style={styles.placeholderEmail} placeholder="email@example.com"> 
          </TextInput>
          </View>
        

          <View  style={styles.password}> 
          <Text>Password</Text> 
          </View>

            <View style={styles.viewPassword}>
            <Feather name="lock" size={20} color="#808080" style={{ marginLeft: 1 }}/>
            <TextInput style={styles.placeholderPassword} placeholder="*********">    
            </TextInput>
            </View>


          <View>
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Home')}
            >
           <Text style={styles.buttonText}> Log in </Text>
           </TouchableOpacity>
            
            <Text style={styles.checkbox}>Remember me for 30 days.</Text>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}> Forgot your password? </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.textButtonButton}> Sign up! </Text>
            </TouchableOpacity>
          </View>
        
        </View>
        </View>
    );
}

const styles = StyleSheet.create({

    containerLogo:{
        backgroundColor: '#5E7572', 
         bottom: 50,
    },
    container: {
        flex: 1,
        backgroundColor: '#5E7572',
    },
    email: {
        backgroundColor: '#5E7572',
        fontSize: 10,
        paddingLeft: '1.5%',
        width: '20%',
        left: '12%',
        bottom: '5%',
        display: 'block',
        position: 'relative',
    },
    viewEmail: {
        paddingLeft: '2.5%',
        backgroundColor: '#D9D9D9',
        flexDirection: 'row',
        color: '#808080',
        borderRadius: 4,
        paddingVertical: 12,
        width: '75%',
        alignSelf: 'center',
        bottom: '7%',
        alignItems: 'center',
     },
     placeholderEmail:{
        color: 'red',
        backgroundColor: '#D9D9D9',
        right: '240%',
        fontSize: 15,
        width: '75%',
    },
    password: {
        backgroundColor: '#5E7572',
        color: 'blue',
        fontSize: 15,
        paddingLeft: '1.5%',
        width: '20%',
        left: '12%',
        bottom: '4%',
        display: 'block',
        position: 'relative',
    },
    viewPassword: {
        backgroundColor: '#D9D9D9',
        paddingLeft: '2.5%',
        color: '#808080',
        flexDirection: 'row',
        borderRadius: 4,
        paddingVertical: 12,
        width: '75%',
        alignSelf: 'center',
        bottom: '5.5%',
        alignItems: 'center',
    },
    placeholderPassword: {
        backgroundColor: '#D9D9D9',
        fontSize: 20,
        width: '75%',
        top: '1%',
        paddingLeft: '3%',
    },
    button: {
        color: '#D9D9D9',
        backgroundColor: '#A3AF8D',
        borderRadius: 4,
        paddingVertical: 4,
        width: '75%',
        alignSelf: 'center',
        bottom: '9%',
        
        alignItems: 'center',
    },
    buttonText:{
        color: '#D9D9D9',
        alignSelf: 'center',
    },
    checkbox: {
        color: '#D9D9D9',
        paddingLeft: '20%',
        bottom: '0%',
        backgroundColor: '#5E7572',
    },
    registerText: {
        left: '30%',
        color: '#D9D9D9',
        textDecorationLine: 'underline',
        backgroundColor: '#5E7572',
        top: '80%',
    },
    textButtonButton:{
        color: '#D9D9D9',
        bottom: '1%',
        left: '40%',
        textDecorationLine: 'underline',
        backgroundColor: '#5E7572',
        top: '100%',
    },
})
