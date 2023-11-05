import { FlatList, Image, Text } from "react-native";
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
} from "./styles";
import { useState } from "react";

interface ITasks {
  id: string;
  title: string;
  done: boolean;
}

export const Tasks = () => {
  const [tasks, setTasks] = useState<ITasks[]>([]);
  return (
    <TasksContainer>
      <AddTaskContainer>
        <TaskInput placeholder="Adicione uma nova tarefa" />
        <AddTaskButton>
          <Image source={require("../../assets/plus.png")} />
        </AddTaskButton>
      </AddTaskContainer>
      <TasksRelationContainer>
        <TaskRelationContent>
          <CustomText color="BLUE">Criadas</CustomText>
          <NumberOfTasksCircle>
            <Text style={{ color: "#FFF" }}>0</Text>
          </NumberOfTasksCircle>
        </TaskRelationContent>

        <TaskRelationContent>
          <CustomText color="PURPLE">Concluídas</CustomText>
          <NumberOfTasksCircle>
            <Text style={{ color: "#FFF" }}>0</Text>
          </NumberOfTasksCircle>
        </TaskRelationContent>
      </TasksRelationContainer>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
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
