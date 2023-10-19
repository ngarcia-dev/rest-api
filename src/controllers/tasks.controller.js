import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    //const tasks = await Task.find() // return all tasks
    const tasks = await Task.find({
      user: req.user.id, // devuelve las tareas pertenecientes al user.id
    }).populate("user"); // busca la consulta del usuario y guarde todos sus datos aqui
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ messege: "Something went wrog" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;

    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });

    const savedTasks = await newTask.save();
    res.json(savedTasks);
  } catch (error) {
    return res.status(500).json({ messege: "Something went wrog" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ messege: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ messege: "Task not found" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ messege: "Task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ messege: "Task not found" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ messege: "Task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ messege: "Task not found" });
  }
};
