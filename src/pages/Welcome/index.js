import React from 'react';
import { View,
         Text,
         StyleSheet,
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
            onPress={() => navigation.navigate('Home')}
            >
           <Text style={styles.buttonText}> Log in </Text>
           </TouchableOpacity>

          
            <TextInput style={styles.textInput}> 
            <Text> email@example.com </Text>
            </TextInput>

            <TextInput style={styles.textInputInput}>
            <Text> ********* </Text>
            </TextInput>

            {/* <Checkbox.Root>
            <Checkbox.Indicator />
            </Checkbox.Root> */}

            <Text style={styles.checkbox}>Remember me for 30 days.</Text>

            <TouchableOpacity style={styles.buttonRegister}>
                <Text style={styles.registerText}> Forgot your password? </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.textBottomBottom}> Sign up! </Text>
            </TouchableOpacity>
          
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
    // groceries: {
    //     flex: 1,
    //     transform: [{rotate: '45deg'}],
    //     left: -102,
    //     bottom: -12,          
    // },
    login: {
        fontSize: 10,
        paddingLeft: '12.5%',
        color: '#D9D9D9',
        width: '100%',
        alignSelf: 'center',
        bottom: '6%',
        alignItems: 'center',
    },
    password: {
        fontSize: 10,
        paddingLeft: '12.5%',
        color: '#D9D9D9',
        width: '100%',
        alignSelf: 'center',
        bottom: '5%',
        top:'0.7%',
        alignItems: 'center',
    },
    textInput: {
        color: '#D9D9D9',
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 12,
        width: '75%',
        alignSelf: 'center',
        bottom: '10%',
        alignItems: 'center',
    },
    textInputInput: {
        color: '#D9D9D9',
        backgroundColor: 'white',
        borderRadius: 4,
        paddingVertical: 12,
        width: '75%',
        alignSelf: 'center',
        bottom: '7%',
        alignItems: 'center',
    },
    button:{
        color: '#D9D9D9',
        backgroundColor: '#A3AF8D',
        borderRadius: 4,
        paddingVertical: 4,
        width: '75%',
        alignSelf: 'center',
        bottom: '1%',
        top: '8%',
        alignItems: 'center',
    },
    buttonText:{
        color: '#D9D9D9',
        alignSelf: 'center',
    },
    checkbox: {
        color: '#D9D9D9',
        paddingLeft: '20%',
    },
    registerText: {
        paddingVertical: '5%',
        left: '33%',
        color: '#D9D9D9',
        textDecorationLine: 'underline'
    },
    textBottomBottom:{
        color: '#D9D9D9',
        bottom: '1%',
        left: '45%',
        textDecorationLine: 'underline'
    },
})
