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
  TouchableHighlight,
} from "react-native";
import SwitchStatusBar from "./switchStatusBar";
import Opcao from "./opcao";
export default () => {
  const [menu, setMenu] = useState(true);
  const onPress = () => setMenu((previousState) => !previousState);
  return (
    <View style={styles.total}>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#559"
          barStyle={"light-content"}
          showHideTransition={"slide"}
          hidden={false}
        />
        <View style={styles.boxPlus}>
          <TouchableHighlight style={styles.boxPlus} onPress={onPress}>
            <Image
              style={{
                height: 43,
                width: 43,
                borderRadius: 30,
                //backgroundColor: "blue",
              }}
              source={require("../../assets/image-face.jpg")}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.boxText}>
          <TextInput placeholder="Search" style={styles.textInput} />
        </View>

        <View style={styles.box}>
          <SwitchStatusBar />
        </View>
      </View>
      {menu ? (
        <></>
      ) : (
        <ScrollView contentContainerStyle={styles.totalOptions}>
          <Opcao style={styles.options} />
          <Opcao style={styles.options} />
          <Opcao style={styles.options} />
          <Opcao style={styles.options} />
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  total: {
    //flex: 1,
    backgroundColor: "#ccc",
    //alignItems: "center",
    //justifyContent: "center",
  },
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
  boxPlus: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 30,
    //overflow: "hidden",
    width: 45,
    height: 45,
    backgroundColor: "#fff",
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
  totalOptions: {
    //flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  options: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 20,
    //overflow: "hidden",
    width: "100%",
    height: 35,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "#fff",
    borderRadius: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonOption: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    width: 100,
    backgroundColor: "#fFF00f",
  },
});
