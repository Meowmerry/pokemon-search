# Pokémon Search App

A modern web application built with Next.js that allows users to search and explore Pokémon information using the PokéAPI. Users can view detailed information about each Pokémon, including their physical characteristics, versions, and manage their favorite Pokémon list.

![Pokemon App Screenshot](../pokemon-search/public/images/page.png)

## Features

- 🔍 Real-time Pokémon search functionality
- 📱 Responsive design that works on desktop and mobile devices
- ⭐ Favorite Pokémon management system
- 📊 Detailed Pokémon information display including:
  - Weight and height statistics
  - Game versions appearance
  - Official artwork
- 🎨 Modern UI with Tailwind CSS styling

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework for production
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [PokéAPI](https://pokeapi.co/) - RESTful Pokémon API
- [TypeScript](https://www.typescriptlang.org/) - Static typing for JavaScript

## Prerequisites

Before you begin, ensure you have installed:
- Node.js (v14.0.0 or later)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/pokemon-search.git
cd pokemon-search
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
pokemon-search/
├── components/
│   └── Fovorite.tsx
│   └── LoadingComponent.tsx
│   └── PokemonComponent.tsx
│   ├── SearchPokemon.tsx
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api/
│   └── index.tsx
├── public/
├── styles/
│   └── globals.css
├── types/
│   └── pokemon.ts
├── utils/
│   └── api.ts
└── README.md
```

## API Integration

This project uses the PokéAPI to fetch Pokémon data. Example API call:

```typescript
const fetchPokemonData = async (name: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
};
```

## Type Definitions

```typescript
interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
    // other sprite properties...
  };
  game_indices: {
    version: {
      name: string;
    };
  }[];
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [PokéAPI](https://pokeapi.co/) for providing the Pokémon data
- [Tailwind CSS](https://tailwindcss.com/) for the styling utilities
- The Pokémon Company for the original content

## Contact

Your Name - [MeowMerry](https://www.linkedin.com/in/thasanee-p-686125243)

Project Link: [https://github.com/yourusername/pokemon-search](https://github.com/yourusername/pokemon-search)