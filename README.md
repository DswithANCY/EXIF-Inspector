# EXIF Image Finder

A full-stack web application for uploading images, extracting and displaying EXIF metadata (camera make, model, exposure settings, focal length, date taken, resolution), plotting GPS coordinates on an interactive dark-themed map, and searching, filtering, and exporting metadata.

## Features

- 📸 **EXIF Extraction**: Extracts metadata from uploaded images (JPG, PNG, TIFF) on upload.
- 🗺️ **GPS Mapping**: Displays image GPS locations on an interactive dark Leaflet map. Focuses on markers when clicking gallery items.
- 🔍 **Search & Filter**: Filter your collection by filename, camera make/model, date range, or by the presence of GPS data.
- 📊 **CSV Export**: Export details of the current filtered image collection into a spreadsheet format.
- 🚀 **FastAPI Backend**: Clean and efficient REST API with interactive Swagger documentation.
- 🎨 **Premium Glassmorphic UI**: Gorgeous dark mode styled with high-fidelity Vanilla CSS.

---

## Getting Started

You can run the project either locally (for development) or inside isolated Docker containers.

### Option 1: Running with Docker Compose (Recommended)

Make sure you have Docker and Docker Compose installed.

1. Clone or copy the project folder.
2. In the root directory, run:
   ```bash
   docker-compose up --build
   ```
3. Open your browser and navigate to:
   - **Frontend**: [http://localhost/](http://localhost/)
   - **Interactive API Docs (Swagger)**: [http://localhost:8000/docs](http://localhost:8000/docs)

---

### Option 2: Running Locally (Development)

#### Prerequisites
- Node.js (v18 or higher)
- Python (v3.9 or higher)

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```
   The API will run at [http://127.0.0.1:8000](http://127.0.0.1:8000).

#### Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite React development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local server address shown (usually [http://localhost:5173/](http://localhost:5173/)).

---

## File Structure

```
exif-image-finder/
├── docker-compose.yml
├── README.md
├── backend/
│   ├── Dockerfile
│   ├── requirements.txt
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py       # FastAPI application and endpoints
│   │   ├── database.py   # Database connection and engine
│   │   ├── models.py     # SQLAlchemy DB models
│   │   ├── schemas.py    # Pydantic validation schemas
│   │   └── exif_utils.py # EXIF & GPS extraction logic
│   └── uploads/          # Local uploaded images storage
└── frontend/
    ├── Dockerfile
    ├── nginx.conf        # Production Nginx reverse-proxy rules
    ├── package.json
    ├── tsconfig.json
    ├── vite.config.ts    # Dev proxy server configs
    ├── index.html
    └── src/
        ├── main.tsx
        ├── App.tsx       # Main orchestrator component
        ├── index.css     # Premium dark theme and glassmorphism styling
        ├── types.ts      # TypeScript interfaces
        └── components/
            ├── UploadZone.tsx    # Drag-and-drop file uploader
            ├── SearchFilters.tsx # Query parameters controllers
            ├── ImageGrid.tsx     # Display gallery of images
            ├── MetadataPanel.tsx # Side-by-side metadata table
            └── MapView.tsx       # Interactive Leaflet map
```
