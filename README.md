# GCCP Leaderboard

A simple leaderboard website to display Google Cloud Computing Program participant rankings.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

## Updating Leaderboard Data

To update the leaderboard with new data:

1. Replace the CSV file at `src/data/raw.csv` with your new data
2. Run the conversion script to generate the JSON file and build the project:

```bash
node src/scripts/convert.js && npm run build
```

## Building for Production

```bash
npm run build
```

The built files will be available in the `build` directory.
