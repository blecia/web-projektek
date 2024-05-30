console.log('hello world')
console.log(1); console.log(3);

let a = 1;
console.log(typeof a);
// var b = 2;
console.log(1 === '1');

const c = 3;
if(c == 3)
    {
        console.log('c értéke 3');
    }
for(let i = 0; i < 3; i++){
        console.log(i);
    }
    
while(b > 0){
        console.log(b);
        b--;
    }
    
    function greetings(name) {
        console.log(`Hello, ${name}!`); // altgr + 7 -> backtick
    }
    
    greetings('John');
    
    
const cim = document.querySelector('h1');
const input = document.querySelector('input#nev');
const button = document.querySelector('button#send');
console.log(cim, input, button)

button.addEventListener('click', onClick)

function onClick (){
    cim.innerHTML = `Hello, ${input.value}!`;
}

let nev = 'John';

cim.innerHTML = `Hello, ${nev}!`;
console.log(cim)
