# ScholarAI - Frontend

A modern research management platform built for scholars and researchers to streamline their academic workflow. ScholarAI provides intelligent tools for managing research papers, collaborative projects, LaTeX editing, and AI-powered research assistance.

## Features

### 📚 Research Library
- Organize and manage research papers
- PDF upload and preview with annotations
- Extract metadata from papers using GROBID
- Smart paper recommendations and insights
- Reading list management

### 🤖 ScholarBot
- AI-powered research assistant
- Context-aware chat interface
- Paper summarization and analysis
- Literature review assistance

### 📝 LaTeX Editor
- Real-time LaTeX compilation
- Syntax highlighting with multiple themes
- AI-powered writing assistance
- Citation management
- PDF preview with live updates

### 👥 Project Collaboration
- Shared research projects
- Team collaboration tools
- Project analytics and insights
- Gap analysis for research planning

### 🔍 Advanced Search
- Semantic search across papers
- Web search integration
- Citation network exploration
- Author profile management

### 📊 Analytics Dashboard
- Research productivity metrics
- Citation analytics
- Project progress tracking
- Customizable KPI widgets

### 🎨 Customization
- Dark/Light theme support
- Custom color schemes
- Configurable UI preferences
- Glow effects and animations

## Tech Stack

- **Framework**: Next.js 15.2.4
- **UI Library**: React 18.2
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **Code Editor**: CodeMirror 6
- **PDF Processing**: PDF.js, React PDF Viewer
- **Forms**: React Hook Form + Zod validation
- **Charts**: Recharts
- **Testing**: Jest + Playwright
- **Type Safety**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ScholarAI-Echologyx-Hackathon-2025/frontend.git
cd frontend
```

2. Install dependencies:
```bash
pnpm install
```

3. Create environment file:
```bash
cp env.example .env.local
```

4. Configure your environment variables in `.env.local`

### Development

Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
pnpm build
```

Start production server:
```bash
pnpm start
```

### Testing

Run unit tests:
```bash
pnpm test
```

Run E2E tests:
```bash
pnpm test:e2e
```

Run all tests:
```bash
pnpm test:all
```

## Project Structure

```
frontend/
├── app/                      # Next.js app router
│   ├── (auth)/              # Authentication pages
│   ├── api/                 # API routes
│   ├── interface/           # Main application pages
│   └── scholarbot/          # ScholarBot interface
├── components/              # React components
│   ├── ui/                  # Base UI components
│   ├── chat/                # Chat interface components
│   ├── library/             # Library management components
│   ├── latex/               # LaTeX editor components
│   ├── landing/             # Landing page components
│   └── ...                  # Feature-specific components
├── lib/                     # Utility libraries
│   ├── api/                 # API service layer
│   ├── utils/               # Helper functions
│   ├── hooks/               # Custom React hooks
│   └── latex/               # LaTeX processing
├── types/                   # TypeScript type definitions
├── constants/               # Application constants
├── contexts/                # React context providers
├── hooks/                   # Global custom hooks
├── public/                  # Static assets
├── tests/                   # Test files
└── docs/                    # Documentation

```

## Docker Support

### Development
```bash
docker-compose up
```

### Production
```bash
docker-compose -f docker-compose.prod.yml up
```

## Key Features Implementation

### PDF Upload & Processing
See [docs/pdf-upload.md](docs/pdf-upload.md) for detailed implementation.

### Reading List API
See [docs/reading-list-api.md](docs/reading-list-api.md) for API documentation.

### B2 Storage Integration
Cloud storage for research papers and project files with secure upload/download.

### GROBID Integration
Automatic metadata extraction from PDF papers including:
- Title, authors, abstract
- Citations and references
- Publication information

## API Services

The application includes a comprehensive API service layer:

- **Chat Service**: AI-powered conversations
- **Paper Extraction**: Metadata and content extraction
- **LaTeX Service**: Document compilation and processing
- **Project Service**: Project management and collaboration
- **Web Search**: External research sources integration
- **Library Service**: Paper organization and management

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Environment Variables

Key environment variables needed:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_B2_BUCKET=your_b2_bucket
NEXT_PUBLIC_GROBID_URL=your_grobid_url
```

See `env.example` for a complete list.

## License

This project is part of the Echologyx Hackathon 2025.

## Support

For issues and questions, please open an issue on GitHub.

## Acknowledgments

- Built for Echologyx Hackathon 2025
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
