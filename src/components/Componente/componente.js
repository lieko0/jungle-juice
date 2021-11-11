//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Switch,
  Image,
  StatusBar,
} from "react-native";

export default () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "#000",
            marginTop: 100,
          }}
        >
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        {isEnabled ? (
          <ScrollView
            contentContainerStyle={{
              flex: 1,
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                backgroundColor: "#666",
              }}
            >
              <Text
                style={{
                  backgroundColor: "#9789aa",
                  fontSize: 100,
                }}
              >
                a
              </Text>
              <Text
                style={{
                  backgroundColor: "#b1caaa",
                  fontSize: 200,
                }}
              >
                a
              </Text>
              <Text
                style={{
                  backgroundColor: "#798aaa",
                  fontSize: 300,
                }}
              >
                a
              </Text>
              <Text
                style={{
                  backgroundColor: "#abab",
                  fontSize: 400,
                }}
              >
                a
              </Text>
            </View>
          </ScrollView>
        ) : (
          <Image
            style={{
              height: 350,
              width: 300,
            }}
            source={require("../../assets/gif-cat.gif")}
          />
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bbb",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
});
