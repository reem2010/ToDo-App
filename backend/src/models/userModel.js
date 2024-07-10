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
// console.log(createUser("reem", "reem"));

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
  const user = prisma.user.findUnique({
    where: {
      id: userid,
    },
  });
  return user;
};

export const getUser = async (userEmail) => {
  const user = prisma.user.findUnique({
    where: {
      email: userEmail,
    },
  });
  return user;
};

export const deleteUser = async (userEmail) => {
  const user = prisma.user.delete({
    where: {
      email: userEmail,
    },
  });
  return user;
};
