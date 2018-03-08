//permet d'éviter les doublons
const loopNames = () => {
    let listNames = document.querySelectorAll('li span');
    for (let i = 0; i<listNames.length; i+=1) {
        let list = listNames[i];	
        let names = list.textContent;
        if (input.value === names) {
            return true;
        }
    }
};

//permet de creer un list element
const createLI = (text) => {
    // fonction permettant de créer chaque élément compris dans un li
    const createElement = (elementName, property, value) => { 
      //crée elementName
      const element = document.createElement(elementName);
      //assigne la valeur à la propriété
      element[property] = value;
      return element;
    }
    const appendToLI = (elementName, property, value) => {
      const element = createElement(elementName, property, value); //crée le li
      li.appendChild(element); //append le contenu du li
      return element;
    }
      const li = document.createElement('li'); 
      appendToLI('span', 'textContent', text);
      appendToLI('label', 'textContent', 'Confirmed')
        .appendChild (createElement('input', 'type', 'checkbox'));
      //crée le bouton edit
      appendToLI('button', 'textContent', 'edit');
      //crée le bouton remove
      appendToLI('button', 'textContent', 'remove');
      // sinon la function retourne undefined et non l'élément
      return li;
  };