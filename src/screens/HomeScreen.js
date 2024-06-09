import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";
import { Link } from "@react-navigation/native";
function HomeScreen(props) {
  function buttonHandler() {
    props.navigation.navigate("List");
  }
  function handleColorSquareButton() {
    props.navigation.navigate("ColorSquare");
  }
  function handleBoxScreenButton() {
    props.navigation.navigate("Box");
  }
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>
      <Button title="open List screen" onPress={buttonHandler} />
      <Button
        title="open Color Square screen"
        onPress={handleColorSquareButton}
      />
      <Button title="open Box screen" onPress={handleBoxScreenButton} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
