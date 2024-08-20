document.getElementById('toggleButton').addEventListener('click', function() {
    const button = document.getElementById('toggleButton');
    const text = document.getElementById('text');
    const container = document.getElementById('container');
    
    if (container.style.backgroundColor === 'black') {
        button.style.color = 'black';
        text.style.color = 'black';
        container.style.backgroundColor = 'white';
    } else {
        button.style.color = 'white';
        text.style.color = 'white';
        container.style.backgroundColor = 'black';
    }
});