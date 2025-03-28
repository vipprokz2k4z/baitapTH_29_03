import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const CartScreen = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 40 }}>
          Shopping Cart
        </Text>
        <Ionicons name="trash-outline" size={28} color="black" />
      </View>

      {/* Product Image */}
      <View style={{ alignItems: "center" }}>
        <Image
          source={require("../assets/burger3.png")}
          style={{ width: "100%", height: 200, borderRadius: 16 }}
          resizeMode="cover"
        />
      </View>

      {/* Product Details */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>BURGER</Text>
        <Text style={{ fontSize: 18, color: "#4CAF50", marginVertical: 8 }}>
          $28
        </Text>
        <Text style={{ color: "gray" }}>4.9 (3k+ Rating)</Text>

        {/* Quantity */}
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 16 }}
        >
          <TouchableOpacity
            style={{ padding: 8, backgroundColor: "#e0e0e0", borderRadius: 8 }}
          >
            <FontAwesome name="minus" size={16} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18, marginHorizontal: 12 }}>02</Text>
          <TouchableOpacity
            style={{ padding: 8, backgroundColor: "#4CAF50", borderRadius: 8 }}
          >
            <FontAwesome name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Address */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#f2f2f2",
          padding: 12,
          borderRadius: 16,
          marginTop: 16,
        }}
      >
        <Ionicons name="location-outline" size={24} color="black" />
        <Text style={{ marginLeft: 8 }}>
          Delivery Address: Dhaka, Bangladesh
        </Text>
      </View>

      {/* Payment Method */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f2f2f2",
          padding: 12,
          borderRadius: 16,
          marginTop: 16,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="credit-card" size={24} color="black" />
          <Text style={{ marginLeft: 8 }}>Payment Method</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#4CAF50" }}>Change</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Summary */}
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Checkout Summary
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <Text>Subtotal (2)</Text>
          <Text>$56</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <Text>Delivery Fee</Text>
          <Text>$6.20</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Payable Total
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#4CAF50" }}>
            $62.2
          </Text>
        </View>
      </View>

      {/* Confirm Order Button */}
      <TouchableOpacity
        style={{
          backgroundColor: "#4CAF50",
          padding: 16,
          borderRadius: 16,
          alignItems: "center",
          marginTop: 16,
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
          Confirm Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartScreen;