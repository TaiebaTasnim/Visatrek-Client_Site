# Visatrek-A Visa Navigator Website


![VisaTrek Screenshot](https://i.ibb.co.com/39PP2YZj/Screenshot-306.png)
A modern web application designed to streamline visa tracking, document management, and real-time updates for travelers.It offers search for visas, track applications,apply for visa and access detailed visa information.

## 🚀 Features

- **User Authentication:** Secure login and signup via Firebase.
- **Visa Tracking:** Stay updated with real-time visa application progress.
- **Interactive UI Animations:** Smooth transitions using AOS and Animate.css.
- **Efficient Sorting & Filtering:** Powered by Match-sorter and Sort-by.
- **Responsive UI:** Styled with Tailwind CSS and DaisyUI.
- **Customizable Alerts:** Enhanced user notifications with SweetAlert2.
- **Smooth Typing Effects:** Realistic text animation using React Simple Typewriter.
- **Swiper Integration:** Interactive carousels and sliders.

## 🛠️ Technologies Used

- **Frontend:** React, React Router, Tailwind CSS, DaisyUI  
- **State Management:** LocalForage  
- **Backend & Authentication:** Firebase  
- **Animations & Effects:** AOS, Animate.css, Swiper, React Simple Typewriter  
- **UI Enhancements:** React Icons, SweetAlert2, React Tooltip  
- **Development Tools:** Vite, ESLint, PostCSS  

## 📦 Dependencies

### Core Dependencies
```json
{
  "animate.css": "^4.1.1",
  "aos": "^2.3.4",
  "firebase": "^11.0.2",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-icons": "^5.4.0",
  "react-router-dom": "^7.0.2",
  "react-simple-typewriter": "^5.0.1",
  "react-tooltip": "^5.28.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.14.5",
  "swiper": "^11.1.15"
}
```

### Development Dependencies
```json
{
  "@eslint/js": "^9.15.0",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "@vitejs/plugin-react": "^4.3.4",
  "autoprefixer": "^10.4.20",
  "daisyui": "^4.12.14",
  "eslint": "^9.15.0",
  "eslint-plugin-react": "^7.37.2",
  "eslint-plugin-react-hooks": "^5.0.0",
  "eslint-plugin-react-refresh": "^0.4.14",
  "globals": "^15.12.0",
  "postcss": "^8.4.49",
  "tailwindcss": "^3.4.15",
  "vite": "^6.0.1"
}
```

## 📌 Environment Variables

Create a `.env` file in the root directory and add:

```plaintext
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_AUTH_DOMAIN
VITE_projectId=YOUR_PROJECT_ID
VITE_storageBucket=YOUR_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_SENDER_ID
VITE_appId=YOUR_APP_ID
```

> **⚠️ Note:** Never expose sensitive keys in public repositories.

## 🏗️ Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/TaiebaTasnim/visatrek.git
   cd visatrek
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file as mentioned above.

4. **Start the development server:**
   ```sh
   npm run dev
   ```

5. **Build for production (optional):**
   ```sh
   npm run build
   ```

## 🌍 Live Demo

Check out the live version: [VisaTrek Live](https://visatrek-fcf97.web.app) <!-- Replace with actual URL -->




