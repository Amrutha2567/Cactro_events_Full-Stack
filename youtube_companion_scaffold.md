# YouTube Companion Dashboard

## Features
- View video details
- Edit title & description
- Manage comments (add, reply, delete)
- Add notes with tagging + search
- Event logs stored in DB

## API Endpoints
- `GET /api/videos/:id`
- `PUT /api/videos/:id`
- `POST /api/comments/:videoId`
- `POST /api/comments/:videoId/reply/:commentId`
- `DELETE /api/comments/:videoId/:commentId`
- `POST /api/notes`
- `GET /api/notes`
- `GET /api/notes/search?q=`

## Database Schema
### `notes`
- id (serial PK)
- content (text)
- tags (text)
- created_at (timestamp)

### `logs`
- id (serial PK)
- event (text)
- created_at (timestamp)

## Deployment
- Backend: Render / Heroku
- Frontend: Vercel / Netlify
