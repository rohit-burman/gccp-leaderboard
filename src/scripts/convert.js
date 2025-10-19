import fs from 'fs';
import csv from 'csv-parser';
import path from "path";


// const results = [];
// fs.createReadStream('src/data/raw.csv')
//   .pipe(csv())
//   .on('data', (data) => results.push(data))
//   .on('end', () => {
//     fs.writeFileSync('src/data/data.json', JSON.stringify(results, null, 2)); 
//     console.log('CSV converted to JSON!')
//   });


const inputPath = path.resolve("src/data/raw.csv");
const outputPath = path.resolve("src/data/data.json");

function convertCSVtoJSON() {
  console.log("Starting CSV to JSON conversion.....");

 
  if (!fs.existsSync(inputPath)) {
    console.error(`Error: CSV file not found at "${inputPath}"`);
    process.exit(1);
  }

  const results = [];
  const stream = fs.createReadStream(inputPath).pipe(csv());

  stream
    .on("data", (data) => results.push(data))
    .on("error", (err) => {
      console.error("Error while reading or parsing CSV:", err.message);
      process.exit(1);
    })
    .on("end", () => {
      try {
        fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
        console.log(`CSV converted successfully → ${outputPath}`);
        console.log(`Rows processed: ${results.length}`);
      } catch (err) {
        console.error("Error while writing JSON file:", err.message);
        process.exit(1);
      }
    });
}


try {
  convertCSVtoJSON();
} catch (err) {
  console.error("Unexpected error:", err.message);
  process.exit(1);
}
