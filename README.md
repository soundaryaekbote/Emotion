# 🎨 EMOTION : AI-Powered T-Shirt Designer (MERN + GenAI + Payments)

## 🚀 Overview
Emotion_with_AI is a full-stack MERN application that allows users to design custom T-shirts using Generative AI. Users can generate unique designs from text prompts and preview them in real-time on T-shirts.

The platform includes:
- 🧠 AI-powered design generation  
- 👕 Live T-shirt preview  
- 💳 Multiple payment options (Stripe, Razorpay, COD)  
- 🛠️ Admin panel for full platform control  

---

## 🧩 Tech Stack

### Frontend
- React.js
- Tailwind CSS / CSS Modules
- Axios

### Backend
- Node.js
- Express.js

### Database
- MongoDB (Mongoose)

### AI Integration
- OpenAI / DALL·E / Stability AI (Text-to-Image)

### Payments 💳
- Stripe
- Razorpay
- Cash on Delivery (COD)

### Other Tools
- JWT Authentication
- Cloudinary / AWS S3

---

## ✨ Features

### 👤 User Features
- 🔐 Secure Authentication (Login/Signup)
- 🎨 AI-based T-shirt design generation
- 👕 Real-time product preview
- 💾 Save & manage designs
- 🛒 Add to cart & checkout
- 📦 Order placement & tracking

### 🤖 AI Features
- Text-to-image generation
- Prompt-based custom designs
- Dynamic rendering on T-shirts

### 💳 Payment Features
- 💰 Secure payments via Stripe
- 🏦 Razorpay integration
- 📦 Cash on Delivery (COD)
- 🧾 Order confirmation system

### 🛠️ Admin Panel
- 👥 User management
- 📦 Order management
- 💳 Payment tracking
- 🖼️ Monitor AI-generated designs
- 📊 Dashboard analytics

---

## 📁 Project Structure

EMOTION_WITH_AI/
│── admin/        # Admin dashboard (React)
│── backend/      # Node.js + Express API
│── designer/     # AI logic & services
│── frontend/     # User application
│── assets/       # Screenshots & demo files
│── README.md

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository
git clone https://github.com/your-username/emotion-with-ai.git  
cd emotion-with-ai  

### 2️⃣ Backend Setup
cd backend  
npm install  
npm start  

### 3️⃣ Frontend Setup
cd frontend  
npm install  
npm run dev  

### 4️⃣ Admin Panel Setup
cd admin  
npm install  
npm run dev  

---

## 🔑 Environment Variables

Create a `.env` file inside backend/:

MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_secret_key  
AI_API_KEY=your_ai_api_key  

# Stripe  
STRIPE_SECRET_KEY=your_stripe_secret  

# Razorpay  
RAZORPAY_KEY_ID=your_key_id  
RAZORPAY_KEY_SECRET=your_key_secret  

# Cloud Storage (Optional)  
CLOUDINARY_URL=your_cloudinary_url  

---

## 📸 Screenshots


<img width="1912" height="906" alt="Screenshot 2026-04-07 224730" src="https://github.com/user-attachments/assets/91ddfb30-c136-414d-986a-5a888ff19648" />
<img width="1914" height="808" alt="Screenshot 2026-04-07 224804" src="https://github.com/user-attachments/assets/1397f97a-d5c9-4200-992b-d71359726e34" />
<img width="1911" height="791" alt="Screenshot 2026-04-07 225051" src="https://github.com/user-attachments/assets/fcd3ad01-e8f6-47d2-8bd2-8d5585fe602c" />
<img width="1919" height="826" alt="Screenshot 2026-04-07 225123" src="https://github.com/user-attachments/assets/de15fffa-455a-44ce-b1fd-592112f757a1" />
<img width="1916" height="817" alt="Screenshot 2026-04-07 225156" src="https://github.com/user-attachments/assets/381c27d6-fd23-4a74-9a2f-e2940abae37f" />
<img width="1919" height="817" alt="Screenshot 2026-04-07 225218" src="https://github.com/user-attachments/assets/e2364f69-6629-40d1-b4d4-8c5399d9fd3d" />
<img width="1917" height="821" alt="Screenshot 2026-04-07 225229" src="https://github.com/user-attachments/assets/2e325c5c-42af-44f4-9fe2-8f947dc74a81" />

---

## 🎥 Demo Video

### ▶️ Watch Full Demo
[![Watch Demo](https://img.youtube.com/vi/tSiCZv2Aw8Y/0.jpg)](https://youtu.be/tSiCZv2Aw8Y)

---

## 🔄 How It Works

1. User enters a design prompt  
2. AI generates an image  
3. Image is applied to a T-shirt mockup  
4. User customizes & adds to cart  
5. Chooses payment:
   - Stripe 💳  
   - Razorpay 🏦  
   - COD 📦  
6. Order is processed and managed via admin panel  

---

## 🧪 Future Enhancements
- 🛒 Full e-commerce integration  
- 🎨 Advanced customization tools  
- 📱 Mobile app version  
- 🧠 AI design presets  
- 📦 Real-time order tracking  

---

## 🤝 Contributing
fork -> clone -> create branch -> commit -> push -> pull request  

---

## 📄 License
This project is licensed under the MIT License.

---

## 💡 Author
Developed with ❤️ using MERN Stack + Generative AI + Payment Integration

---

## ⭐ Support
If you like this project, please ⭐ the repository!
