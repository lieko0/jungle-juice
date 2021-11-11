import React, { useState } from "react";
import { StyleSheet, View, Switch, StatusBar } from "react-native";
export default () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#559"
        barStyle={"light-content"}
        showHideTransition={"slide"}
        hidden={!isEnabled}
      />
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#559",
    alignItems: "center",
    justifyContent: "center",
    //padding: 5,
    //marginTop: 23,
    //overflow: "hidden",
    //borderRadius: 11,
  },
});
