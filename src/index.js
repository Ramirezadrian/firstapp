import { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import { AddItem, TaskItem, ListItem, ModalItem } from './components/index';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);


  const onHandleTask = () => {
    setTaskList((prevTaskList) => [...prevTaskList, {id: Math.random().toString(), value: task}]);
    setTask('');
  }

  const onHandleSelected = (item) => {
    setSelectedTask(item);
      setModalVisible(true);

  }

  const renderItem = ({item}) => (
    <TaskItem item={item} onHandleSelected={onHandleSelected}/>
  )
  
  const onHandleCancel = () => {
    setModalVisible(!modalVisible);
  }

  const onHandleDelete = () => {
    setTaskList((prevTaskList) => prevTaskList.filter((item) => item.id != selectedTask.id))
    setModalVisible(!modalVisible)

  }

  const onHandleChange = (text) => setTask(text)

  return (
    <View style={styles.container}>
      <AddItem task={task} onHandleTask={onHandleTask} onHandleChange={onHandleChange} />
      <ListItem />
      <FlatList
        style = {styles.listContainer}
        data = {taskList}
        renderItem = {renderItem}
        keyExtractor = {item => item.id}
      />
      <ModalItem modalVisible={modalVisible} selectedTask={selectedTask} onHandleCancel={onHandleCancel} onHandleDelete={onHandleDelete}/>
    </View>
  );
}


