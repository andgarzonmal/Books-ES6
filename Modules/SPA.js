const addmybooks = document.querySelector('.addmybooks');
const contactInfo = document.querySelector('.contact-info');
const bookshelf = document.querySelector('.bookshelf');

export const showMyBooks = () => {
    addmybooks.style.display = 'none';
    contactInfo.style.display = 'none';
    bookshelf.style.display = 'unset';
}

export const addNewBook = () => {
    addmybooks.style.display = 'unset';
    contactInfo.style.display = 'none';
    bookshelf.style.display = 'none';
}

export const contact = () => {
    addmybooks.style.display = 'none';
    contactInfo.style.display = 'unset';
    bookshelf.style.display = 'none';
}