import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

export const getTasks = async () => {
  const token = await AsyncStorage.getItem("token");
  const res = await fetch(`${API_URL}/tasks/`, {
    headers: {
      Authorization: token,
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data.Tasks;
  }
};

export const UpdateTask = async (taskData, taskId) => {
  const token = await AsyncStorage.getItem("token");
  const res = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(taskData),
  });
  if (res.ok) {
    return true;
  }
};
export const deleteTask = async (taskId) => {
  const token = await AsyncStorage.getItem("token");
  const res = await fetch(`${API_URL}/tasks/${taskId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (res.ok) {
    return true;
  }
};

export const createTask = async (taskData) => {
  const token = await AsyncStorage.getItem("token");
  const res = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
    body: JSON.stringify(taskData),
  });
  if (res.ok) {
    return true;
  }
};
