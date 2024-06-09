import React from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";

function ListScreen() {
  const friends = [
    { name: "Friend 1", id: 1 },
    { name: "Friend 2", id: 2 },
    { name: "Friend 3", id: 3 },
    { name: "Friend 4", id: 4 },
    { name: "Friend 5", id: 5 },
    { name: "Friend 6", id: 6 },
  ];
  return (
    <SafeAreaView>
      <Text>List Screen</Text>
      <FlatList
        horizontal
        keyExtractor={(friend) => friend.id}
        data={friends}
        renderItem={(element) => {
          return <Text style={styles.textstyle}>{element.item.name}</Text>;
        }}
      />
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
  textstyle: {
    marginVertical: 20,
    fontSize: 16,
  },
});

export default ListScreen;
