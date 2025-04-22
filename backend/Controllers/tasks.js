const TaskModel = require("../Models/task");

// Add Task
const addTask = async (req, res) => {
  
    try {

        console.log("Received POST /tasks with body:", req.body);

        const { taskName } = req.body;

        // console.log(taskName);  

        if (!taskName) {
            return res.status(409).json({ message: 'Please enter Title.', success: false });
        }

        const taskModel = new TaskModel({ taskName });

        await taskModel.save();

        res.status(201).json({
        message: "Created Successfully",
        success: true,
        task: taskModel
        });

    } catch (err) {
        // console.error("Error while adding task:", err); // Add this line
        res.status(500).json({ message: "Internal server error", success: false });
    }

};

// Get All Tasks
const getAllTask = async (req, res) => {
  try {
    const task = await TaskModel.find({});
    res.status(200).json({
      message: "Fetch Success",
      success: true,
      data: task
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Delete Task
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await TaskModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Task not found", success: false });
    }

    res.status(200).json({
      message: "Deleted Successfully",
      success: true
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

// Update Task (e.g., toggle isDone or rename)
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const updatedTask = await TaskModel.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found", success: false });
    }

    res.status(200).json({
      message: "Updated Successfully",
      success: true,
      task: updatedTask
    });
  } catch (err) {
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports = {
  addTask,
  getAllTask,
  deleteTask,
  updateTask
};
