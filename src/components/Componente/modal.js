import {
  StatusBar,
  setStatusBarBackgroundColor,
  setStatusBarHidden,
} from "expo-status-bar";
import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          this.setState({ modalVisible: false });
        }}
      >
        <TouchableOpacity
          style={styles.centeredView}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <TouchableWithoutFeedback style={styles.modalView}>
            <View style={styles.modalView}>
              <TouchableHighlight
                style={[styles.button, styles.buttonOption]}
                onPress={() => {
                  setStatusBarBackgroundColor("#559");
                }}
              >
                <Text style={[styles.textStyle, styles.textOption]}>
                  opition 1
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, styles.buttonOption]}
                onPress={() => {
                  setStatusBarBackgroundColor("#000");
                }}
              >
                <Text style={[styles.textStyle, styles.textOption]}>
                  opition 2
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, styles.buttonOption]}
                onPress={() => {
                  setStatusBarBackgroundColor("#fff");
                }}
              >
                <Text style={[styles.textStyle, styles.textOption]}>
                  opition 3
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={[styles.textStyle, styles.textClose]}>close</Text>
              </TouchableHighlight>
            </View>
          </TouchableWithoutFeedback>
        </TouchableOpacity>
      </Modal>

      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Image
          style={{
            height: 45,
            width: 45,
            borderRadius: 30,
            //backgroundColor: "blue",
          }}
          source={require("../../assets/image-face.jpg")}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: "flex-start",
    //marginTop: 22,
  },
  modalView: {
    marginTop: 50,
    backgroundColor: "#559",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
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
  buttonClose: {
    marginVertical: 5,
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  textOption: {
    color: "#222",
  },
  textClose: {
    color: "#fFF",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  box: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 30,
    //overflow: "hidden",
    width: 100,
    //height: 45,
    backgroundColor: "#559",
    alignItems: "center",
    justifyContent: "center",
  },
});
