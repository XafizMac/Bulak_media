import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Vibration,
} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const [size, setSize] = useState(240);
  const handleMaximize = () => {
    if (size >= 600) {
      setSize(600);
    } else {
      setSize(size + 100);
    }
  };
  const handleMinimize = () => setSize(size - 100);
  const handleCount = () => {
    setNumber((prev) => prev + 1);
    Vibration.vibrate(50);
    saveNumber(number + 1);
  };
  const handleZero = () => {
    setNumber(0);
    saveNumber(0);
    Vibration.vibrate(70);
  };
  useEffect(() => {
    loadSavedNumbers();
  }, []);
  const loadSavedNumbers = async () => {
    try {
      const savedNumber = await AsyncStorage.getItem("savedNumber");
      if (savedNumber !== null) {
        setNumber(parseInt(savedNumber, 10));
      }
    } catch (error) {
      console.error("Error loading saved number", error);
    }
  };
  const saveNumber = async (value) => {
    try {
      await AsyncStorage.setItem("savedNumber", value.toString());
    } catch (error) {
      console.error("Error saving number", error);
    }
  };

  return (
    <View style={[styles.counter, { height: size }]}>
      <View style={styles.counter_row}>
        <View style={styles.size_btns}>
          <Pressable onPress={handleMaximize}>
            <MaterialIcons name="keyboard-arrow-up" size={40} color="white" />
          </Pressable>
          {size >= 300 && (
            <Pressable onPress={handleMinimize}>
              <MaterialIcons
                name="keyboard-arrow-down"
                size={40}
                color="white"
              />
            </Pressable>
          )}
        </View>
        <Pressable onPress={handleZero}>
          <AntDesign name="close" size={25} color="white" />
        </Pressable>
      </View>
      <Pressable onPress={handleCount}>
        <View style={styles.counter_area}>
          <Text style={styles.number}>{number}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    backgroundColor: "#461151",
    position: "absolute",
    width: "100%",
    bottom: 60,
    right: 0,
    padding: 10,
    paddingBottom: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  counter_row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  counter_area: {
    paddingBottom: 30,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    fontSize: 40,
    color: "white",
    // fontFamily: "Medium",
  },
  size_btns: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
