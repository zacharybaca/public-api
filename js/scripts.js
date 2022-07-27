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