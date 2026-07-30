# St. Andrew's College Website Redesign

## Project Description
A modern, responsive, secure, and user-friendly redesign of the St. Andrew's College website built using HTML, CSS, JavaScript, and Git.

## Features
- **Responsive Design**: Mobile, Tablet, and Desktop layouts.
- **Dark Mode**: Toggleable dark mode that persists using `localStorage`.
- **Search Filtering**: Live JavaScript search for departments and courses.
- **Form Validation**: Real-time validation for the contact form with a success popup.
- **Gallery Lightbox**: Clickable image gallery with fullscreen preview and keyboard navigation.
- **Student Portal**: Dashboard interface with attendance, marks, assignments, and mock login.
- **Animations**: Fade up, slide, float, and hover scale effects, with a scroll progress bar.

## Folder Structure
```
st-andrews-redesign/
│
├── index.html
├── about.html
├── admissions.html
├── departments.html
├── contact.html
├── student-portal.html
├── gallery.html
│
├── css/
│   ├── style.css
│   ├── responsive.css
│   ├── animations.css
│   └── darkmode.css
│
├── js/
│   ├── script.js
│   ├── darkmode.js
│   ├── search.js
│   ├── validation.js
│   ├── gallery.js
│   └── scroll.js
```

## Git Workflow
The project used a feature branching model:
1. Built the main pages and base styles on `main`.
2. Created a new branch `feature/student-portal`.
3. Implemented the portal dashboard.
4. Merged back to `main`.
5. Finalized with animations and dark mode.

## Installation
No build tools are required. Just clone the repository and open `index.html` in your browser.
```bash
git clone <repository_url>
cd st-andrews-redesign
# Open index.html
```

## Technologies Used
- HTML5
- CSS3 (Variables, Grid, Flexbox, Media Queries)
- Vanilla JavaScript
- Git / GitHub

## Live Demo
[Insert GitHub Pages Link Here]

## Future Enhancements
- Integration with a backend database for dynamic content.
- Complete backend implementation of the student portal.
- Authentication API for secure logins.

## Disclaimer
This is a demonstration redesign for an educational project. All details are simulated.
