import express from 'express';
import toolkit from '@reduxjs/toolkit';

const app = express();
app.use(express.json());

const notes = [
  {
    id: toolkit.nanoid(), name: 'Test note', status: 'todo', color: 'green',
  },

  {
    id: toolkit.nanoid(), name: 'Test note', status: 'todo', color: 'blue',
  },

  {
    id: toolkit.nanoid(), name: 'Test note', status: 'todo', color: 'purple',
  },

  {
    id: toolkit.nanoid(), name: 'Test note', status: 'todo', color: 'red',
  },

];

app.get('/api/notes', (req, res) => {
  res.send(notes);
});

app.post('/api/add/', (req, res) => {
  const { value } = req.body;
  const { activeColor } = req.body;

  const note = {
    id: toolkit.nanoid(), name: value, status: 'todo', color: activeColor,
  };
  notes.push(note);
  res.send(note);
});

app.listen(3001, () => {
  console.log('SW START');
});
