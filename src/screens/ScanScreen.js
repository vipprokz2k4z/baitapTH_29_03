import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ScanScreen() {
  return (
    <View style={styles.scanContainer}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>
      <Image source={{ uri: 'https://via.placeholder.com/300' }} style={styles.scanImage} />
      <View style={styles.scanInfo}>
        <Text style={styles.scanText}>Lauren's</Text>
        <Text style={styles.scanTitle}>Orange Juice</Text>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scanContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F9FA' },
  backButton: { position: 'absolute', top: 40, left: 20 },
  scanImage: { width: 250, height: 350, resizeMode: 'cover', marginBottom: 20 },
  scanInfo: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', padding: 10, borderRadius: 10 },
  scanText: { fontSize: 16, color: '#777' },
  scanTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 10 },
  addButton: { marginLeft: 10, backgroundColor: '#6C63FF', padding: 5, borderRadius: 5 },
});
