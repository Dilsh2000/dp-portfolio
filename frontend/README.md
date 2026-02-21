# Portfolio Website – Dilshan Priyadarshana

## Overview

This is a **dynamic personal portfolio website** built with **React**, **Vite**, and a **Node/Express** backend. It showcases Dilshan's skills, projects, and provides a contact form powered by **EmailJS**. The site features a modern, responsive design with smooth animations, glass‑morphism cards, and a downloadable CV.

## Demo

> **Live Demo:** *(If deployed, add the URL here)*

## Features

- **Hero Section** – Name, title, animated greeting, and a "Download CV" button.
- **About Me** – Personal journey with tabs for experience and education/certifications.
- **Skills** – Visual icons for core technologies.
- **Projects** – Dynamically rendered project cards (admin dashboard can add/edit projects).
- **Contact Form** – Sends messages directly to `dp2000dilshan@gmail.com` via EmailJS.
- **Admin Dashboard** – Secure login to manage portfolio content (future extension).
- **Responsive Design** – Mobile‑friendly layout with glass‑morphism UI.
- **Social Links** – GitHub and LinkedIn icons in the footer.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Front‑end | React, Vite, React‑Icons, CSS (custom design) |
| Back‑end | Node.js, Express, Mongoose (MongoDB), dotenv |
| Email Service | EmailJS |
| Database | MongoDB (local or Atlas) |
| Dev Tools | ESLint, Nodemon |

## Getting Started

### Prerequisites

- **Node.js** (v18 or later) and **npm** installed.
- **MongoDB** running locally or an Atlas connection string.
- An **EmailJS** account (service ID, template ID, public key).

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### Environment Variables

Create a `.env` file in the **backend** folder with the following keys:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/portfolio
JWT_SECRET=your_jwt_secret
```

Add your EmailJS credentials in `frontend/src/components/Contact.jsx`:

```js
emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
```

### Running the Development Servers

```bash
# Start backend (nodemon will watch for changes)
cd backend
npm run dev

# In a new terminal, start the frontend Vite server
cd ../frontend
npm run dev
```

Open `http://localhost:5173` in your browser to view the site.

### Building for Production

```bash
cd frontend
npm run build   # Generates the `dist/` folder
npm run preview # Serves the built files locally (http://localhost:4173)
```

You can deploy the `dist/` folder to any static hosting provider (Netlify, Vercel, GitHub Pages, etc.).

## Customising Content

- **Profile Photo:** Replace `frontend/public/assets/profile-photo.jpg` with your own image.
- **CV:** Place your CV as `frontend/public/cv.pdf`. The download button will automatically use the filename `Dilshan_Priyadarshana_CV.pdf`.
- **Social Links:** Update the URLs in `src/pages/Home.jsx` to point to your GitHub and LinkedIn profiles.
- **Contact Email:** Change the email address displayed in `Contact.jsx` and the EmailJS template to your preferred address.

## Contributing

Feel free to open issues or submit pull requests. Follow the existing coding style and run `npm run lint` before committing.

## License

This project is licensed under the **MIT License**.

---

*Happy coding and enjoy showcasing your work!*

## Future Improvements

- Add a **dark mode** toggle for the UI.
- Implement **unit tests** for components with Jest & React Testing Library.
- Deploy the backend to a cloud provider (e.g., Railway, Render) and configure environment variables securely.
- Add **pagination** and **search** functionality to the Projects section.
- Integrate a **blog** page powered by Markdown files.

## Acknowledgements

- **Vite** – Fast dev server and build tool.
- **React Icons** – Icon library for social links and UI elements.
- **EmailJS** – Simple email service without a backend.
- **Open-source community** – Inspiration and snippets from various tutorials.

## Contact

Feel free to reach out via [LinkedIn](https://www.linkedin.com/in/dilshan-priyadharshana/) or open an issue on the GitHub repository.
