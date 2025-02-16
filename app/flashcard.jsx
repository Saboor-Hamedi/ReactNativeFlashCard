import React, { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipCard = () => {
    if (flipped) {
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setFlipped(!flipped);
  };

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View style={styles.container}>
        <Animated.View
          style={[styles.card, frontAnimatedStyle, styles.cardFront]}
        >
          <Text style={styles.text}>{question}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.card, backAnimatedStyle, styles.cardBack]}
        >
          <Text style={styles.text}>{answer}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default Flashcard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  card: {
    width: 300,
    height: 200,
    backgroundColor: "#3498db",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    // shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    padding: 20,
    backfaceVisibility: "hidden",
  },
  cardFront: {
    position: "absolute",
    top: 0,
  },
  cardBack: {
    position: "absolute",
    top: 0,
    backgroundColor: "#e74c3c",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
