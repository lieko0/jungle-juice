import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
} from "react-native";
import Componente from "./src/components/Componente/componente";
import Navibar from "./src/components/Componente/navibar";
import Navbar2 from "./src/components/Componente/navbar2";
export default function App() {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {isEnabled ? <Navibar /> : <Navbar2 />}
      <ScrollView contentContainerStyle={styles.centeredView}>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </ScrollView>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#bbb",
    //alignItems: "center",
    //justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
});
