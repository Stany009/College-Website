# St. Andrew's College Website Redesign

## Overview

A world-class, premium redesign of the St. Andrew's College website built with HTML5, CSS3, and Vanilla JavaScript. This redesign transforms a basic academic website into a modern, professional university platform with exceptional UI/UX.

## Features

### Pages (12 Total)
- **Homepage** – Cinematic hero, animated counters, featured courses, testimonials, FAQ, newsletter
- **About** – History timeline, vision/mission, principal's message, leadership team, accreditation
- **Admissions** – Step-by-step process, eligibility, documents, fee structure, scholarships, FAQ
- **Departments** – Interactive course cards with search, faculty info, lab details
- **Events** – Featured event with countdown timer, upcoming/past events, registration
- **Placements** – Statistics, recruiting companies, salary packages, alumni stories
- **Campus Life** – Clubs, sports, cultural activities, student achievements
- **Gallery** – Masonry layout, category filters, lightbox, keyboard navigation
- **Library** – Book search, new arrivals, digital library, rules, timings
- **Contact** – Premium form, Google Maps, department contacts, emergency info
- **Student Portal** – Login screen, dashboard, attendance, marks, timetable, fees, notifications, profile
- **Faculty Portal** – Faculty profiles, research publications, office hours

### UI/UX Features
- 🎨 **Premium Design System** – Apple-inspired with CSS custom properties
- 🌙 **Dark Mode** – System preference detection, smooth transitions, localStorage persistence
- 📱 **Mobile-First Responsive** – Optimized for all screen sizes (desktop, tablet, mobile)
- ✨ **Scroll Animations** – Fade up, slide, scale, stagger effects with IntersectionObserver
- 🔢 **Animated Counters** – Numbers count up when scrolled into view
- 🍔 **Mobile Drawer Navigation** – Slide-in menu with smooth transitions
- 🔍 **Real-time Search** – Department/course search with live filtering
- 📸 **Gallery Lightbox** – Fullscreen preview with keyboard nav and touch swipe
- 📝 **Form Validation** – Real-time validation with visual feedback
- ⬆️ **Back to Top Button** – Floating button with smooth scroll
- 📊 **Scroll Progress Bar** – Visual indicator of page scroll position
- ♿ **Accessibility** – Skip nav, ARIA labels, keyboard navigation, focus states, semantic HTML

### Design System
- **Colors**: Navy Blue (#0B3D91), Gold (#D4AF37), with semantic success/warning/error
- **Typography**: Poppins (headings), Inter (body)
- **Spacing**: 4px-based scale with CSS custom properties
- **Components**: Buttons, cards, badges, forms, FAQ accordions, timelines
- **Shadows**: Multi-level shadow system from xs to 2xl

## Folder Structure
```
st-andrews-redesign/
├── index.html              # Homepage
├── about.html              # About page
├── admissions.html         # Admissions page
├── departments.html        # Departments & courses
├── events.html             # Events page (NEW)
├── placements.html         # Placements page (NEW)
├── campus-life.html        # Campus life page (NEW)
├── gallery.html            # Photo gallery
├── library.html            # Library page (NEW)
├── contact.html            # Contact page
├── student-portal.html     # Student portal
├── faculty-portal.html     # Faculty portal (NEW)
├── README.md
│
├── css/
│   ├── style.css           # Design system & base styles
│   ├── responsive.css      # Responsive breakpoints
│   ├── animations.css      # Scroll animations & transitions
│   ├── darkmode.css        # Dark mode styles
│   ├── departments.css     # Department page styles
│   ├── contact.css         # Contact page styles
│   ├── gallery.css         # Gallery styles
│   └── portal.css          # Student portal styles
│
└── js/
    ├── script.js           # Main script (nav, FAQ, etc.)
    ├── scroll.js           # Scroll animations & counters
    ├── darkmode.js         # Dark mode toggle
    ├── search.js           # Department search
    ├── validation.js       # Form validation
    └── gallery.js          # Gallery filtering & lightbox
```

## Technologies
- HTML5 (Semantic, Accessible)
- CSS3 (Custom Properties, Grid, Flexbox, Animations)
- Vanilla JavaScript (ES6+, IntersectionObserver, localStorage)
- Google Fonts (Poppins, Inter)
- Unsplash Images (for demonstration)

## Git Workflow
- Feature branch: `feature/premium-redesign`
- Multiple meaningful commits
- Merged into `main`

## Installation
No build tools required. Clone and open `index.html`:
```bash
git clone <repository_url>
cd st-andrews-redesign
open index.html
```

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Accessibility
- WCAG 2.1 AA compliant
- Semantic HTML5 structure
- ARIA labels and roles
- Keyboard navigation support
- Skip navigation links
- Focus states on all interactive elements
- Sufficient color contrast ratios

## Performance
- Lazy loading for images
- GPU-accelerated animations (transform, opacity)
- Reduced motion support (`prefers-reduced-motion`)
- Optimized CSS with custom properties
- No external JS dependencies

## License
Educational project – All rights reserved.
