import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";

function ColorSquareScreen() {
  const [inputValue, setInputValue] = useState("");

  function handleTextInputValue(value) {
    setInputValue(value);
    console.log(value);
  }
  return (
    <SafeAreaView>
      <Text style={styles.textstyle}>Color Screen</Text>
      <TextInput
        style={styles.textInputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        value={inputValue}
        onChangeText={(value) => handleTextInputValue(value)}
      />
      <Text>my text input value {inputValue}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInputStyle: {
    margin: 16,
    borderColor: "black",
    borderWidth: 1,
    height: 26,
  },
  textstyle: {
    marginVertical: 20,
    fontSize: 16,
  },
});

export default ColorSquareScreen;
