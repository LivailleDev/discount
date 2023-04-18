import { useState, useContext } from 'react'
import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, TextInput } from 'react-native'

import { Feather } from '@expo/vector-icons'
import Product from '../../components/Product'
import { useNavigation } from '@react-navigation/native'
import { CartContext } from '../../contexts/CartContext'
import { AntDesign } from '@expo/vector-icons';

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
    }, {
      id: '5',
      name: "Peaches",
      price: 1.50
    },
    {
      id: '6',
      name: "Pumpkim",
      price: 1.50
    },
    {
      id: '7',
      name: "Tomatoes",
      price: 0.20
    },
  ])

  function handleAddCart(item) {
    addItemCart(item)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.container2}>

        <View style={styles.cartContent}>

          <TextInput style={styles.Search} placeholder="Serch">
           <AntDesign name="search1" size={24} color="gray" />
          </TextInput>

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
            <Feather name="shopping-cart" size={30} color="#000" />
          </TouchableOpacity>

        </View>

      </View>

      <FlatList
        style={styles.list}
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Product data={item} addToCart={() => handleAddCart(item)} />}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3AF8D',
  },
  container2: {
    flex: 2,
    backgroundColor: '#5E7572',
    borderRadius: 35,
    paddingVertical: 5,
  },
  Search: {
    color: 'gray',
    backgroundColor: '#D9D9D9',
    borderRadius: 4,
    paddingVertical: 12,
    width: '75%',
    alignSelf: 'center',
    bottom: '-30%',
    alignItems: 'center',
    left: 50,
  },
  cartContent: {
    color: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 24,
  },
  title: {
    paddingLeft: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  dot: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 12,
    position: 'absolute',
    zIndex: 99,
    bottom: -2,
    left: -4,
  },
  dotText: {
    fontSize: 12,
  }
})
