import { prisma } from "./client.js";
export const createtask = async (taskData) => {
  const task = await prisma.task.create({
    data: taskData,
  });
  return task;
};

export const updateTask = async (taskId, taskData) => {
  const task = await prisma.task.update({
    where: {
      id: taskId,
    },
    data: {
      taskData,
    },
  });
  return task;
};

export const getTask = async (taskId) => {
  const task = prisma.task.findUnique({
    where: {
      id: taskId,
    },
  });
  return task;
};

export const deleteTask = async (taskId) => {
  const task = prisma.user.delete({
    where: {
      id: taskId,
    },
  });
  return task;
};
