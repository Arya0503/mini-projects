const Task = require("../models/taskModel");

exports.getAllTasks = async (query) => {
  const filter = query.search
    ? { title: { $regex: query.search, $options: "i" } }
    : {};
  return await Task.find(filter).sort({ createdAt: -1 });
};

exports.createTask = async (data) => {
  return await Task.create(data);
};

exports.updateTask = async (id, data) => {
  return await Task.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
};
