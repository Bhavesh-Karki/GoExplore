# 🌍 GoExplore - Travel & Adventure Platform

A modern, responsive travel booking platform built with React that helps users discover and book amazing travel destinations around the world.

## 📋 Project Description

GoExplore is a comprehensive travel platform that provides users with an intuitive interface to explore destinations, view travel packages, and book their dream vacations. The application features a beautiful carousel-based homepage, interactive destination browsing, travel package booking system, and an integrated travel chat for community interaction.

## ✨ Features

### 🏠 Homepage Experience

* **Interactive Carousel**: Stunning image carousel showcasing various travel destinations
* **Featured Packages**: Curated travel packages with detailed descriptions and pricing
* **Responsive Design**: Optimized for all device sizes

### 🗺️ Destination Management

* **Dynamic Destinations**: Context-based destination loading with flags and popularity indicators
* **Smart Dropdown**: Interactive navigation dropdown with popular destinations
* **Grid Layout**: Beautiful card-based layout for destination browsing

### 📦 Travel Package System

* **Package Booking**: Complete booking flow with quantity selection
* **Payment Integration**: Simulated payment processing with card details
* **Package Details**: Comprehensive package information including ratings, locations, and descriptions

### 💬 Travel Chat

* **Community Chat**: Interactive chat system for travelers
* **Location Filtering**: Filter messages by travel destinations
* **Search Functionality**: Search through chat messages
* **Real-time Updates**: Dynamic message filtering and display

### 👤 User Profile

* **Travel Statistics**: Display user's travel achievements and stats
* **Profile Management**: User profile with travel history
* **Achievement Tracking**: Trip completion and exploration metrics

### 📬 Contact System

* **Contact Form**: User-friendly contact form for inquiries
* **Multiple Contact Methods**: Email, phone, and physical address
* **Social Media Integration**: Links to social media platforms

## 🛠️ Tech Stack

### Frontend Framework

* **React 19.1.1** - Modern React with latest features
* **React Router DOM 6.30.1** - Client-side routing
* **React Bootstrap 2.10.10** - UI component library

### Build Tools & Development

* **Vite 7.1.2** - Fast build tool and development server
* **ESLint 9.33.0** - Code linting and quality assurance
* **Bootstrap 5.3.7** - CSS framework for responsive design

### Styling & UI

* **Custom CSS** - Tailored styling for components
* **Bootstrap Components** - Carousel, responsive grid system
* **CSS Modules** - Component-scoped styling

### Deployment

* **GitHub Pages** - Static site hosting
* **gh-pages** - Automated deployment to GitHub Pages

## 📄 Pages

1. **Home Page** (`/`)

   * Hero carousel with travel destination images
   * Featured travel packages section
   * Call-to-action elements

2. **Destinations Page** (`/destinations`)

   * Grid layout of all available destinations
   * Popular destination highlighting
   * Footer with company information and social links

3. **Contact Page** (`/contact`)

   * Contact information display
   * Interactive contact form
   * Multiple contact methods
   * Social media integration

4. **Profile Page** (`/profile`)

   * User profile display
   * Travel statistics and achievements
   * Personal travel information

## ⚛️ React Features Used

### Core React Concepts

* Functional Components
* Hooks: `useState`, `useEffect`, `useRef`, `useMemo`, `useContext`
* Context API: **DestinationsContext** for global state management
* Component Composition: Modular structure

### Advanced React Patterns

* Custom Hooks: **useDestinations** for data fetching
* Context Provider Pattern
* Event Handling, Conditional Rendering, Ref Management

### React Router Features

* Route Configuration
* NavLink for active states
* Programmatic Navigation

### Performance Optimizations

* `useMemo` for memoized computations
* Lazy loading and image optimization
* `useEffect` for side-effects and cleanup

## Screenshots
<h3>Home</h3>
<img width="1901" height="919" alt="image" src="https://github.com/user-attachments/assets/a4e4a993-c2a1-4f4b-a6aa-3c50701b4d07" />
<img width="1905" height="916" alt="image" src="https://github.com/user-attachments/assets/637c0532-1753-4c31-b314-c887ae899c17" 
  
<h3>Destination</h3>
<img width="1905" height="914" alt="image" src="https://github.com/user-attachments/assets/6f486c54-4da3-45a1-97fe-a9cedb31814d" />

<h3>Contact</h3>
<img width="1899" height="920" alt="image" src="https://github.com/user-attachments/assets/cc65ff14-da91-4a5d-8ee6-36fb75244b8c" />

<h3>Profile</h3>
<img width="1901" height="915" alt="image" src="https://github.com/user-attachments/assets/4950e349-a0c1-4791-aa87-633b25319164" />

## 🎨 Design Decisions

### Architecture Decisions

* Component-Based Architecture
* Context API chosen over Redux
* Functional Components and CSS Modules

### UI/UX Decisions

* Mobile-First Design
* Bootstrap Integration
* Accessibility: ARIA labels and semantic HTML

### Performance Decisions

* Vite for fast builds
* Image optimization and lazy loading
* Memoization for expensive computations

### Development Decisions

* ESLint for code quality
* GitHub Pages for deployment
* Component separation and reusable patterns
