
---

````md
# 🔍 Zhenix - AI-Powered Code Review Assistant

> 🚀 A full-stack AI-powered code review platform that helps developers write cleaner, safer, and optimized code using Google Gemini AI.


## ✨ Features

- 🤖 AI-powered code review (bugs, security, performance)
- 🌐 Multi-language support (JS, Python, Java, C++, etc.)
- 🔐 Secure JWT authentication + Google OAuth
- 📜 Review history tracking system
- ⚡ Real-time intelligent feedback
- 📱 Fully responsive UI (mobile + desktop)

---

### Welcome Page
![Welcome Page](https://raw.githubusercontent.com/salmankhalid7/zhenix-ai/main/Images/LandingPage.png)

### Home Page
![Home Page](https://raw.githubusercontent.com/salmankhalid7/zhenix-ai/main/Images/Home.png)

### AI Analysis Dashboard & Result
![Result](https://raw.githubusercontent.com/salmankhalid7/zhenix-ai/main/Images/Dashboard.png)
## 🚀 Live Demo

* 🌐 Frontend: [Live on Vercel](https://zhenixaifrontend-421m0kajs-salmankhalids-projects.vercel.app/)
* ⚙️ Backend API: [Backend Deployed](https://zhenix-ai.vercel.app/)
* 📂 GitHub Repo: https://github.com/salmankhalid7/zhenix-ai

## 🧠 Tech Stack

### Frontend

* React.js
* Tailwind CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Google Gemini AI

---

## ⚙️ Installation Guide

```bash
# Clone repo
git clone https://github.com/salmankhalid7/zhenix-ai.git

# Backend setup
cd server
npm install
cp .env.example .env
npm run dev

# Frontend setup
cd ../client
npm install
npm start
```

---

## 🔐 Environment Variables

```env
PORT=8000
MONGO_URL=mongodb://localhost:27017
MONGO_DB=zhenix_db
JWT_SECRET=your_secret_key_min_32_chars
GEMINI_API_KEY=your_gemini_api_key
```

---

## 🧪 API Testing (Postman)

```http
POST /api/auth/register
POST /api/auth/login
POST /api/gemini/review
Authorization: Bearer <token>
```

---

## 📁 Project Structure

```text
zhenix/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── utils/
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── utils/
```

---

## 🐛 Common Issues

* ❌ MongoDB not connected → run `mongod` or check Atlas URL
* ❌ JWT error → verify `JWT_SECRET` in `.env`
* ❌ Port conflict → change PORT in `.env`

---

## 📈 Future Improvements

* 🧠 AI chat assistant for debugging
* 📊 Code quality scoring system
* 👥 Team collaboration features
* ☁️ Cloud deployment pipeline (CI/CD)

---

## 👨‍💻 Author

**Salman Khalid**
📧 [m.salmankhalid123@gmail.com](mailto:m.salmankhalid123@gmail.com)
🔗 GitHub: [https://github.com/salmankhalid7](https://github.com/salmankhalid7)
🔗 LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/your-profile)

---

## 📄 License

This project is licensed under the MIT License.

---
