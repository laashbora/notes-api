# Notes API

A REST API for managing notes built using Node.js, Express.js, Prisma ORM, and PostgreSQL.

## Features

- Create notes
- Read all notes
- Update notes
- Delete notes
- PostgreSQL database integration
- Prisma ORM

## Tech Stack

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM

## Installation

```bash
git clone https://github.com/laashbora/Notes_api.git
cd Notes_api
npm install
```

Create a `.env` file:

```env
DATABASE_URL=your_database_url
```

Generate Prisma Client:

```bash
npx prisma generate
```

Run the server:

```bash
node notes.js
```

## API Endpoints

GET /notes

POST /notes

PUT /notes/:id

DELETE /notes/:id
