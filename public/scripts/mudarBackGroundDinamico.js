 //Arrumar esse código para que ele funcione
 
 // Seleciona a imagem pelo seu atributo alt
  var img = document.querySelector('img[alt="Filmes"]');

  // Lista de URLs de imagens
  var images = [
    'https://api.lorem.space/image/movie1?w=400&h=225',
    'https://api.lorem.space/image/movie2?w=400&h=225',
    'https://api.lorem.space/image/movie3?w=400&h=225',
    // adicione mais URLs conforme necessário
  ];

  // Índice da imagem atual
  var index = 0;

  // Função para alterar a imagem
  function changeImage() {
    img.src = images[index];
    index = (index + 1) % images.length; // move para a próxima imagem, volta para a primeira imagem quando chega ao final da lista
  }

  // Altera a imagem a cada 5 segundos
  setInterval(changeImage, 5000);

  // Seleciona todas as imagens
  var imgs = document.querySelectorAll('.card img');

  // Lista de listas de URLs de imagens
  var images = [
    [
      'https://api.lorem.space/image/movie1?w=400&h=225',
      'https://api.lorem.space/image/movie2?w=400&h=225',
      'https://api.lorem.space/image/movie3?w=400&h=225',
      // adicione mais URLs para a categoria "Filmes" conforme necessário
    ],
    [
      'https://api.lorem.space/image/game1?w=400&h=225',
      'https://api.lorem.space/image/game2?w=400&h=225',
      'https://api.lorem.space/image/game3?w=400&h=225',
      // adicione mais URLs para a categoria "Games" conforme necessário
    ],
    [
      'https://api.lorem.space/image/book1?w=400&h=225',
      'https://api.lorem.space/image/book2?w=400&h=225',
      'https://api.lorem.space/image/book3?w=400&h=225',
      // adicione mais URLs para a categoria "Books" conforme necessário
    ],
    // adicione mais listas de URLs para outras categorias conforme necessário
  ];

  // Índices das imagens atuais
  var indices = Array(imgs.length).fill(0);

  // Função para alterar as imagens
  function changeImages() {
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].src = images[i][indices[i]];
      indices[i] = (indices[i] + 1) % images[i].length; // move para a próxima imagem, volta para a primeira imagem quando chega ao final da lista
    }
  }

  // Altera as imagens a cada 5 segundos
  setInterval(changeImages, 5000);