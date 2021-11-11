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
export default () => {
  const [menu, setMenu] = useState(true);
  const onPress = () => setMenu((previousState) => !previousState);
  return (
    <View style={styles.totalOptions}>
      <TouchableHighlight style={styles.options} onPress={onPress}>
        <Text>bbbb</Text>
      </TouchableHighlight>

      {menu ? (
        <></>
      ) : (
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis urna
          pretium dui rutrum hendrerit. Morbi sagittis metus odio, non cursus
          lacus fermentum sit amet. Vestibulum eget facilisis augue. Fusce sed
          eleifend velit, eget commodo erat. Morbi nec pellentesque nisl, sed
          pharetra enim. Nam sem est, sodales vehicula ultrices non, fermentum
          vel libero. Pellentesque sed nisi in urna vehicula pharetra in a
          augue. Sed augue nisi, laoreet ac mollis ut, ornare id justo.
        </Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  totalOptions: {
    //flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  options: {
    marginHorizontal: 5,
    marginVertical: 2,
    borderRadius: 20,
    //overflow: "hidden",
    width: 200,
    height: 35,
    backgroundColor: "#999",
    alignItems: "center",
    justifyContent: "center",
  },
});
