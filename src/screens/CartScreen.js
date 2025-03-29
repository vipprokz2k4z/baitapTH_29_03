import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartScreen = () => {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Orange Juice', brand: "Lauren's", price: 149, quantity: 2, image: require('../assets/orange-juice.png') },
    { id: '2', name: 'Skimmed Milk', brand: "Baskin's", price: 129, quantity: 2, image: require('../assets/milk.png') },
    { id: '3', name: 'Aloe Vera Lotion', brand: "Marley's", price: 1249, quantity: 2, image: require('../assets/lotion.png') },
  ]);

  const increaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (id) => {
    setCartItems(cartItems.map(item => item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item));
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Cart 👍</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.price}>₹ {item.price}</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantity}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)} style={styles.quantityButton}>
                <Text style={styles.quantityText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
      </View>

      <TouchableOpacity 
        style={styles.checkoutButton} 
        onPress={() => navigation.navigate('Checkout', { totalAmount })}
      >
        <Text style={styles.checkoutText}>Proceed to checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  itemContainer: { flexDirection: 'row', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 10 },
  itemImage: { width: 50, height: 50, borderRadius: 10 },
  itemDetails: { flex: 1, marginLeft: 15 },
  brand: { fontSize: 12, color: 'gray' },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#FF5733', marginTop: 5 },
  quantityContainer: { flexDirection: 'row', alignItems: 'center' },
  quantityButton: { width: 30, height: 30, borderRadius: 15, backgroundColor: '#f0f0f0', justifyContent: 'center', alignItems: 'center' },
  quantityText: { fontSize: 20, fontWeight: 'bold' },
  quantity: { fontSize: 16, marginHorizontal: 10 },
  totalContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  totalLabel: { fontSize: 18, fontWeight: 'bold' },
  totalAmount: { fontSize: 18, color: '#FF5733', fontWeight: 'bold' },
  checkoutButton: { backgroundColor: '#FF7F50', padding: 15, borderRadius: 30, alignItems: 'center' },
  checkoutText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default CartScreen;
