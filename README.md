# 🧭 Viraj Jiwane — Portfolio

![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Render](https://img.shields.io/badge/Deployed%20on-Render-46E3B7?logo=render&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Live:** [https://virajjiwane.onrender.com](https://virajjiwane.onrender.com)  
**Source:** [https://github.com/virajjiwane/whoami](https://github.com/virajjiwane/whoami)

After weeks of design, refinement, and countless commits — this portfolio is finally live.  
Built entirely from scratch with **Angular 20**, **Tailwind CSS**, and **EmailJS**, it reflects my personal development philosophy:  
**Clarity. Precision. Discipline.**

---

## 🚀 Tech Stack

- **Framework:** Angular 20  
- **Styling:** Tailwind CSS  
- **Email Integration:** EmailJS  
- **Deployment:** Render (static hosting)  
- **Design:** Responsive • Dark • Minimalist  

---

## 🧩 Features

- Dynamic sections for projects, skills, and contact  
- Fully responsive dark UI  
- Contact form powered by EmailJS  
- SEO-optimized meta tags for clean sharing previews  
- Modular and scalable Angular architecture  

---

## 🛠️ Run Locally

```bash
git clone https://github.com/virajjiwane/whoami.git
cd whoami
npm install
ng serve
```

Then open [http://localhost:4200](http://localhost:4200) in your browser.

---

## 🧠 Customization

All personal data such as name, bio, experience, and projects are stored in:

```
src/app/services/data.ts
```

To customize it for your own portfolio:
1. Open the file above.  
2. Replace my details with your own.  
3. Update project links, social profiles, and descriptions.  
4. Save and redeploy.

You can fork this repository and make it completely yours.

---

## ❤️ Show Love

If you liked the project:

- ⭐ **Star** this repo to support it  
- 🗣️ **Share** it with your network  
- 🧠 **Fork** it and build your own version (credit appreciated)  
- 💬 **Drop feedback** under Issues  

Every star, share, or comment helps me keep shipping cool things.

---

## 📷 Preview

![Preview](src/assets/images/preview.png)

---

## 🧩 About

This portfolio blends aesthetics, performance, and modular design.  
Built over weeks of focused work — nothing rushed, nothing wasted.

---

## 📬 Contact

**Viraj Jiwane**  
📧 [Email](mailto:vjiwane27@gmail.com)  
🌐 [Portfolio](https://virajjiwane.onrender.com)  
💼 [LinkedIn](https://www.linkedin.com/in/viraj-jiwane-33aa2b126/)  
🐙 [GitHub](https://github.com/virajjiwane)

---

## ⚠️ Common Issues & Solutions

### 🧩 Problem 1: `/my-work/:id` returns 404 after deployment

**Cause:**  
Some hosting platforms use server-side routing and expect a physical file for each route.  
Since Angular is a **Single Page Application (SPA)**, it handles routes like `/my-work/:id` client-side via `index.html`.  
When the server doesn’t know how to handle that path, it returns a 404 error.

**Solutions:**
1. **Use hash-based routing** — Update your Angular router to use `#` URLs (e.g. `/my-work#/:id`).  
2. **Configure server rewrites** — Adjust your hosting configuration to redirect all non-file routes to `index.html`.  
   - This ensures the Angular app takes over routing on the client side.

---

### 🎨 Problem 2: Missing Tailwind color classes (e.g., `text-*` , `from-*` or `to-*` gradients)

**Cause:**  
TailwindCSS generates styles during build time.  
If certain class names are dynamically interpolated in templates at runtime, Tailwind cannot detect them and they won’t appear in the final CSS.

**Solution:**  
Add these classes to the **safelist file** `safelist.txt`.

---

## 🪪 License

This project is released under the **MIT License**.
