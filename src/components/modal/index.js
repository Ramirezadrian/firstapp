import React from "react";
import { View, Text, Button, Modal } from "react-native";
import { styles } from "./styles";


const ModalItem = ({onHandleCancel, onHandleDelete, modalVisible, selectedTask}) => {
    return (
        <Modal visible={modalVisible} animationType='slide'>
        <View style = {styles.modalContainer}>
          <Text style = {styles.modalTitle}>Task Detail</Text>
          <View style = {styles.modalDetailContainer}>
            <Text style = {styles.modalDetailText}>Are you sure to delete this item?</Text>
            <Text style = {styles.selectedTask}>{selectedTask?.value}</Text>
          </View>
          <View style = {styles.modalButtonContainer}>
            <Button
              title = "Cancel"
              color = '#9197AE'
              onPress={onHandleCancel}
            />
            <Button
              title = "Delete"
              color = '#9197AE'
              onPress={onHandleDelete}
            />
          </View>
        </View>
     </Modal>
    )
}

export default ModalItem