import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_URL } from "@env";

export const loginFetch = async (email, password) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json();
  if (!res.ok) {
    return data.message;
  } else {
    await AsyncStorage.setItem("token", data.token);
  }
};

export const registerFetch = async (email, password, name) => {
  const res = await fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, userName: name }),
  });
  const data = await res.json();
  if (!res.ok) {
    return data.message;
  } else {
    console.log("true");
    return false;
  }
};
