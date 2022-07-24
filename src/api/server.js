import express from 'express';
import toolkit from '@reduxjs/toolkit';

const app = express();
app.use(express.json());

const notes = [
  {
    id: toolkit.nanoid(), name: 'Test note 1', status: 'todo', color: 'green',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 2', status: 'todo', color: 'blue',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 3', status: 'done', color: 'purple',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 4', status: 'doing', color: 'red',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 5', status: 'doing', color: 'blue',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 6', status: 'doing', color: 'yellow',
  },

  {
    id: toolkit.nanoid(), name: 'Test note 66', status: 'doing', color: 'yellow',
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

app.put('/api/update', (req, res) => {
  const index = notes.findIndex((item) => item.id === req.body.id);
  notes[index].status = req.body.status;
  const cutOut = notes.splice(index, 1)[0];
  notes.splice(notes.length, 0, cutOut);
  res.send(notes);
});

app.listen(3001, () => {
  console.log('SW START');
});
