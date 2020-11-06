const p = document.getElementById('text');

const textLists = [
    'Hello Word',
    'This is my App',
    'How are you?',
    'Thank you',
    'I love JavaScript',
    'Good morning',
    'I am Japanese',
    'Let it be',
];

let checkTexts = [];

createText();

function createText(){
    let rnd = Math.floor(Math.random() * textLists.length);

    p.textContent = '';

    checkTexts = textLists[rnd].split('').map(function(value){
        const span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

document.addEventListener('keydown', keyDown);

function keyDown(e){
    if(e.key === checkTexts[0].textContent){
        checkTexts[0].className = 'add-blue';
        checkTexts.shift();
        if(!checkTexts.length)createText();
    }
}
