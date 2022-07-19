const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const hello = document.createElement('p');
hello.classList.add('content');
hello.textContent = 'hello';
hello.style.color='red';

container.appendChild(hello);

const blue = document.createElement('h3');
blue.classList.add('content');
blue.textContent = "I'm a blue h3";
blue.style.color='blue';

container.appendChild(blue);

const der=document.createElement('h1');
der.classList.add('der');
der.textContent='I\'m inside a div!';

const fer=document.createElement('p');
fer.classList.add('fer');
fer.textContent='Me too!';


const conte = document.createElement('div');
conte.classList.add('conte');
conte.style.background='black';
conte.setAttribute('style','border:solid; border-color:black;background:pink;')
conte.appendChild(der);
conte.appendChild(fer);



const btn = document.querySelector('#btn');

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

const buttons=document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click',()=>alert(button.id));
})








container.appendChild(conte);




