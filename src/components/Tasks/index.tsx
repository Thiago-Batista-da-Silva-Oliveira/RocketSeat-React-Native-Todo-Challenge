import {
  FlatList,
  Image,
  NativeSyntheticEvent,
  Text,
  TextInputChangeEventData,
  TouchableOpacity,
} from "react-native";
import {
  AddTaskButton,
  AddTaskContainer,
  EmptyTasksContainer,
  NumberOfTasksCircle,
  TaskInput,
  TaskRelationContent,
  CustomText,
  TasksContainer,
  TasksRelationContainer,
  TaskContainer,
} from "./styles";
import { useState } from "react";

interface ITasks {
  id: string;
  title: string;
  done: boolean;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const handleTaskInputChange = (
    text: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setNewTaskTitle(text.nativeEvent.text);
  };
  const handleAddTask = () => {
    const data = {
      id: String(new Date().getTime()),
      title: newTaskTitle,
      done: false,
    };
    setTasks((prev) => [...prev, data]);
    setNewTaskTitle("");
  };

  const handleRemoveTask = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleToggleTaskDone = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };
  return (
    <TasksContainer>
      <AddTaskContainer>
        <TaskInput
          placeholderTextColor="#808080" 
          value={newTaskTitle}
          onChange={(text) => handleTaskInputChange(text)}
          placeholder="Adicione uma nova tarefa"
        />
        <AddTaskButton onPress={() => handleAddTask()}>
          <Image source={require("../../assets/plus.png")} />
        </AddTaskButton>
      </AddTaskContainer>
      <TasksRelationContainer>
        <TaskRelationContent>
          <CustomText color="BLUE">Criadas</CustomText>
          <NumberOfTasksCircle>
            <CustomText color="GRAY_200">{tasks.length}</CustomText>
          </NumberOfTasksCircle>
        </TaskRelationContent>

        <TaskRelationContent>
          <CustomText color="PURPLE">Concluídas</CustomText>
          <NumberOfTasksCircle>
            <CustomText color="GRAY_200">
              {tasks.filter((data) => data.done).length}
            </CustomText>
          </NumberOfTasksCircle>
        </TaskRelationContent>
      </TasksRelationContainer>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskContainer>
            {item.done ? (
              <TouchableOpacity onPress={() => handleToggleTaskDone(item.id)}>
                <Image source={require("../../assets/check.png")} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={() => handleToggleTaskDone(item.id)}>
                <Image source={require("../../assets/circle.png")} />
              </TouchableOpacity>
            )}
            <CustomText
              textDecoration={item.done ? "line-through" : "none"}
              color={item.done ? "GRAY_300" : "GRAY_100"}
              fontSize="MD"
              fontWeigth="REGULAR"
              style={{flex: 1}}
            >
              {item.title}
            </CustomText>
            <TouchableOpacity onPress={() => handleRemoveTask(item.id)}>
              <Image source={require("../../assets/trash.png")} />
            </TouchableOpacity>
          </TaskContainer>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyTasksContainer>
            <Image source={require("../../assets/Clipboard.png")} />
            <CustomText fontSize="LG" color="GRAY_400" fontWeigth="BOLD">
              Você ainda não tem tarefas cadastradas
            </CustomText>
            <CustomText fontSize="LG" color="GRAY_400" fontWeigth="REGULAR">
              Crie tarefas e organize seus itens a fazer
            </CustomText>
          </EmptyTasksContainer>
        )}
      />
    </TasksContainer>
  );
};
