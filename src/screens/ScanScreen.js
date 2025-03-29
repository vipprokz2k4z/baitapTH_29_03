import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const ScanScreen = () => {
  return (
    <View style={styles.container}>
      {/* Hình ảnh chai nước ép */}
      <View style={styles.scanArea}>
        <Image source={require("../assets/juice.png")} style={styles.productImage} />
        <View style={styles.overlay} />
      </View>

      {/* Thông tin sản phẩm */}
      <View style={styles.productContainer}>
        <Image source={require("../assets/juice.png")} style={styles.productThumb} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Lauren’s</Text>
          <Text style={styles.productDesc}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3EDE5", alignItems: "center", justifyContent: "center" },
  scanArea: { width: 250, height: 400, alignItems: "center", justifyContent: "center" },
  productImage: { width: 200, height: 350, resizeMode: "contain" },
  overlay: {
    position: "absolute",
    width: 220,
    height: 360,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 20,
  },
  productContainer: {
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  productThumb: { width: 50, height: 50, borderRadius: 10 },
  productInfo: { flex: 1, marginLeft: 10 },
  productName: { fontSize: 14, color: "gray" },
  productDesc: { fontSize: 18, fontWeight: "bold" },
  addButton: {
    width: 35,
    height: 35,
    backgroundColor: "#4A90E2",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  addText: { fontSize: 22, color: "white", fontWeight: "bold" },
});

export default ScanScreen;
