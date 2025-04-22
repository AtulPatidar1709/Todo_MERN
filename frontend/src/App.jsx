import { useEffect, useState } from 'react';
import { useTasks } from './context/taskContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const { tasks, fetchTasks, addTask, deleteTask, updateTask } = useTasks();
  const [taskInput, setTaskInput] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    const title = taskInput.trim();
    if (!title) return;

    if (isEditing && editId) {
      updateTask(editId, { taskName: title });
      setIsEditing(false);
      setEditId(null);
    } else {
      addTask(title);
    }

    setTaskInput('');
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleDelete = (id) => {
    deleteTask(id);
  };

  const handleEdit = (task) => {
    setTaskInput(task.taskName);
    setIsEditing(true);
    setEditId(task._id);
  };

  const handleToggleDone = (task) => {
    updateTask(task._id, { isDone: !task.isDone });
  };

  return (
    
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="display-4">📝 Task Todo's</h1>
        <p className="lead">Stay organized, one task at a time</p>
      </div>

      <div className="card shadow-sm p-4 mb-5">
        <h3 className="mb-3">{isEditing ? 'Edit Task' : 'Add New Task'}</h3>
        <form onSubmit={handleAddOrUpdate} className="d-flex gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-primary">
            {isEditing ? 'Update' : 'Add'} Task
          </button>
        </form>
      </div>

      <div>
        <h3 className="mb-3">Your Tasks</h3>
        {tasks.length > 0 ? (
          <div className="row">
            {tasks.map((task) => (
              <div className="col-md-4 mb-4" key={task._id}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title mb-0">{task.taskName}</h5>
                      <button
                        className={`badge ${task.isDone ? 'bg-success' : 'bg-warning'} text-wrap border-0`}
                        type="button"
                        onClick={() => handleToggleDone(task)}
                      >
                        {task.isDone ? '✅ Done' : '⏳ Not Done'}
                      </button>
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-secondary"
                      type="button"
                      onClick={() => handleEdit(task)}
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
