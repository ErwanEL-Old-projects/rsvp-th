document.addEventListener('DOMContentLoaded', () => {
    //ajoute un string au <label>
    filterLabel.textContent = "Hide those who haven't responded";
    //ajoute <input> type=checkbox 
    filterCheckbox.type = 'checkbox'; 
    div.appendChild(filterLabel);
    div.appendChild(filterCheckbox);
    // ajoute la div avant le ul
    mainDiv.insertBefore(div, ul);
});