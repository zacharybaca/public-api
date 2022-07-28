//Create Form Element For Search Container
//Create Elements Needed For Form
let search = document.querySelector('.search-container');
let form = document.createElement('form');
let searchInput = document.createElement('input');
let submitInput = document.createElement('input');

//Add Attributes To Each Element That Was Created
form.method = 'GET';
searchInput.type = 'search';
searchInput.setAttribute('id', 'search-input');
searchInput.classList.add('search-input');
searchInput.placeholder = 'Search...';
submitInput.type = 'submit';
submitInput.value = 'Search';
submitInput.setAttribute('id', 'search-submit');
submitInput.classList.add('search-submit');

//Append Input Elements To Form
form.appendChild(searchInput);
form.appendChild(submitInput);

//Append Form to Search Container
search.appendChild(form);



//Create Card Div and Add Elements
let gallery = document.getElementById('gallery');
let cardContainer = document.createElement('div');
let cardImageContainer = document.createElement('div');
let cardInfoContainer = document.createElement('div');
let cardImage = document.createElement('img');
let nameHeader = document.createElement('h3');
let email = document.createElement('p');
let locationPara = document.createElement('p');

//Assign Class Attributes To Elements
cardContainer.classList.add('card');
cardImageContainer.classList.add('card-img-container');
cardImage.classList.add('card-img');
cardImage.src = 'https://placehold.it/90x90';
cardImage.alt = 'profile picture';
cardInfoContainer.classList.add('card-info-container');
nameHeader.setAttribute('id', 'name');
nameHeader.classList.add('card-name');
nameHeader.classList.add('cap');
email.classList.add('card-text');
locationPara.classList.add('card-text');
locationPara.classList.add('cap');
nameHeader.innerHTML = 'First Last';
email.innerHTML = 'Email';
locationPara.innerHTML = 'City, State';

//Add Card Container To Gallery Container
gallery.appendChild(cardContainer);

//Add Card Image Container to Card Div
cardContainer.appendChild(cardImageContainer);

//Add Card Info Container To Card Div
cardContainer.appendChild(cardInfoContainer);

//Add Card Image to Card Image Container
cardImageContainer.appendChild(cardImage);

//Add nameHeader To Card Info Container
cardInfoContainer.appendChild(nameHeader);

//Add email To Card Info Container
cardInfoContainer.appendChild(email);

//Add location to Card Info Container
cardInfoContainer.appendChild(locationPara);

