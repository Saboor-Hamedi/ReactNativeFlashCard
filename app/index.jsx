import React from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Flashcard from "./flashcard";
import Profile from "./profile";
import { Link } from "expo-router";

import coffeeImage from "../assets/images/coffee.png";

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={coffeeImage}
        resizeMode="cover"
        style={styles.image}
      >
      </ImageBackground> */}
      <Flashcard question={"Question"} answer={"Answer"} />
    </View>
  );
};

const App = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerTitle: "",
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          headerTitle: "",
        }}
      />
    </Drawer.Navigator>
  );
};

export default App;

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
  link: {
    fontSize: 20,
    color: "rgba(255, 223, 18, 0.91)",
    fontWeight: "bold",
  },
});
