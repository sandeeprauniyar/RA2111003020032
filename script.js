document.getElementById('postForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const dataInput = document.getElementById('dataInput').value;
    const data = dataInput.split(',').map(item => item.trim());

    const response = await fetch('/api/bfhl', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data })
    });
    const result = await response.json();
    document.getElementById('postResponse').innerText = JSON.stringify(result, null, 2);
});

document.getElementById('getRequestButton').addEventListener('click', async () => {
    const response = await fetch('/api/bfhl');
    const result = await response.json();
    document.getElementById('getResponse').innerText = JSON.stringify(result, null, 2);
});
