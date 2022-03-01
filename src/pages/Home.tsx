import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task   
      const info = {
        id: new Date().getTime(),
        title: newTaskTitle,
        done: false,
      }
      //as duas formas estão corretas
      setTasks(allData => [...allData, info])
      setTasks([...tasks, info])
      
    
    
   
  }

  function handleToggleTaskDone(id: number) {
    //TODO - toggle task done if exists
    //const newListOfTasks = [...tasks]
    const newListOfTasks = tasks.map(task => ({...task}))

    const foundItem = newListOfTasks.find(task => task.id === id)
    
    if(!foundItem){
      return;
    }
    foundItem.done = !foundItem.done;
    setTasks(newListOfTasks)
    console.log(foundItem)
  }

  function handleRemoveTask(id: number) {
    const newListOfTasks = tasks.filter(task=> task.id !== id)
    setTasks(newListOfTasks)
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})