# Mai Alaa - Flutter Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI/UX**: Clean design with smooth animations and transitions
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Friendly**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper contrast ratios

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Static hosting ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd flutter-developer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚀 Deployment

### Static Hosting (Netlify, Vercel, etc.)
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Configure redirects for SPA routing (if needed)

### Custom Domain
Update the meta tags in `index.html` with your domain information.

## 📁 Project Structure

```
src/
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
├── index.css        # Global styles (Tailwind imports)
└── vite-env.d.ts    # TypeScript declarations

public/
└── vite.svg         # Favicon

Configuration files:
├── package.json     # Dependencies and scripts
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.ts   # Vite build configuration
└── README.md        # This file
```

## 🎨 Customization

### Colors
The portfolio uses a professional color scheme with Flutter blue as the primary color. You can customize colors in `tailwind.config.js` or by modifying the Tailwind classes in components.

### Content
Update the following sections in `src/App.tsx`:
- Personal information and contact details
- Project descriptions and tech stacks
- Skills and expertise areas
- Social media links

### Styling
- Global styles: `src/index.css`
- Component styles: Inline Tailwind classes in `src/App.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Mai Alaa**
- Email: maialaa312@gmail.com
- LinkedIn: [linkedin.com/in/mai-alaa](https://linkedin.com/in/mai-alaa)
- GitHub: [github.com/mai-alaa](https://github.com/mai-alaa)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
