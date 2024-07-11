import * as taskModel from "../models/taskModel.js";

export const createTask = async (req, res) => {
  const { title, description, priority } = req.body;
  try {
    const task = taskModel.createtask({
      title,
      description,
      priority,
      userId: req.user.id,
    });
    res.status(201).json({
      task: task,
      message: "task created successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getTasks = async (req, res) => {
  const userId = req.user.id;
  try {
    const tasks = await taskModel.getTasks(userId);
    res.status(200).json({ Tasks: tasks });
  } catch {
    res.status(400).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  const taskId = +req.params.taskId;
  const { title, description, priority } = req.body;

  try {
    const task = await taskModel.updateTask(taskId, {
      title,
      description,
      priority,
    });
    res.status(200).json({
      task: task,
      message: "task updated successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const taskId = +req.params.taskId;
  try {
    await taskModel.deleteTask(taskId);
    res.status(200).json({
      message: "task deleted successfully",
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
