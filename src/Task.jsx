import React, { useState } from 'react';
import dayjs from 'dayjs';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('17:00');
  const [selectedTime, setSelectedTime] = useState('AM');
  const [filter, setFilter] = useState('all'); 

  const handleAddTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        {
          text: taskInput,
          startTime: `${startTime} ${selectedTime}`,
          endTime: `${endTime} ${selectedTime}`,
          date: dayjs().format('YYYY-MM-DD'), 
        }
      ]);
      setTaskInput('');
      setStartTime('09:00'); 
      setEndTime('17:00'); 
      setSelectedTime('AM'); 
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filterTasks = () => {
    const today = dayjs().format('YYYY-MM-DD');
    const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');

    if (filter === 'today') {
      return tasks.filter(task => task.date === today);
    }
    if (filter === 'tomorrow') {
      return tasks.filter(task => task.date === tomorrow);
    }
    return tasks; 
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Task Manager</h2>
      <div className="mb-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full"
          placeholder="Enter task"
        />
        <div className="flex gap-2 mt-2">
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
          <span className="mx-2">to</span>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            className="border border-gray-300 p-2 rounded"
          />
        </div>
        <div className="flex gap-2 mt-2">
          <button
            onClick={() => setSelectedTime('AM')}
            className={`px-4 py-2 rounded ${selectedTime === 'AM' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            AM
          </button>
          <button
            onClick={() => setSelectedTime('PM')}
            className={`px-4 py-2 rounded ${selectedTime === 'PM' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            PM
          </button>
        </div>
        <button
          onClick={handleAddTask}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Task
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('today')}
          className={`px-4 py-2 rounded ${filter === 'today' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Today
        </button>
        <button
          onClick={() => setFilter('tomorrow')}
          className={`px-4 py-2 rounded ${filter === 'tomorrow' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Tomorrow
        </button>
      </div>
      <ul>
        {filterTasks().map((task, index) => (
          <li key={index} className="flex justify-between items-center border-b py-2">
            <span>
              {task.text} - {task.startTime} to {task.endTime} - {dayjs(task.date).format('MMM D, YYYY')}
            </span>
            <button
              onClick={() => handleDeleteTask(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Task;
