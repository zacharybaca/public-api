// SEARCH CONTAINER
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


// GALLERY CONTAINER
let gallery = document.getElementById('gallery');

function assignAttributes(cardProfilePic, cardAlt, cardName, cardEmail,cardLocation, address, phoneNumber, birthday) {
    //Assign Class Attributes To Elements
    let cardContainer = document.createElement('div');
    let cardImageContainer = document.createElement('div');
    let cardInfoContainer = document.createElement('div');
    let cardImage = document.createElement('img');
    let nameHeader = document.createElement('h3');
    let email = document.createElement('p');
    let locationPara = document.createElement('p');
    // MODAL CONTAINER
    //Create Elements For Modal Container
    let modalContainer = document.createElement('div');
    let modal = document.createElement('div');
    let modalInfo = document.createElement('div');
    let modalImage = document.createElement('img');
    let modalName = document.createElement('h3');
    let modalEmail = document.createElement('p');
    let modalCity = document.createElement('p');
    let modalPhoneNumber = document.createElement('p');
    let modalAddress = document.createElement('p');
    let modalBirthday = document.createElement('p');
    let modalButton = document.createElement('button');
    let strongText = document.createElement('STRONG');
    let divider = document.createElement('hr');
    cardContainer.classList.add('card');
    cardImageContainer.classList.add('card-img-container');
    cardImage.classList.add('card-img');
    cardImage.src = cardProfilePic;
    cardImage.alt = cardAlt;
    cardInfoContainer.classList.add('card-info-container');
    nameHeader.setAttribute('id', 'name');
    nameHeader.classList.add('card-name');
    nameHeader.classList.add('cap');
    email.classList.add('card-text');
    locationPara.classList.add('card-text');
    locationPara.classList.add('cap');
    nameHeader.innerHTML = cardName;
    email.innerHTML = cardEmail;
    locationPara.innerHTML = cardLocation;

    //Add Class Attributes To Elements
    strongText.textContent = 'X';
    modalContainer.classList.add('modal-container');
    modal.classList.add('modal');
    modalButton.type = 'button';
    modalButton.setAttribute('id', 'modal-close-btn');
    modalButton.classList.add('modal-close-btn');
    modalInfo.classList.add('modal-info-container');
    modalImage.classList.add('modal-img');
    modalImage.src = cardProfilePic;
    modalName.setAttribute('id', 'name');
    modalName.classList.add('modal-name');
    modalName.classList.add('cap');
    modalName.innerHTML = cardName;
    modalEmail.classList.add('modal-text');
    modalEmail.innerHTML = cardEmail;
    modalCity.classList.add('modal-text');
    modalCity.classList.add('cap');
    modalCity.innerHTML = cardLocation;
    modalPhoneNumber.classList.add('modal-text');
    modalPhoneNumber.innerHTML = phoneNumber;
    modalAddress.classList.add('modal-text');
    modalAddress.innerHTML = address;
    modalBirthday.classList.add('modal-text');
    modalBirthday.innerHTML = birthday;

     //Append Elements To Respective Parent Elements
     modalContainer.appendChild(modal);
     modalButton.appendChild(strongText);
     modal.appendChild(modalButton);
     modal.appendChild(modalInfo);
     modalInfo.appendChild(modalImage);
     modalInfo.appendChild(modalName);
     modalInfo.appendChild(modalEmail);
     modalInfo.appendChild(modalCity);
     modalInfo.appendChild(divider);
     modalInfo.appendChild(modalPhoneNumber);
     modalInfo.appendChild(modalAddress);
     modalInfo.appendChild(modalBirthday);

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

    //Event Listener To Listen For On Click For Each Card
     
    cardContainer.addEventListener('click', (e) => {
        gallery.appendChild(modalContainer);
        closeModal(modalContainer);
    })
   
    
}

function closeModal(modalContainer) {
    const closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', () => {
        modalContainer.remove();
    })
}


//Fetch Data From API

fetch('https://randomuser.me/api/?results=12')
    .then((response) => response.json())
    .then((data) => {
        const user = data.results
        console.log(user);
        user.map((person, index) => {
            let nameHeader = person.name.first.concat(" ", person.name.last);
            let cardImage = person.picture.thumbnail;
            let cardEmail = person.email;
            let cardAlt = cardImage.alt;
            let locationPara = person.location.city.concat(" ", person.location.state);
            let address = person.location.street.number + " " + person.location.street.name + ", " + person.location.city + ", " + person.location.state + ", " + person.location.postcode + " " + person.location.country;
            let phoneNumber = person.cell;
            phoneNumber = phoneNumber.replace(/\D+/g, '')
                    .replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
            let birthday = new Date(person.dob.date);
            birthday = `Birthday: ${birthday.getMonth()}/${birthday.getDay()}/${birthday.getFullYear()}`
            assignAttributes(cardImage, cardAlt, nameHeader, cardEmail, locationPara, address, phoneNumber, birthday);
        })
    });
    
    






