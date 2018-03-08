filterCheckbox.addEventListener('change', (e) => {
    //return true ou false
    const isChecked = e.target.checked;
    //liste tout les childs de ul donc les li ou les invités
    const lis = ul.children;
    //si la checkbox est cochée
    if (isChecked) { 
        //boucle tout les invités
        for (let i = 0; i < lis.length; i += 1) {
            //correspond à chaque invité
            let li = lis[i];
            //si la classe de li est 'responded'
            if (li.className === 'responded') {
                //affiche li ('' reset la valeur de diplay par défaut, fonctionne aussi avec block)
                li.style.display = '';
            } else {
                //sinon n'affiche pas le li
                li.style.display = 'none';
            }
        }
    } else {
        // si la checkbox est décochée
        for (let i = 0; i < lis.length; i += 1) {
            //boucle tout les li
            let li = lis[i];
            //affiche les li
            li.style.display = '';

        }

    }

})

//Evenement lorsque que l'on clique ou press enter sur le bouton submit
form.addEventListener('submit', (e) => {
    //Stop l'effet par défaut du submit qui est de renvoyer vers une autre page
    e.preventDefault();
    //Passe la valeur de l'input dans une variable
    const text = input.value;
    loopNames();
    if (input.value === "") {
        alert('Put a name in the field');
    } else if (loopNames()) {
        alert('Cette personne est déjà inscrite');
    } else {
        const li = createLI(text);
        ul.appendChild(li);
        localStorage.setItem(li, input.value);
        input.value = '';
    };
});

ul.addEventListener('change', (e) => {
    //variable qui récupere la cible de l'event cad la checkbox
    const checkbox = event.target;
    //si la checkbox est cochée retourne true sinon false
    const checked = checkbox.checked;
    //variable qui récupere le li de la checkbox
    const listItem = checkbox.parentNode.parentNode;

    if (checked) {
        //si la checkbox est cochée assigne la classe 'responded' à li
        listItem.className = 'responded';
    } else {
        //sinon assigne une classe vide à li
        listItem.className = ''; 
    }
});

ul.addEventListener('click', (e) => {
    // si l'élément de la cible de l'évenement est un bouton
    if (e.target.tagName === 'BUTTON') {
        const button = e.target;
        // parent du bouton ciblé donc li
        const li = e.target.parentNode;
        // parent de li donc ul
        const ul = li.parentNode;
        const action = button.textContent;
        const nameActions = {
            remove: () => {
                //supprime le li
                ul.removeChild(li);
            },
            edit: () => {
                const span = li.firstElementChild;
                const input = document.createElement('input');
                input.type = 'text';
                //retourne la donnée qui est dans le input
                input.value = span.textContent;
                li.insertBefore(input, span);
                li.removeChild(span);
                button.textContent = 'save';
            },
            save: () => {
                const input = li.firstElementChild;
                const span = document.createElement('span');
                span.textContent = input.value;
                li.insertBefore(span, input);
                li.removeChild(input);
                button.textContent = 'edit';
            }
        }

        //Select and run action in button's name
        nameActions[action]();
    }
});