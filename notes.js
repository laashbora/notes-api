const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// GET all notes
app.get('/notes', async (req, res) => {
  const notes = await prisma.note.findMany();
  res.json(notes);
});

// POST a new note
app.post('/notes', async (req, res) => {
  const note = await prisma.note.create({
    data: {
      title: req.body.title,
      content: req.body.content
    }
  });
  res.status(201).json(note);
});

// GET a single note by id
app.get('/notes/:id', async (req, res) => {
  const note = await prisma.note.findUnique({
    where: { id: parseInt(req.params.id) }
  });
  if (!note) return res.status(404).json({ error: 'Note not found' });
  res.json(note);
});

// PUT update a note
app.put('/notes/:id', async (req, res) => {
  try {
    const note = await prisma.note.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: req.body.title,
        content: req.body.content
      }
    });
    res.json(note);
  } catch (err) {
    res.status(404).json({ error: 'Note not found' });
  }
});

// DELETE a note
app.delete('/notes/:id', async (req, res) => {
  try {
    await prisma.note.delete({
      where: { id: parseInt(req.params.id) }
    });
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: 'Note not found' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
