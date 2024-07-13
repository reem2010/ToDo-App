import { prisma } from "./client.js";
export const createUser = async (userName, email, password) => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      userName: userName,
    },
  });
  return user;
};

export const updateUser = async (email, newData) => {
  const user = await prisma.user.update({
    where: {
      email: email,
    },
    data: {
      newData,
    },
  });
  return user;
};

export const getUserById = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
};

export const getUser = async (userEmail) => {
  const user = await prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  return user;
};

export const deleteUser = async (userEmail) => {
  const user = await prisma.user.delete({
    where: {
      email: userEmail,
    },
  });
  return user;
};
