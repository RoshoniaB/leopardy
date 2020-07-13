let team1 = 'X'

const square = document.querySelectorAll('.square');


square.forEach(square =>{
    square.addEventListener('click', handleClick);

});

// function switchTeam(){
//     team1 = team1 === 'X' ? 'O' : 'X';
// };

function handleClick(event) {
    fetch('http://www.jservice.io/api/categories?count=100')
			.then((res) => {
				return res.json();
			})
			.then((res) => {
                console.log(res);
			})
			.catch((error) => {
				console.log(error);
			});
    
};

const category = document.querySelectorAll('.category');

function addOption(event) {
	const moneybtn = document.querySelectorAll('.square');

	const button = document.createElement('BUTTON');
	const text = document.createTextNode('BUTTON');

	button.appendChild(text);
	moneybtn.appendChild(button);
	console.log(event.target.div);
}
