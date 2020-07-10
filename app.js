let team1 = 'X'

const square = document.querySelectorAll('.square');


square.forEach(square =>{
    square.addEventListener('click', handleClick);
});

function switchTeam(){
    team1 = team1 === 'X' ? 'O' : 'X';
};

function handleClick(event) {
    event.target.innerHTML = team1;
   console.log(event.target.id)
  
};

const category = document.querySelectorAll('.category');
