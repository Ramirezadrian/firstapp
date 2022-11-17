import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from "./styles";

const ListItem = ({item, taskList,}) => {
    return (
        <View style={styles.listContainer}>
           <Text style={styles.listTitle}>Todo List</Text>
        </View>

    )
}

export default ListItem