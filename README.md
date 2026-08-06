# 🐾 Petl💛ve - Full-Stack Web Application

A modern, full-featured web application that helps users find, favorite, and manage pet adoption listings. Users can browse adorable pets, filter by category or species, seamlessly manage their favorites, and add their own pets to the system with image uploads — all within a highly responsive, type-safe interface.

---

## 📸 Screenshots

<img width="1912" height="945" alt="Petlove Application Screenshot" src="https://github.com/user-attachments/assets/2cc779d6-aebf-4738-8d9c-112f1652eac9" />

---

## ✨ Features

- 🔐 **Secure Authentication** — JWT-based auth with token refresh and zero auth flash
- 🐾 **Pet Listings** — Browse detailed pet adoption notices and profiles
- 🔍 **Advanced Filtering** — Filter pets dynamically by category, species, sex, and location
- ❤️ **Favorites Management** — Add and remove pets from favorites seamlessly without re-renders
- 👀 **Viewed Pets Tracking** — Automatic synchronization of recently viewed pet profiles
- ➕ **Add Pet System** — Create new pet profiles with real-time image uploads
- 🔔 **Toast Notifications** — Elegant real-time user feedback during interactions
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices
- ⏳ **Loading States** — Smooth skeleton loaders and spinners during data fetches
- 🚫 **404 Page** — Custom Not Found page for undefined routes

---

## 🛠️ Tech Stack

| Category            | Technology                     |
| ------------------- | ------------------------------ |
| **Framework**       | React 18 + TypeScript          |
| **Build Tool**      | Vite                           |
| **State / Store**   | Redux Toolkit (AsyncThunk)     |
| **Routing**         | React Router v6                |
| **Forms & Val.**    | React Hook Form + Formik + Yup |
| **HTTP / Cloud**    | Axios + Cloudinary REST API    |
| **Styling**         | CSS Modules                    |
| **Linting**         | ESLint                         |
| **Package Manager** | npm                            |

---

## 📁 Project Structure

```text
petlove/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── AddPet/
│   │   ├── AuthNav/
│   │   ├── Friends/
│   │   ├── Header/
│   │   ├── Home/
│   │   ├── Loader/
│   │   ├── Login/
│   │   ├── MainScreen/
│   │   ├── Message/
│   │   ├── MobileMenu/
│   │   ├── Modal/
│   │   ├── ModalGeneral/
│   │   ├── News/
│   │   ├── NotFound/
│   │   ├── Notices/
│   │   ├── Pagination/
│   │   ├── Profile/
│   │   ├── Registration/
│   │   ├── SharedLayout/
│   │   ├── UI/
│   │   ├── UserNav/
│   │   └── UserProfileButton/
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useFriends.ts
│   │   ├── useNews.ts
│   │   └── useNotices.ts
│   ├── pages/
│   │   ├── AddPetPage/
│   │   ├── FriendsPage/
│   │   ├── HomePage/
│   │   ├── LoginPage/
│   │   ├── NewsPage/
│   │   ├── NotFoundPage/
│   │   ├── NoticesPage/
│   │   ├── ProfilePage/
│   │   └── RegistrationPage/
│   ├── redux/
│   │   ├── auth/
│   │   ├── friends/
│   │   ├── news/
│   │   ├── notices/
│   │   ├── hooks.ts
│   │   └── store.ts
│   ├── router/
│   │   └── AppRouter.tsx
│   ├── routes/
│   │   ├── PrivateRoute.tsx
│   │   └── RestrictedRoute.tsx
│   ├── services/
│   │   └── api.ts
│   ├── shared/
│   │   └── Icon.tsx
│   ├── styles/
│   │   ├── shared/
│   │   │   ├── AuthImage.module.css
│   │   │   └── Form.module.css
│   │   ├── reset.css
│   │   └── variables.css
│   ├── types/
│   │   ├── auth.types.ts
│   │   ├── common.types.ts
│   │   ├── friends.types.ts
│   │   ├── index.ts
│   │   ├── news.types.ts
│   │   ├── notice.types.ts
│   │   ├── pet.types.ts
│   │   └── user.types.ts
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── helpers.ts
│   │   └── validationSchemas.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) `>= 18.x`
- [npm](https://www.npmjs.com/) `>= 9.x`
- A [Cloudinary](https://cloudinary.com/) account for image uploads

---

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/petlove.git
cd petlove
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Configure Environment Variables

Copy the example environment file and fill in your Cloudinary credentials:

```bash
cp .env.example .env
```

Open .env and replace the placeholder values with your actual Cloudinary Preset Key and API URL:

```bash
REACT_APP_PRESET_KEY=<your_upload_preset>
REACT_APP_CLOUDINARY_URL=https://api.cloudinary.com/v1_1/<your_cloud_name>/image/upload
```

<blockquote>⚠️ Warning: Never commit your .env file to version control. It is already listed in .gitignore.</blockquote>

---

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at http://localhost:5173

---

### <img width="20" height="20" alt="Cloudinary Icon" src="https://github.com/user-attachments/assets/c0c9c9bd-92ab-4dbf-976f-88a115df5748" /> Cloudinary Setup

1. Go to [Cloudinary](https://cloudinary.com/) and create a free account.
2. Navigate to **Settings (Gear Icon) → Upload** in your dashboard.
3. Scroll down to the **Upload presets** section and click **Add upload preset**.
4. Set the **Signing Mode** to `Unsigned` and hit **Save**.
5. Copy the generated **Preset Name**. This will be your `VITE_PRESET_KEY`.
6. Go back to your main Dashboard and find your **Cloud Name**.
7. Construct your upload URL using your cloud name: `https://api.cloudinary.com/v1_1/<your_cloud_name>/image/upload` and set it as your `VITE_CLOUDINARY_URL`.

---

## 📜 Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

---

## 🌍 Live Demo

Check out the live application here:

```text
https://your-vercel-link.vercel.app
```

---

## 👨‍💻 Author

**Kerem Yıldırım**

- Full-Stack Developer
- [GitHub Profile](https://github.com/keremyldrm61)
- [LinkedIn Profile](https://www.linkedin.com/in/kerem-yildirim-ky)
