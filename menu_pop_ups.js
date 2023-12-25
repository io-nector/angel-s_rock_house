function toggleChecked() {
    const checkbox_drinks = document.getElementById('drink_checkbox');
    const drinks_class = document.getElementById('drinks');

    const checkbox_starters = document.getElementById('starters_checkbox');
    const starters_class = document.getElementById('starters');


    
    if (checkbox_drinks.checked) {
        drinks_class.classList.add('checked');
    } else {
        drinks_class.classList.remove('checked');
    }

    if (checkbox_starters.checked) {
        starters_class.classList.add('checked');
    } else {
        starters_class.classList.remove('checked');
    }
}