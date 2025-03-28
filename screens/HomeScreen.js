import React from "react";
import { Dimensions } from "react-native";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import avtImage from "../assets/avt.png";
import saleImg from "../assets/sale.png";

// Lấy chiều rộng màn hình
const screenWidth = Dimensions.get("window").width;

// Tỷ lệ khung hình của hình ảnh (width / height)
const imageAspectRatio = 100 / 190; // Thay bằng tỷ lệ thực tế của hình ảnh

const HomeScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={avtImage}
            style={{ width: 48, height: 48, borderRadius: 24 }}
          />
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: "gray" }}>Your Location</Text>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Savar, Dhaka
            </Text>
          </View>
        </View>
        <Ionicons name="notifications-outline" size={28} color="black" />
      </View>
      {/* Search Bar */}
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          backgroundColor: "#4A43EC",
          padding: 12,
          borderRadius: 16,
          alignItems: "center",
        }}
      >
        <FontAwesome
          name="search"
          size={20}
          color="#FFFFFF"
          style={{ marginRight: 8 }}
        />
        <TextInput
          placeholder="Search your food"
          style={{ flex: 1, fontSize: 16, color: "#FFFFFF" }}
        />
        <Ionicons name="options-outline" size={24} color="gray" />
      </View>
      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 16 }}
      >
        {[
          { name: "Pizza", icon: require("../assets/pizza.png") },
          { name: "Burger", icon: require("../assets/burger.png") },
          { name: "Drink", icon: require("../assets/drink.png") },
          { name: "Rice", icon: require("../assets/rice.png") },
        ].map((item, index) => (
          <TouchableOpacity
            key={index}
            style={{
              paddingVertical: 15,
              paddingHorizontal: 20,
              borderRadius: 16,
              marginRight: 10,
              backgroundColor: index === 0 ? "#4CAF50" : "#e0e0e0",
              alignItems: "center",
            }}
          >
            <Image
              source={item.icon}
              style={{ width: 12, height: 24, marginBottom: 5 }}
            />
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: index === 0 ? "white" : "black",
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={saleImg}
          style={{
            width: "100%",
            height: 180,
            resizeMode: "cover",
            marginTop: 16,
          }}
        />
      </View>

      {/* Popular Items */}
      <View
        style={{
          marginTop: 16,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Popular Items</Text>
        <Text style={{ color: "#4CAF50" }}>View All</Text>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 16 }}
      >
        {[
          { name: "Burger", image: require("../assets/burger2.png") },
          { name: "Pizza", image: require("../assets/pizza2.png") },
        ].map((item, index) => (
          <View
            key={index}
            style={{
              marginRight: 16,
              backgroundColor: "#fff",
              borderRadius: 16,
              padding: 8,
              alignItems: "center",
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 8,
              elevation: 4,
            }}
          >
            <Image
              source={item.image}
              style={{ width: 200, height: 200, borderRadius: 16 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginTop: 8 }}>
              {item.name}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default HomeScreen;