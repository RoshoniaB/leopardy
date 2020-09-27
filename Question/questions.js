const max = 100; 
function handleClickQues(event) {
	fetch(`https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`)
		.then((res) => {
			return res.json();
		})
		.then((res) => {console.log(res.results)})
		.catch((error) => {
			console.log(error);
		});
}
handleClickQues()
