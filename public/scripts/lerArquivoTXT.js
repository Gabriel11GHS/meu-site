fetch('myText.txt')
  .then(response => {
    if (!response.ok) {
      throw new Error('Error fetching data');
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('myText').textContent = data;
  })
  .catch(error => {
    console.error(error);
    document.getElementById('myText').textContent = 'Error fetching data';
  });
