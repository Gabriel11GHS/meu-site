fetch('changelog.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('output').innerText = data;
  })
  .catch(error => console.error(error));