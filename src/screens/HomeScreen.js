import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.name}>Nguyen Ba Do</Text>
        </View>
        <Image 
          source={{ uri: 'https://i.pravatar.cc/150' }} 
          style={styles.avatar} 
        />
        </View>
      <Text style={styles.title}>Your Insights</Text>
      
      {/* Layout for insights */}
      <View style={styles.insightsContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Scan')}>
          <Ionicons name="scan-outline" size={40} color="#4CAF50" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardValue}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="alert-circle-outline" size={40} color="#F44336" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardValue}>Counterfeited 32</Text>
        </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Success')}>
            <Ionicons name="checkmark-circle-outline" size={40} color="#2196F3" />
            <Text style={styles.cardTitle}>Success</Text>
            <Text style={styles.cardValue}>Checkouts 8</Text>
          </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Ionicons name="time-outline" size={40} color="#FF9800" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardValue}>History 26</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: '#333',
  },
  cardValue: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
