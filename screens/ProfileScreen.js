import React from "react";
import { View, Text, Image, Switch, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 16 }}>
      {/* Header */}
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 16 }}>
          Profile
        </Text>
      </View>

      {/* Profile Info */}
      <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Image
          source={require("../assets/profile.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text style={{ fontSize: 22, fontWeight: "bold", marginTop: 8 }}>
          Rakibul Hasan
        </Text>
        <Text style={{ color: "gray" }}>phuclccf@gmail.com</Text>
      </View>

      {/* Menu Items */}
      {[
        { name: "Home", icon: "home" },
        { name: "My Card", icon: "credit-card" },
        { name: "Dark Mode", icon: "moon-o", switch: true },
        { name: "Track Your Order", icon: "map-marker" },
        { name: "Settings", icon: "cog" },
        { name: "Help Center", icon: "question-circle" },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 12,
            borderBottomWidth: 1,
            borderBottomColor: "#f0f0f0",
          }}
        >
          <FontAwesome
            name={item.icon}
            size={22}
            color="black"
            style={{ marginRight: 16 }}
          />
          <Text style={{ fontSize: 18, flex: 1 }}>{item.name}</Text>
          {item.switch ? (
            <Switch />
          ) : (
            <Ionicons name="chevron-forward" size={22} color="gray" />
          )}
        </TouchableOpacity>
      ))}

      {/* Logout Button */}
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "#4CAF50",
          padding: 16,
          borderRadius: 10,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;