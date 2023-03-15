//Primera Card

const card1 = document.createElement('section')
const articule1 = document.createElement('articule')
const titulo1 = document.createElement('h2')
titulo1.textContent="Creed III"
const img1 = document.createElement('img')
img1.src = "../img/Creed_III.jpg"
const texto1 = document.createElement('p')
texto1.textContent="Titulo en ingles: Creed III"
const subtexto1 = document.createElement('p')
subtexto1.textContent="Estreno 02 Marzo 2023"
const categoria1 = document.createElement('p')
categoria1.textContent="Genero : Drama"
card1.classList.add('pelicula_detalle')
articule1.appendChild(titulo1)
articule1.appendChild(subtexto1)
articule1.appendChild(categoria1)

card1.appendChild(img1)
card1.appendChild(articule1)

let padre = document.querySelector('.peliculas')

padre.appendChild(card1)


//Segunda Card
const card2 = document.createElement('section')
const articule2= document.createElement('article')
const titulo2 = document.createElement('h2')
titulo2.textContent="65 Al Borde De la Extinción"
const img2 = document.createElement('img')
img2.src = "../img/65.jpg"
const texto2 = document.createElement('p')
texto1.textContent="Titulo en ingles: 65"
const subtexto2 = document.createElement('p')
subtexto2.textContent="Estreno 09 Marzo 2023"
const categoria2 = document.createElement('p')
categoria2.textContent="Genero : Ciencia Ficcion, Thriller"
card2.classList.add('pelicula_detalle')
articule2.appendChild(titulo2)
articule2.appendChild(subtexto2)
articule2.appendChild(categoria2)

card2.appendChild(img2)
card2.appendChild(articule2)

padre.appendChild(card2)

// //Terecera Card

const card3 = document.createElement('section')
const articule3 = document.createElement('article')
const titulo3 = document.createElement('h2')
titulo3.textContent="TÁR"
const img3 = document.createElement('img')
img3.src = "../img/tar.jpg"
const texto3 = document.createElement('p')
texto1.textContent="Titulo en ingles: TÁR"
const subtexto3 = document.createElement('p')
subtexto3.textContent="Estreno 23 FEBRERO 2023"
const categoria3 = document.createElement('p')
categoria3.textContent="Genero : Biografia, Drama"
card3.classList.add('pelicula_detalle')
articule3.appendChild(titulo3)
articule3.appendChild(subtexto3)
articule3.appendChild(categoria3)

card3.appendChild(img3)
card3.appendChild(articule3)
padre.appendChild(card3)



// //Cuarta CArd
const card4 = document.createElement('section')
const article4 = document.createElement('article')
const titulo4 = document.createElement('h2')
titulo4.textContent="Ellas Hablan"
const img4 = document.createElement('img')
img4.src="../img/Ellas-Hablan.webp"
const texto4=document.createElement('p')
texto4.textContent="Titulo en Ingles: Women Talking"
const subtexto4= document.createElement('p')
subtexto4.textContent="Estrenada en : 02 Marzo 2023"
const categoria4 = document.createElement('p')
categoria4.textContent="Genero: Drama"
card4.classList.add('pelicula_detalle')
article4.appendChild(titulo4)
article4.appendChild(subtexto4)
article4.appendChild(categoria4)
card4.appendChild(img4)
card4.appendChild(article4)

 padre.appendChild(card4)

 //Creando el NAV
 const links1 = document.createElement('a')
 links1.innerHTML="Cartelera"
 links1.href="https://www.cinecolombia.com/bucaramanga/cartelera"
 links1.target="_blank"

 const links2 = document.createElement('a')
 links2.innerHTML="Pronto"
 links2.href="https://www.cinecolombia.com/bucaramanga/prontohttps://www.cinecolombia.com/bucaramanga/cartelera"
 links2.target="_blank"

 const links3 = document.createElement('a')
 links3.innerHTML="Cine alternativo"
 links3.href="https://www.cinecolombia.com/bucaramanga/alternativo"
 links3.target="_blank"

 const links4 = document.createElement('a')
 links4.innerHTML="Cartelera"
 links4.href="https://www.cinecolombia.com/comidas"
 links4.target="_blank"

 const papa = document.querySelector('header')
 papa.children[1].appendChild(links1)
 papa.children[1].appendChild(links2)
 papa.children[1].appendChild(links3)
 papa.children[1].appendChild(links4)
 