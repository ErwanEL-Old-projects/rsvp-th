//séléctionne le contenu de la balise form qui comprend l'input et le bouton submit
const form = document.getElementById('registrar');
//séléctionne l'input de la balise form
const input = form.querySelector('input');

const mainDiv = document.querySelector('.main');
//séléctionne la liste des invités
const ul = document.getElementById('invitedList');

//cree une nouvelle div
const div = document.createElement('div');
//crée <label>
const filterLabel = document.createElement('label');
//crée <input> 
const filterCheckbox = document.createElement('input');