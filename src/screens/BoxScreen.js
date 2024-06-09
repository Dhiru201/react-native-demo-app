import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

function BoxScreen() {
  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.textstyle}>Child 1</Text>
        <Text style={styles.textstyle}>Child 2</Text>
        <Text style={styles.textstyle}>Child 3</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderColor: "black",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    height: 50,
  },
  textstyle: {
    borderColor: "red",
    borderWidth: 3,
    flex: 1,
  },
});

export default BoxScreen;
