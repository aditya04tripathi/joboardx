# 💼 JobBoardX

A modern full-stack job board platform where employers can post job listings and candidates can apply for them. Built with Next.js, Node.js, Express, and MongoDB.

![JobBoardX Preview](https://your-image-link-if-any.com)

## 🚀 Features

- 👤 User authentication (Candidates & Employers)
- 📝 Create, edit, and delete job listings
- 🔍 Search and filter job opportunities
- 📄 Candidates can apply to jobs with resumes
- 🖥️ Dashboards for both Employers and Candidates
- 📬 Email notifications for job applications (optional)

## 🛠️ Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### Auth & Deployment

- [Firebase Auth](https://firebase.google.com/) or [Auth0](https://auth0.com/)
- [Vercel](https://vercel.com/) (Frontend)
- [Render](https://render.com/) or [Heroku](https://heroku.com/) (Backend)

## 🔧 Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/jobboardx.git
cd jobboardx
```

Set up the client

```bash
cd client
npm install
npm run dev
```

Set up the server

```bash
cd server
npm install
npm run dev
```

Make sure you have a .env file in the server folder with the following:

```env
PORT=5000
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

## 🧠 Planned Features

- 🌐 OAuth login (Google/GitHub)
- 🛑 Admin moderation panel
- 📥 Resume file uploads via Cloudinary
- 📈 Analytics for job views and applications
- 🔔 Notification system

## 🙌 Contributing

Feel free to fork this project, open issues, and submit PRs. Contributions are welcome!

## 📜 License

MIT License © 2025 Aditya Tripathi

## 🌐 Live Demo

https://jobboardx.vercel.app
