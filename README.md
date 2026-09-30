# SkinMatch - Skincare Product Recommendation App

A full-stack web application that recommends personalized skincare products based on user age, skin type, and skin concerns.

## Project Overview

SkinMatch is a smart skincare recommendation platform that helps users find the perfect skincare products tailored to their specific needs. The application uses a quiz-based system to gather information about users' skin profile and then matches them with the most suitable products from a curated database.

## Features

### User-Facing Features
- **Interactive Quiz**: Multi-step quiz to gather user information:
  - Name
  - Skin type (oily, dry, combination, sensitive, etc.)
  - Skin sensitivity level
  - Skin concerns (acne, aging, dark spots, etc.)
  - Age range
  
- **Smart Product Matching**: Algorithm that matches users with products based on:
  - Age compatibility
  - Skin type suitability
  - Skin concern relevance
  - Product ratings and matching score

- **Product Categories**: Recommendations across multiple skincare categories:
  - Cleansers
  - Moisturizers
  - Toners
  - Serums
  - Sunscreens

- **Product Details**: View detailed information about matched products on dedicated product pages

- **Additional Pages**:
  - Home page with introduction
  - About page with company/app information
  - Contact page for user inquiries

## Project Structure

```
skinPython/
├── backend/                          # Python Flask API
│   ├── application.py               # Main Flask application & routes
│   ├── requirements.txt              # Python dependencies
│   ├── README.md                     # Backend-specific documentation
│   ├── controllers/
│   │   ├── getProducts.py           # Product matching logic
│   │   └── data/                    # Product databases
│   │       ├── cleanserList.json
│   │       ├── moisturizerList.json
│   │       ├── tonerList.json
│   │       ├── serumList.json
│   │       └── sunscreenList.json
│   └── __pycache__/                 # Python cache files
│
└── frontend/                         # React + Vite frontend
    ├── package.json                  # JavaScript dependencies
    ├── vite.config.js               # Vite configuration
    ├── eslint.config.js             # ESLint configuration
    ├── index.html                    # Main HTML entry point
    ├── src/
    │   ├── App.jsx                  # Main App component & routing
    │   ├── App.css                  # Global styles
    │   ├── main.jsx                 # React entry point
    │   ├── index.css                # Global CSS
    │   ├── components/              # Reusable components
    │   │   ├── header.jsx
    │   │   ├── FooterComp.jsx
    │   │   ├── homeBodyComp.jsx
    │   │   ├── individualTileComp.jsx
    │   │   ├── matchLabelComp.jsx
    │   │   ├── dashboardHome.jsx
    │   │   ├── AboutPageComp.jsx
    │   │   └── ContactPageComp.jsx
    │   ├── pages/                   # Page components
    │   │   ├── HomePage.jsx
    │   │   ├── AboutPage.jsx
    │   │   ├── ContactPage.jsx
    │   │   ├── Dashboard.jsx
    │   │   ├── specificProductPage.jsx
    │   │   └── quiz/                # Quiz workflow pages
    │   │       ├── QuizPageName.jsx
    │   │       ├── QuizPageSkin.jsx
    │   │       ├── QuizPageSens.jsx
    │   │       ├── QuizPageConcern.jsx
    │   │       └── QuizPageAge.jsx
    │   ├── styles/                  # Component-specific styles
    │   │   ├── header.css
    │   │   ├── footer.css
    │   │   ├── homePageComp.css
    │   │   ├── dashComp.css
    │   │   ├── quizTile.css
    │   │   ├── aboutcomp.css
    │   │   ├── contact.css
    │   │   └── loadanimation.css
    │   └── assets/                  # Static assets (images, etc.)
    └── public/                      # Public static files

```

## Technology Stack

### Backend
- **Framework**: Flask 3.0.3
- **Language**: Python
- **CORS Support**: Flask-CORS 4.0.1
- **Server**: Gunicorn 23.0.0
- **Dependencies**:
  - Flask utilities (itsdangerous, Jinja2, Werkzeug)
  - Color output (colorama)
  - Packaging utilities

### Frontend
- **Framework**: React 18.3.1
- **Build Tool**: Vite 5.4.1
- **Routing**: React Router DOM 6.26.1
- **HTTP Client**: Axios 1.7.7
- **Icons**: React Icons 5.3.0
- **Linting**: ESLint 9.9.0

## Getting Started

### Prerequisites
- Python 3.7+
- Node.js 14+
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment (recommended):
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Run the Flask application:
```bash
python application.py
```

The backend API will be available at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or the port Vite specifies)

4. To build for production:
```bash
npm run build
```

## API Endpoints

### GET `/home`
Retrieves personalized product recommendations based on user profile.

**Query Parameters:**
- `age` (required): User's age as integer
- `skinConcern1`, `skinConcern2`, `skinConcern3`: User's skin concerns
- `skinType` (required): User's skin type

**Response:**
```json
{
  "success": true,
  "data": {
    "cleansers": [...],
    "moisturizers": [...],
    "toners": [...],
    "serums": [...],
    "sunscreens": [...]
  }
}
```

### POST `/contact`
Submits a contact form inquiry. Email is sent to the application's contact email.

**Request Body:**
```json
{
  "firstname": string,
  "lastname": string,
  "email": string,
  "phone": string,
  "msg": string
}
```

**Response:**
```json
{
  "success": true,
  "msg": "Form Submitted Sent"
}
```

## Application Flow

1. **Home Page**: User lands on the homepage
2. **Quiz**: User goes through a 5-step quiz:
   - Enter name
   - Select skin type
   - Select sensitivity level
   - Select skin concerns
   - Enter age
3. **Dashboard**: Quiz results trigger personalized product recommendations
4. **Product Details**: User can click on products to view detailed information
5. **Contact**: Users can reach out with questions via the contact page

## Product Matching Algorithm

The matching algorithm in `getProducts.py` scores products based on:
- **Age Compatibility**: Full point if product matches age range
- **Skin Concern Match**: 0.5 points divided among concerns (e.g., 0.25 per concern if 2 concerns selected)
- **Skin Type Match**: Full point if product matches skin type

Products are then sorted by match score in descending order to show the best matches first.



