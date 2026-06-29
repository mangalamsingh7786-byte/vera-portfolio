import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/#121212/g, '#080B0C');
    fs.writeFileSync(filePath, content);
}

const filesToUpdate = [
    'src/index.css',
    'src/components/Navbar.tsx',
    'src/components/Footer.tsx',
    'src/pages/Home.tsx',
    'src/pages/Services.tsx',
    'src/pages/Contact.tsx',
    'src/pages/About.tsx',
];

filesToUpdate.forEach(file => replaceInFile(path.join(__dirname, file)));
console.log("Replaced colors");
