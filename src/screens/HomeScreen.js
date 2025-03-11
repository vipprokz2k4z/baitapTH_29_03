import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const images = [
  { id: '1', uri: 'https://source.unsplash.com/100x100/?fruit' },
  { id: '2', uri: 'https://source.unsplash.com/100x100/?juice' },
  { id: '3', uri: 'https://source.unsplash.com/100x100/?drink' },
  { id: '4', uri: 'https://source.unsplash.com/100x100/?bottle' },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Hello 👋</Text>
          <Text style={styles.username}>Christie Doe</Text>
        </View>
        <Image source={{ uri: 'https://i.pravatar.cc/150' }} style={styles.avatar} />
      </View>

      {/* Section Title */}
      <Text style={styles.sectionTitle}>Your Insights</Text>

      {/* Grid Section */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <Icon name="scan-outline" size={30} color="#6C63FF" />
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSub}>Scanned 483</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="alert-circle-outline" size={30} color="#FF6363" />
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSub}>Counterfeited 32</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="checkmark-circle-outline" size={30} color="#4CAF50" />
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSub}>Checkouts 8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Icon name="calendar-outline" size={30} color="#2196F3" />
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSub}>History 26</Text>
        </TouchableOpacity>
      </View>

      {/* Explore More Section */}
      <View style={styles.exploreSection}>
        <Text style={styles.exploreTitle}>Explore More</Text>
        <TouchableOpacity>
          <Icon name="chevron-forward-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Image Scroll */}
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.uri }} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    color: '#757575',
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#F7F8FC',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  },
  cardSub: {
    fontSize: 12,
    color: '#9E9E9E',
    marginTop: 2,
  },
  exploreSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  exploreTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
