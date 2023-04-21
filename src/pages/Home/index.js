import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TextInput, StatusBar } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'
import { AntDesign } from '@expo/vector-icons'

export default function Home() {
  const { cart, addItemCart } = useContext(CartContext)

  const navigation = useNavigation();
  const [products, setProducts] = useState([
    {
      id: '1',
      name: "Peaches",
      price: 1.50
    },
    {
      id: '2',
      name: "Broccolli",
      price: 1.50
    },
    {
      id: '4',
      name: "Bread",
      price: 0.20
    }, 
    {
      id: '5',
      name: "Peaches",
      price: 1.50
    },
  ])

  function handleAddCart(item) {
    addItemCart(item)
  }

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.container2}>
        
         {/* <Image source={require('../../Logo/logo.png')} style={{ width: '100%' , top: '10%', paddingVertical: 100,  }} />  */}
         <View style={styles.viewSearch}> 
         <AntDesign name="search1" size={24} color="#6F9429x" style={{ paddingRight: 400, top: 9, paddingLeft: 10 }}/>
         <TextInput style={styles.searchInput} placeholder="Search Foodstuffs" >
         </TextInput>
         </View>

         <View style={styles.cartContent}>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate("Cart")}
          >
            {cart.length >= 1 && (
              <View style={styles.dot}>
                <Text style={styles.dotText}>
                  {cart?.length}
                </Text>
              </View>
            )}
            <Feather name="shopping-cart" size={30} color="white" />
          </TouchableOpacity>

        </View>

      </View>

      <View style={styles.Items}>
      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />
      </View>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    bottom: 50,
    backgroundColor: 'white',
  },
  container2: {
    flex: 2,
    backgroundColor: '#5E7572',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingVertical: 5,
  },
  Items: {
    backgroundColor: 'white',
    
  },
  viewSearch: {
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    width: '95%',
    alignSelf: 'center',
    top: '70%',
  },
  searchInput: {
    backgroundColor: '#D9D9D9',
    bottom: '30%',
    width: '75%',
    paddingLeft: '3%',
    alignSelf: 'center',
    right: '4%',
  },
  // search: {
  //   backgroundColor: 'black',
  //   borderRadius: 4,
  //   paddingVertical: 12,
  //   width: '85%',
  //   alignSelf: 'center',
  //   top: '300%',
  //   alignItems: 'center',
  // },
  cartContent: {
    backgroundColor: 'purple',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    left: 390,
  },
  title: {
    backgroundColor: 'white',
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    paddingLeft: 50,
  },
  dotText: {
    backgroundColor: 'cyan',
    fontSize: 12,
    paddingLeft: '12.5%',
  },
  list:{
    backgroundColor: 'blue',
    width: '100%',
  }
})
