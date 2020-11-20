const team = [
  {
    id: 1,
    text: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    occupation: 'UX Engineer',
    image: './images/image-tanya.jpg',
  },
  {
    id: 2,
    text: '" If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. "',
    name: 'John Tarkpor',
    occupation: 'Junior Front-end Developer',
    image: './images/image-john.jpg',
  }
]

let text = document.querySelector('#text p');
let name = document.querySelector('#author h6');
let occupation = document.querySelector('#span');
let image = document.querySelector('#avatar');

const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');


let currentPerson = 0;

window.addEventListener('DOMContentLoaded', function() {
  showPerson();
});

function showPerson() {
  const person = team[currentPerson];

  text.textContent = person.text;
  name.textContent = person.name;
  occupation.textContent = person.occupation;
  image.src = person.image;
}

prevButton.addEventListener("click", function() {
  currentPerson--;

  if (currentPerson < 0) {
    currentPerson = team.length - 1;
  }

  showPerson();
});

nextButton.addEventListener("click", function() {
  currentPerson++;

  if (currentPerson > team.length - 1) {
    currentPerson = 0;
  }

  showPerson();
});

