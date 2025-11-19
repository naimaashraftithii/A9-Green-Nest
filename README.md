
<p align="center">
  <img src="https://github.com/naimaashraftithii/A9-Green-Nest/blob/main/GreenNest.png" />
</p>
# 🌱 GreenNest – Indoor Plant Care & Store

**GreenNest** is a single-page React application for plant lovers to explore care tips, browse indoor plants, and book expert consultations — blending a calm, nature-inspired UI with secure authentication and protected routes.

GreenNest helps users discover indoor plants, learn simple care routines, and connect with experts — making plant parenting easier and homes greener, all within a modern, secure, and pleasant web experience.

---

## 🔗 Live & Repository

- **Live URL:** https://greeenet.netlify.app  
- **GitHub Repo:** https://github.com/naimaashraftithii/A9-Green-Nest.git  

---

## 🧾 Table of Contents

- [About](#-about)
- [Core Features](#-core-features)
- [Tech Stack](#-tech-stack)
- [Main Pages & Flow](#-main-pages--flow)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#-prerequisites)
  - [Installation](#-installation)
  - [Environment Variables](#-environment-variables)
  - [Run in Development](#-run-in-development)
  - [Build for Production](#-build-for-production)
- [Deployment](#-deployment)
  - [Netlify](#netlify)
  - [Other Hosts (Vercel/GitHub Pages)](#other-hosts-vercelgithub-pages)
- [React & Firebase Q&A](#-react--firebase-qa)
- [Contact](#-contact)

---

## 📌 About

GreenNest is a **SPA (Single Page Application)** built with **React + Vite + TailwindCSS**.

It simulates a fully functional indoor plant store + care guide:

- Users can browse plants loaded from local JSON.
- See curated top-rated plants and “Plant of the Week” offers.
- Learn care tips, read blog-style content, and discover eco décor ideas.
- Register/login via Firebase (Email/Password + Google).
- Access **protected routes** like plant details and user profile only when authenticated.
- Book a consultation with feedback via toasts.

The main focus is:

- Component-driven UI
- Routing & protected routes
- Firebase authentication
- User-friendly UX with loaders, error states, and toasts

---

## 🌟 Core Features

### 🎨 UI & Experience

- **Responsive SPA** with:
  - Persistent **Navbar** (brand, links, auth controls)
  - Elegant **Footer** (newsletter, social links, quick links)
- **Home page sections:**
  - Hero Parallax slider (`HeroParallaxCarousel`) using Swiper with parallax + autoplay
  - “Spring History” section with brand story and signature
  - Top Rated Indoor Plants grid
  - Best Offers / Plant of the Week (`BestOffers`)
  - Eco Decor Ideas (image grids + tips)
  - Plant Care Tips cards (`PlantCareTips`)
  - Blog Posts carousel (`BlogPostsCarousel`)
  - Testimonials (`Testimonials`)
  - Services section (`ServicesSection`)
  - Experts grid (`ExpertsGrid`)
- **Smooth animations & gradients** throughout (buttons, hover states, cards)

### 🪴 Plants & Content

- Plant catalogue loaded from **local JSON**: `plantsdata.json`
- **Plants Page**:
  - Shows all plants in a responsive grid using `PlantCard`
  - Each plant card shows image, name, price, rating
  - “View Details” button routes to `/plants/:id`
- **Plant Details (Protected)**:
  - Route: `/plants/:id`
  - Shows full details: description, category, stock, price, rating, care level, provider, etc.
  - Includes a **“Book Consultation”** form with toast success on submit

### 🔐 Authentication & Profile

- Built with **Firebase Authentication**
- **Login features:**
  - Email/password login
  - Google Sign-In
  - Password show/hide toggle
  - Forgot Password (triggers reset email)
- **Signup features:**
  - Validation rule: password must include:
    - ≥ 1 uppercase  
    - ≥ 1 lowercase  
    - Length ≥ 6
  - Optional photo URL (uses default avatar if missing)
- **Profile (Protected Route)**:
  - Route: `/profile`
  - Displays avatar, name, email
  - Update `displayName` and `photoURL` via Firebase `updateProfile()`
  - Toast on successful update

### 🛡 Routing & Error Handling

- **React Router** with:
  - `MainLayout` (Navbar + Outlet + Footer)
  - `ProtectedRoute` for private pages (like profile & plant details)
  - `ErrorPage` using `useRouteError()` for route-level errors
- **RenderErrorBoundary**:
  - Catches runtime errors in the main content tree
  - Renders `ErrorState` with retry and “Go Home” options
- **ErrorState component**:
  - Shows an illustration and friendly message
  - Optional Retry button (reload) + “Go Home” button

### 💬 UX Feedback & Helpers

- `Loader` component with spinning logo & label
- `react-toastify` for:
  - Login/signup success/error
  - Profile updates
  - Consultation booking
  - Newsletter subscription
- Form validation for:
  - Email format in newsletter subscription
  - Password strength on signup
- Graceful handling of data loading:
  - Shows loader while fetching `plantsdata.json`
  - Error blocks via `ErrorState` if fetch fails

---

## 💻 Tech Stack

### Core

- **React**
- **Vite**
- **React DOM**

### Routing & Context

- **react-router-dom**
  - `RouterProvider`, `createBrowserRouter`, `Outlet`, `useRouteError`, `useLocation`, `useParams`, `Navigate`, etc.
- **React Context**
  - `AuthContext` with `AuthProvider` for auth state (user, loading, login, signup, logout, resetPassword, updateUser)

### Styling & UI

- **Tailwind CSS** – utility-first CSS
- **DaisyUI** – Tailwind component library/theme
- **react-icons** – icons for UI sections (socials, services, etc.)

### Interactions & Visuals

- **Swiper** – carousels & sliders:
  - Parallax hero
  - Blog posts slider
- **react-toastify** – toast notifications

### Auth & Backend-as-a-Service

- **Firebase**:
  - `firebase/app`
  - `firebase/auth`

---

## 🧭 Main Pages & Flow

- `/` **Home**
  - Hero slider, Spring History, Top Rated plants, Best Offers, Eco Decor, tips, blogs, testimonials, services, experts.

- `/plants` **Plants Catalogue**
  - Reads from `/plantsdata.json`
  - Grid of `PlantCard` components.

- `/plants/:id` **Plant Details** (Protected)
  - Uses `useParams` to read `id`
  - Finds matching plant from data
  - “Book Consultation” form → toast on submit.

- `/profile` **Profile** (Protected)
  - Shows current user info from `AuthContext`
  - Allows updating `displayName` and `photoURL`.

- `/login` **Login Page**
  - Email/password login
  - Forgot password (reset email)
  - Google login
  - Redirects back to `state` (previous route) if provided.

- `/signup` **Signup Page**
  - Email/password registration
  - Password validation
  - Update profile with name & photo
  - Google login option.

- `*` / route errors
  - `ErrorPage` + `ErrorState` for unknown routes or loader errors.

---

## 📂 Project Structure

> This is an example structure based on the provided code (actual folders may vary slightly).

```bash
src/
  assets/
    logo.png
    logo1.png
    error-404.png
    # other images
  components/
    Navbar.jsx
    Footer.jsx
    Loader.jsx
    ErrorState.jsx
    RenderErrorBoundary.jsx
    PlantCard.jsx
    BlogPostsCarousel.jsx
    Testimonials.jsx
    PlantCareTips.jsx
    ExpertsGrid.jsx
    HeroParallaxCarousel.jsx
    ServicesSection.jsx
    BestOffers.jsx
    SpringHistory.jsx
    # etc.
  context/
    AuthContext.js
    AuthProvider.jsx
  firebase/
    firebase.config.js
  layout/
    MainLayout.jsx
  pages/
    Home.jsx
    Plants.jsx
    PlantDetails.jsx
    Login.jsx
    Signup.jsx
    Profile.jsx
    ErrorPage.jsx
  routes/
    router.jsx
  styles/
    # (integrated in index.css if used)
  index.css
  main.jsx
.env        # (not committed)
````

Static data like `plantsdata.json` is typically placed in the **public** folder:

```bash
public/
  plantsdata.json
  # other static assets
```

---

## 🏁 Getting Started

### ✅ Prerequisites

You’ll need:

* **Node.js** (LTS recommended)
* **npm** or **yarn**

Check versions:

```bash
node -v
npm -v
```

### 📥 Installation

1️⃣ **Clone the repository**

```bash
git clone https://github.com/naimaashraftithii/A9-Green-Nest.git
cd A9-Green-Nest
```

2️⃣ **Install dependencies**

```bash
npm install
# or
yarn
```

### 🔐 Environment Variables

The app uses Firebase via Vite env variables (all must start with `VITE_`):

Create a file named **`.env.local`** (or `.env`) in the project root:

```bash
VITE_FIREBASE_apiKey=your_api_key_here
VITE_FIREBASE_authDomain=your_project.firebaseapp.com
VITE_FIREBASE_projectId=your_project_id
VITE_FIREBASE_storageBucket=your_project.appspot.com
VITE_FIREBASE_messagingSenderId=your_sender_id
VITE_FIREBASE_appId=your_app_id
```

These are read in `firebase.config.js`:

```js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_authDomain,
  projectId: import.meta.env.VITE_FIREBASE_projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_appId,
};
```

> Make sure **not** to commit your `.env` file (the `.gitignore` already ignores it).

### ▶ Run in Development

```bash
npm run dev
# or
yarn dev
```

By default Vite runs on:

```text
http://localhost:5173
```

### 📦 Build for Production

```bash
npm run build
# or
yarn build
```

To locally preview the production build:

```bash
npm run preview
# or
yarn preview
```

---

## 🚀 Deployment

### Netlify

This project is already deployed on **Netlify**:

* Live: [https://greeenet.netlify.app](https://greeenet.netlify.app)

To deploy yourself:

1. **Build the project**

   ```bash
   npm run build
   ```

2. Go to Netlify and choose:

   * **“Add new site” → “Import an existing project”** (from Git repo), or
   * **“Deploy manually”** and drag & drop the `dist` folder.

3. If using Git integration, make sure Netlify’s build settings are:

   * **Build command:** `npm run build`
   * **Publish directory:** `dist`
   * **Environment variables:** add the same `VITE_FIREBASE_*` keys used locally.

4. Netlify will generate a URL like:

   ```text
   https://your-project-name.netlify.app
   ```

---

### Other Hosts (Vercel/GitHub Pages)

**Vercel:**

* Import the GitHub repository to Vercel.
* Vercel auto-detects the **Vite + React** app.
* Set:

  * **Framework Preset:** Vite
  * **Build Command:** `npm run build`
  * **Output Directory:** `dist`
* Add the `VITE_FIREBASE_*` variables in **Project Settings → Environment Variables**.

**GitHub Pages (via static hosting):**

* Build locally: `npm run build`.
* Deploy `dist` content to GitHub Pages (e.g. via `gh-pages` package or a separate `docs` folder setup).
* Ensure you handle SPA routing on GH Pages (fallback to `index.html`).

---

## 🧠 React & Firebase Q&A

### 1. How do protected routes work in GreenNest?

`ProtectedRoute` wraps any route that should only be accessed when the user is authenticated:

```jsx
const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <div>Loading…</div>;
  if (!user) return <Navigate to="/login" replace state={location.pathname} />;

  return children;
};
```

* If `loading` is true → show a temporary loader.
* If no user → redirect to `/login` and remember where the user was trying to go (`state`).

---

### 2. Why store Firebase config in environment variables?

* Keeps **secrets out of the source code**.
* Allows different configs for:

  * Local dev
  * Staging
  * Production
* Vite exposes them at build time via `import.meta.env`.

---

### 3. Why use `Suspense` + `RenderErrorBoundary`?

In `main.jsx`:

```jsx
<Suspense fallback={<Loader />}>
  <RouterProvider router={router} />
</Suspense>
```

* `Suspense` handles lazy-loaded components (for code-splitting) and shows `<Loader />` while they load.
* `RenderErrorBoundary` catches runtime errors and shows a friendly `ErrorState` instead of a blank screen.

---

### 4. Why load plants from `plantsdata.json` instead of an API?

* Simpler setup for an assignment/project.
* No backend required to explore:

  * State management
  * List rendering
  * Detail views
* Later, you can easily replace `fetch("/plantsdata.json")` with a real API endpoint.

---

## 📬 Contact

* **Author:** Naima Ashraf Tithi
* **Project:** GreenNest – Indoor Plant Care & Store
* **GitHub:** [https://github.com/naimaashraftithii](https://github.com/naimaashraftithii)




