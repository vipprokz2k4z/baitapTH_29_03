import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';

const CheckoutScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const totalAmount = route.params?.totalAmount || 0;

  const handlePayment = () => {
    // Giả lập quá trình thanh toán thành công
    navigation.replace('Success'); // Thay thế màn hình hiện tại bằng SuccessScreen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Checkout 🛒</Text>
      <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
      <Text style={styles.subText}>Including GST (18%)</Text>

      <View style={styles.paymentMethods}>
        <TouchableOpacity style={styles.creditCardButton}>
          <Text style={styles.paymentText}>💳 Credit card</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applePayButton}>
          <Text style={styles.paymentText}> Apple Pay</Text>
        </TouchableOpacity>
      </View>

      <TextInput style={styles.input} placeholder="Card number" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Cardholder name" />
      <View style={styles.expiryContainer}>
        <TextInput style={[styles.input, styles.smallInput]} placeholder="MM / YYYY" keyboardType="numeric" />
        <TextInput style={[styles.input, styles.smallInput]} placeholder="CVV" keyboardType="numeric" />
      </View>

      <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
        <Text style={styles.payText}>Pay for order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8', padding: 20 },
  header: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  totalAmount: { fontSize: 22, color: '#28A745', fontWeight: 'bold' },
  subText: { fontSize: 14, color: 'gray', marginBottom: 20 },
  paymentMethods: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  creditCardButton: { backgroundColor: '#28A745', padding: 15, borderRadius: 10, flex: 1, marginRight: 10 },
  applePayButton: { backgroundColor: 'black', padding: 15, borderRadius: 10, flex: 1 },
  paymentText: { color: 'white', textAlign: 'center', fontSize: 16 },
  input: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10 },
  expiryContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  smallInput: { flex: 1, marginRight: 10 },
  payButton: { backgroundColor: '#28A745', padding: 15, borderRadius: 30, alignItems: 'center' },
  payText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default CheckoutScreen;
