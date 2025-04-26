document.getElementById('btn').addEventListener('click', function() {
    const links = [
        'https://t.me/kaletn',
        'https://t.me/kladmartin1',
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    ];
    
    const randomIndex = Math.floor(Math.random() * links.length);
    window.open(links[randomIndex], '_blank');
}); 