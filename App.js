import React, { useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";

import axios from "axios";

import Componente from "./src/components/Componente/componente";
import Navibar from "./src/components/Componente/navibar";
import Navbar2 from "./src/components/Componente/navbar2";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.dnd5eapi.co/api/monsters?challenge_rating=0.25")
      .then((response) => {
        setUsers(response.data.results);
        //console.log(response.data);
      })
      .catch((err) => {
        console.log("erro na api", err);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Navibar />
      <ScrollView contentContainerStyle={styles.centeredView}>
        {users.map((user) => {
          return (
            <TouchableWithoutFeedback key={user.index} style={styles.modalView}>
              <View>
                <Text style={[styles.textStyle, styles.textOption]}>
                  {user.name}
                </Text>
                <Text style={[styles.textStyle, styles.textClose]}>
                  {user.url}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: "#bbb",
    //alignItems: "center",
    //justifyContent: "center",
  },
  centeredView: {
    margin: 10,
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
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
    marginBottom: 50,
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
});
