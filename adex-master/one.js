
async function loadContent(section) {
    try {
        const response = await fetch(`${section}.html`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const html = await response.text();
        document.getElementById('content').innerHTML = html;
    } catch (error) {
        console.error('Error fetching content:', error);
    }
}
