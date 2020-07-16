/******/ ///////////randomized questions for each value////////////////****** */
const max = 100; 
// function myfun(){
// 	document.querySelector('.gameboard').style.display = 'block'
// }



// const square1 = document.querySelectorAll('.gameboard')
// square1.forEach((square1) => {
// 	square1.addEventListener('click', handleClickQues);
// });
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=100`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let randomindex = Math.floor(Math.random() * Math.floor(max))
			let square1 = res[randomindex].question;
			let questionParagraph = document.createElement('p');
			let answerParagraph = document.createElement('p')
			let answer = res[randomindex].answer
			answerParagraph.innerText = answer
			questionParagraph.innerText = square1
			document.querySelector('.gameboard').appendChild (questionParagraph)
			document.querySelector('.gameboard').appendChild(answerParagraph);
			questionParagraph.classList.add('quest')
			answerParagraph.classList.add('hide','ans')

			let showAnswer = document.querySelector('.show-answer')
			
			showAnswer.addEventListener('click', ()=>{
				answerParagraph.classList.remove('hide')
			})
			
		})
		.catch((error) => {
			console.log(error);
		});
}
handleClickQues()

///////////////////////////////////////////////////////////////////////////////
// const square2 = document.querySelectorAll('.squ2');
// square2.forEach((square2) => {
// 	square2.addEventListener('click', handleClickQues);
// });
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=200`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
				let randomindex = Math.floor(Math.random() * Math.floor(max));
				let square1 = res[randomindex].question;
				let questionParagraph = document.createElement('p');
				let answerParagraph = document.createElement('p');
				let answer = res[randomindex].answer;
				answerParagraph.innerText = answer;
				questionParagraph.innerText = square1;
				document.querySelector('.gameboard').appendChild(questionParagraph);
				document.querySelector('.gameboard').appendChild(answerParagraph);
				questionParagraph.classList.add('quest');
				answerParagraph.classList.add('hide', 'ans');

				let showAnswer = document.querySelector('.show-answer');

				showAnswer.addEventListener('click', () => {
					answerParagraph.classList.remove('hide');
				});
		})
		.catch((error) => {
			console.log(error);
		});
}
// ///////////////////////////////////////////////////////////////////////////////
// const square3 = document.querySelectorAll('.squ3');
// square3.forEach((square3) => {
// 	square3.addEventListener('click', handleClickQues);
// });
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=300`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let randomindex = Math.floor(Math.random() * Math.floor(max));
			let square1 = res[randomindex].question;
			let questionParagraph = document.createElement('p');
			let answerParagraph = document.createElement('p');
			let answer = res[randomindex].answer;
			answerParagraph.innerText = answer;
			questionParagraph.innerText = square1;
			document.querySelector('.gameboard').appendChild(questionParagraph);
			document.querySelector('.gameboard').appendChild(answerParagraph);
			questionParagraph.classList.add('quest');
			answerParagraph.classList.add('hide', 'ans');

			let showAnswer = document.querySelector('.show-answer');

			showAnswer.addEventListener('click', () => {
				answerParagraph.classList.remove('hide');
			});
		})
		.catch((error) => {
			console.log(error);
		});
}
// //////////////////////////////////////////////////////////////////////////////
// const square4 = document.querySelectorAll('.squ4');
// square4.forEach((square4) => {
// 	square4.addEventListener('click', handleClickQues);
// });
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=400`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let randomindex = Math.floor(Math.random() * Math.floor(max));
			let square1 = res[randomindex].question;
			let questionParagraph = document.createElement('p');
			let answerParagraph = document.createElement('p');
			let answer = res[randomindex].answer;
			answerParagraph.innerText = answer;
			questionParagraph.innerText = square1;
			document.querySelector('.gameboard').appendChild(questionParagraph);
			document.querySelector('.gameboard').appendChild(answerParagraph);
			questionParagraph.classList.add('quest');
			answerParagraph.classList.add('hide', 'ans');

			let showAnswer = document.querySelector('.show-answer');

			showAnswer.addEventListener('click', () => {
				answerParagraph.classList.remove('hide');
			});
		})
		.catch((error) => {
			console.log(error);
		});
}
// ////////////////////////////////////////////////////////////////////////////
const square5 = document.querySelectorAll('.squ5');
square5.forEach((square5) => {
	square5.addEventListener('click', handleClickQues);
});
function handleClickQues(event) {
	fetch(`http://www.jservice.io/api/clues?value=500`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {
			let randomindex = Math.floor(Math.random() * Math.floor(max));
			let square1 = res[randomindex].question;
			let questionParagraph = document.createElement('p');
			let answerParagraph = document.createElement('p');
			let answer = res[randomindex].answer;
			answerParagraph.innerText = answer;
			questionParagraph.innerText = square1;
			document.querySelector('.gameboard').appendChild(questionParagraph);
			document.querySelector('.gameboard').appendChild(answerParagraph);
			questionParagraph.classList.add('quest');
			answerParagraph.classList.add('hide', 'ans');

			let showAnswer = document.querySelector('.show-answer');

			showAnswer.addEventListener('click', () => {
				answerParagraph.classList.remove('hide');
			});
		})
		.catch((error) => {
			console.log(error);
		});
}
