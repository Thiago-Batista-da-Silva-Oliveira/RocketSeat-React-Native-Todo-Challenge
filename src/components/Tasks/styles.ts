import styled from "styled-components/native";

interface ITextProps {
  color: "BLUE" | "PURPLE" | "GRAY_400" | "GRAY_300" | "GRAY_200" | "GRAY_100";
  fontWeigth?: "REGULAR" | "BOLD";
  fontSize?: "SM" | "MD" | "LG";
  textDecoration?: "line-through" | "none";
}

const TasksContainer = styled.View`
  width: 100vw;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 0 24px;
`;

const AddTaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 54px;
  width: 100%;
  margin-top: -24px;
  gap: 10px;
`;

const AddTaskButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};
  display: flex;
  padding: 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
`;

const TaskInput = styled.TextInput`
  height: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  padding: 16px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TasksRelationContainer = styled.View`
  padding: 25px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TaskRelationContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const CustomText = styled.Text<ITextProps>`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme, color }) => theme.COLORS[color]};
  font-size: ${({ fontSize, theme }) =>
    fontSize ? `${theme.FONT_SIZE[fontSize]}px` : `${theme.FONT_SIZE.MD}px`};
  font-style: normal;
  font-weight: ${({ fontWeigth }) =>
    fontWeigth === "BOLD" ? "bold" : "normal"};
  text-decoration-line: ${({ textDecoration }) => textDecoration || "none"};
`;

const NumberOfTasksCircle = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  display: flex;
  padding: 2px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
`;

const EmptyTasksContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 400px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

const TaskContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 8px 12px 12px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 8px;
`;

export {
  TasksContainer,
  AddTaskContainer,
  TaskInput,
  AddTaskButton,
  TasksRelationContainer,
  TaskRelationContent,
  CustomText,
  NumberOfTasksCircle,
  EmptyTasksContainer,
  TaskContainer,
};
