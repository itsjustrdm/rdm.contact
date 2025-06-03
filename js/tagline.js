const TAGLINES_FILE = 'taglines.md';
const FOOTERS_FILE = 'footers.md';

async function loadContent(file) {
    try {
        const response = await fetch('/' + file);
        const text = await response.text();
        const lines = text.split('\n')
            .filter(line => line.trim().startsWith('-'))
            .map(line => line.substring(1).trim());
        
        if (lines.length === 0) {
            throw new Error(`No lines found in ${file}`);
        }
        
        return lines[Math.floor(Math.random() * lines.length)];
    } catch (error) {
        console.error(`Error loading ${file}:`, error);
        return 'Error loading content';
    }
}

async function updateElement(file, elementId) {
    const content = await loadContent(file);
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = content;
    } else {
        console.error(`Element ${elementId} not found`);
    }
}

// Update everything on page load
document.addEventListener('DOMContentLoaded', () => {
    updateElement(TAGLINES_FILE, 'tagline');
    updateElement(FOOTERS_FILE, 'footer');
});