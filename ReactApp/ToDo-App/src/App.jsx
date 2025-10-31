import { useEffect, useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");

  useEffect(() => {
    try {
      const savedTasksRaw = localStorage.getItem('tasks');
      const savedTasks = savedTasksRaw ? JSON.parse(savedTasksRaw) : [];
      setTasks(Array.isArray(savedTasks) ? savedTasks : []);
    } catch {
      setTasks([]);
    }

  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch {
      
    }
  }, [tasks]);

  //ADD Task

  const addTask = (e) => {
    e.preventDefault();
    if (taskText.trim() === "" || taskDate.trim() === "" || taskTime.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      task: taskText,
      date: taskDate,
      time: taskTime,
      completed: false
    };

   setTasks([...tasks,newTask]);
   setTaskDate("");
   setTaskText("");
   setTaskTime("");

  }



  return (
    <div>
      <h1>To-Do Task List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          placeholder='Enter a new Task'
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <input
          type="date"
          value={taskDate}
          onChange={(e) => setTaskDate(e.target.value)}
        />
        <input
          type="time"
          value={taskTime}
          onChange={(e) => setTaskTime(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.task} — {t.date} {t.time}</li>
        ))}
      </ul>
    </div>
  )
}


export default App;
