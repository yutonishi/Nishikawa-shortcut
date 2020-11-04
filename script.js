
var p = document.getElementById('text');
var textLists = [
    'Hello World',
    'This is my App',
    'How are you?',
    'Thank you'
];
var checkTexts = [];

checkTexts = textLists[0].split('').map(function(value){
    var span = document.createElement('span');

    span.textCotnent = value;
    p.appendChild(span);

    return span;
});

console.log(checkTexts);

p.textContent = textLists[0];

document.addEventListener('keydown', keyDown);

function keyDown(e) {
    if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';
    }
}