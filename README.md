# Shelterhub — Full-Stack Real Estate Platform

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-14.x-black)](https://nextjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green)](https://www.mongodb.com/)
[![Netlify](https://img.shields.io/badge/Netlify-Deployed-brightgreen)](https://shelterhub.netlify.app)

> A production-grade residential property platform built with Next.js and MongoDB, demonstrating modern full-stack development practices.

## Table of Contents

- [Highlights](#highlights)
- [Architectural Overview](#architectural-overview)
- [Engineering Challenges](#engineering-challenges-and-solutions)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Live Demo](#live-demo)
- [Built With](#built-with)
- [Contributing](#contributing)
- [About the Developer](#about-the-developer)

## Highlights

- **Live Production Deployment**: Fully functional and hosted on Netlify
- **Next.js App Router**: Uses asynchronous Server Components to minimize client-side JavaScript
- **Secure User Guards**: Role-Based Access Control (RBAC) and JWT authentication via NextAuth.js
- **Optimized Queries**: Strategic MongoDB data fetching with property exclusion for data privacy
- **Mobile-First Design**: Fully responsive UI with Tailwind CSS

## Architectural Overview

Shelterhub follows a clean, maintainable, and decoupled architecture suitable for production-scale applications. The platform separates concerns between the data layer (Mongoose models), backend business logic (Next.js API Route Handlers), and the presentation view layer.

Unlike traditional client-side rendering listing sites, Shelterhub uses Next.js Server Components to fetch and filter real-time catalog data directly on the server. This approach ensures fast initial page loads and better SEO indexability.

### Core Technical Decisions

- **Server Components over Client State**: URL query parameters handle catalog filtering, shifting computational load to the server and making filtered views shareable via URLs
- **Direct Database Connections**: Detail pages connect directly to MongoDB via Mongoose, reducing page load latency by eliminating unnecessary HTTP round-trips
- **JWT Strategy for Sessions**: Stateless architecture using JSON Web Tokens instead of database-backed sessions for better scalability

## Engineering Challenges and Solutions

### Dynamic Filtering without Client-Side Flicker

**Challenge**: Implementing category filtering without complex client-side state management or flashing empty states.

**Solution**: A server-side pipeline using the page's native searchParams prop. The application fetches data dynamically with `{ cache: "no-store" }` and processes array filters before generating the final HTML.

### Cross-Resource Ownership Verification

**Challenge**: Preventing unauthorized modifications or deletions via API tools.

**Solution**: An ownership validation layer in DELETE and PATCH API routes. The system extracts the user's session via `getServerSession(req)`, looks up the resource, and performs a strict identifier match: `user._id.equals(profile.userId)`.

### Administrative Resource Moderation

**Challenge**: Restricting publishing operations and global deletions to verified administrators.

**Solution**: RBAC guard that verifies `user.role !== "ADMIN"` and returns a 403 Forbidden status for unauthorized transactions.

## Project Structure

```text
src/
├── app/
│   ├── (auth)/           # Authentication pages (Sign-in / Sign-up)
│   ├── admin/            # Protected admin management panels
│   ├── api/              # RESTful route handlers
│   │   ├── auth/         # NextAuth.js custom provider setup
│   │   └── profile/      # Listing CRUD operations
│   ├── buy-residentials/ # Residential marketplace catalog
│   ├── dashboard/        # Protected user control panel
│   ├── favicon.ico
│   └── globals.css       # Global Tailwind configurations
├── components/
│   ├── layout/           # Shared layout components
│   ├── module/           # Feature-specific blocks
│   └── template/         # Page-level structural templates
├── models/               # Mongoose schemas
├── providers/            # Client-side context providers
└── utils/                # Core library (database connector, helpers)
```

## Quick Answers

**Does this solve my problem?**  
If you need a scalable, secure platform for managing full CRUD cycles and live search filters over residential listings, yes.

**Can I use this code?**  
Yes. The project is open-source under the MIT License, with a modular design following SOLID principles.

## Live Demo

Experience the application in a real-world environment:  
[Launch Shelterhub on Netlify](https://shelterhub.netlify.app)

## Installation

### Minimum Requirements

- Node.js: v18.x or higher
- MongoDB: Local instance or MongoDB Atlas cloud account

### Setup Instructions

```bash
# Clone the repository
git clone https://github.com/yeganejhi/nextjs-real-estate-platform.git

# Navigate into the project directory
cd nextjs-real-estate-platform

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Environment Variables

Create a `.env.local` file in your root directory with the following:

```env
MONGO_URI=your_mongodb_atlas_connection_string
NEXTAUTH_SECRET=your_custom_random_jwt_secret_string
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Built With

- **Next.js 14** - React Framework with App Router
- **MongoDB** - NoSQL Database
- **Mongoose** - ODM for MongoDB
- **NextAuth.js** - Authentication
- **Tailwind CSS** - Styling
- **Netlify** - Hosting

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## About the Developer

This project was built by Yegane as part of an academic software engineering portfolio. It demonstrates architectural patterns, secure endpoint authorization, database performance optimization, and clean code practices.

For collaborative opportunities or code reviews, please open a GitHub issue or start a discussion.
