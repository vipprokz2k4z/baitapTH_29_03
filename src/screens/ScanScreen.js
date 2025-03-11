import React, { useEffect, useRef } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function ScanScreen() {
  const scanAnim = useRef(new Animated.Value(0)).current;

  // Hiệu ứng quét
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanAnim, {
          toValue: 1,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(scanAnim, {
          toValue: 0,
          duration: 1500,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  // Vị trí quét
  const scanTranslateY = scanAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 150], // Điều chỉnh độ cao vùng quét
  });

  return (
    <View style={styles.scanContainer}>
      {/* Nút Back */}
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back-outline" size={24} color="#000" />
      </TouchableOpacity>

      {/* Vùng quét */}
      <View style={styles.scanFrame}>
      <Image source={require('../assets/juice.png')} style={styles.scanImage} />

        <Animated.View style={[styles.scanLine, { transform: [{ translateY: scanTranslateY }] }]} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.scanInfo}>
      <Image source={require('../assets/juice.png')} style={styles.scanImage} />

        <View style={{ flex: 1 }}>
          <Text style={styles.scanText}>Lauren's</Text>
          <Text style={styles.scanTitle}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scanContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4EDE2',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 10,
  },
  scanFrame: {
    width: 280,
    height: 400,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  scanImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
  scanLine: {
    position: 'absolute',
    top: 0,
    width: '80%',
    height: 5,
    backgroundColor: 'rgba(255, 0, 0, 0.7)',
    borderRadius: 2,
  },
  scanInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
    marginTop: 20,
  },
  productThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginRight: 10,
  },
  scanText: {
    fontSize: 14,
    color: '#777',
  },
  scanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#6C63FF',
    padding: 10,
    borderRadius: 10,
  },
});
