function sayHello () {
    let myName = prompt('Как тебя завут?');
    let span = document.querySelector('span');
    span.textContent = myName; 
}

let button = document.querySelector('.vp');
button.onclick(sayHello());