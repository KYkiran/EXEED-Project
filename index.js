import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve static files (HTML, CSS, JS, images, etc.) from the "public" directory
app.use(express.static("Public"));
// Serve the index.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(__dirname +'/Public/Home.html');
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
