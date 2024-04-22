fetch('changelog.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('output').textContent = data;
  })
  .catch(error => console.error(error));