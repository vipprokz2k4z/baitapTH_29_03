import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Nút Back */}
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Ảnh minh họa */}
      <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1040/1040230.png' }} style={styles.image} />

      {/* Tiêu đề */}
      <Text style={styles.title}>Payment Success, Yayy!</Text>
      <Text style={styles.subtitle}>We will send order details and invoice in your contact no. and registered email.</Text>

      {/* Nút "Check Details" */}
      <TouchableOpacity onPress={() => {}} style={styles.linkButton}>
        <Text style={styles.linkText}>Check Details →</Text>
      </TouchableOpacity>

      {/* Nút "Download Invoice" */}
      <TouchableOpacity onPress={() => {}} style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' },
  backButton: { position: 'absolute', top: 50, left: 20, padding: 10 },
  backText: { fontSize: 24, color: '#555' },
  image: { width: 200, height: 200, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { fontSize: 14, color: 'gray', textAlign: 'center', marginBottom: 20, paddingHorizontal: 30 },
  linkButton: { marginBottom: 20 },
  linkText: { color: '#007BFF', fontSize: 16 },
  downloadButton: { backgroundColor: '#007BFF', padding: 15, borderRadius: 30, width: '80%', alignItems: 'center' },
  downloadText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default SuccessScreen;
