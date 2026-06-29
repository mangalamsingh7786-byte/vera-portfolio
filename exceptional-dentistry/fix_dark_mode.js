import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Backgrounds
    content = content.replace(/bg-brand-light(?!\s*dark:)/g, 'bg-brand-light dark:bg-[#121212]');
    content = content.replace(/bg-white(?!\/)(?!\s*dark:)/g, 'bg-white dark:bg-[#121212]');
    
    content = content.replace(/bg-gray-50(?!\s*dark:)/g, 'bg-gray-50 dark:bg-[#1a1a1a]');
    content = content.replace(/bg-gray-100(?!\s*dark:)/g, 'bg-gray-100 dark:bg-[#151515]');
    content = content.replace(/bg-gray-200\/50(?!\s*dark:)/g, 'bg-gray-200/50 dark:bg-[#1a1a1a]/50');
    content = content.replace(/bg-gray-200(?!\/)(?!\s*dark:)/g, 'bg-gray-200 dark:bg-[#222]');
    
    // Text colors
    content = content.replace(/text-brand-charcoal\/80(?!\s*dark:)/g, 'text-brand-charcoal/80 dark:text-white/80');
    content = content.replace(/text-brand-charcoal\/70(?!\s*dark:)/g, 'text-brand-charcoal/70 dark:text-white/70');
    content = content.replace(/text-brand-charcoal\/60(?!\s*dark:)/g, 'text-brand-charcoal/60 dark:text-white/60');
    content = content.replace(/text-brand-charcoal\/40(?!\s*dark:)/g, 'text-brand-charcoal/40 dark:text-white/40');
    content = content.replace(/text-brand-charcoal(?!\/)(?!\s*dark:)/g, 'text-brand-charcoal dark:text-white');
    
    // Borders
    content = content.replace(/border-brand-charcoal\/30(?!\s*dark:)/g, 'border-brand-charcoal/30 dark:border-white/30');
    content = content.replace(/border-brand-charcoal(?!\/)(?!\s*dark:)/g, 'border-brand-charcoal dark:border-white');

    // Hovers
    content = content.replace(/hover:bg-brand-charcoal(?!\s*dark:)/g, 'hover:bg-brand-charcoal dark:hover:bg-white');
    content = content.replace(/hover:border-brand-charcoal(?!\s*dark:)/g, 'hover:border-brand-charcoal dark:hover:border-white');
    content = content.replace(/hover:text-white(?!\s*dark:)/g, 'hover:text-white dark:hover:text-brand-dark');
    
    fs.writeFileSync(filePath, content);
}

const filesToUpdate = [
    'src/components/Footer.tsx',
    'src/pages/Home.tsx',
    'src/pages/Services.tsx',
    'src/pages/Contact.tsx',
    'src/pages/About.tsx',
];

filesToUpdate.forEach(file => replaceInFile(path.join(__dirname, file)));
console.log("Replaced colors");
