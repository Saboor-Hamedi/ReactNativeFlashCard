import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

// import image
import coffeeImage from "../../assets/images/coffee.png";

const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.text}>Hello World</Text>
      </ImageBackground>
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    color: "rgba(206, 53, 137, 0.91)",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(222, 211, 211, 0.5)",
    padding: 10,
    borderRadius: 10,
    width: "100%",
  },
});
