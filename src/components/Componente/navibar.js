import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TextInput,
  StatusBar,
  Modal,
  Pressable,
} from "react-native";
import Modal1 from "./modal";
import SwitchStatusBar from "./switchStatusBar";
export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Modal1 />
      </View>
      <View style={styles.boxText}>
        <TextInput placeholder="Search" style={styles.textInput} />
      </View>
      <View style={styles.box}>
        <SwitchStatusBar />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#559",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    //padding: 5,
    //marginTop: 23,
    //overflow: "hidden",
    //borderRadius: 11,
  },
  box: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 30,
    //overflow: "hidden",
    width: 45,
    height: 45,
    backgroundColor: "#559",
    alignItems: "center",
    justifyContent: "center",
  },
  boxText: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 20,
    //overflow: "hidden",
    width: 230,
    height: 35,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    color: "#000",
    borderRadius: 20,
    //borderColor: "#000000",
    width: 230,
    height: 35,
    backgroundColor: "#999",
    paddingLeft: 10,
  },
});
