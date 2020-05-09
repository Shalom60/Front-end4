
const scoreCounter = document.getElementById("score-counter");
 const optionA= document.getElementById("A");
const optionB= document.getElementById("B");
const optionC= document.getElementById("C");
const optionD= document.getElementById("D");
const options= document.getElementById("options");
const question = document.getElementById("question");
const finalScore= document.getElementById("final-score");
const nxtbtn =  document.getElementById("next");
const main = document.querySelector('main');

let lastscorepage = document.createElement('p') ;
   finalScore.appendChild(lastscorepage);

nxtbtn.style.display= "none";
finalScore.style.display="none";

  const questions = [
 {
 	question : "How many planets are in our solar system?",
 	optionA : "7",
 	optionB: '10',
 	optionC: "8",
 	optionD: "5",
 	correct : "C"
 },
{ 
	question : "What planet is closest to the sun?",
 	optionA : "Venus",
 	optionB: "Mercury",
 	optionC: "Saturn",
 	optionD: "Jupiter",
 	correct : "B"

},
{ 
	question : "The Earth and its solar system is in what galaxy?",
 	optionA : "Black Eye Galaxy",
 	optionB: "Cigar Galaxy",
 	optionC: "Cosmos Redshift 7",
 	optionD: "Milky Way",
 	correct : "D"

},
{ 
	question : "What planet is the smallest in our solar system?",
 	optionA : "Mercury",
 	optionB: "Venus",
 	optionC: "Saturn",
 	optionD: "Jupiter",
 	correct : "A"

},
{ 
	question : "What are the two largest planet in our solar system?",
 	optionA : "Mercury & Saturn",
 	optionB: "Venus & Earth",
 	optionC: "Saturn & Jupiter",
 	optionD: "Jupiter & Mercury",
 	correct : "C"

},

 ];
const lastQuestionIndex = questions.length-1;
let currentQuestionIndex = 0;

function displayQuestion(){
   let i = questions[currentQuestionIndex];
   question.innerHTML = "<h3>" + i.question + "</h3>";
	optionA.innerHTML= "A."+ '&nbsp' +i.optionA;
	optionB.innerHTML = "B."+ '&nbsp' + i.optionB;
	optionC.innerHTML = "C." + '&nbsp' + i.optionC;
	optionD.innerHTML = "D." + '&nbsp' + i.optionD;
	for(let x=0; x< options.children.length; x++){
	options.children[x].style.pointerEvents="auto";
	options.children[x].style.backgroundColor="";
	options.children[x].style.color="";
	nxtbtn.style.display= "none";
}
}
displayQuestion();


	

let score = 0;
scoreCounter.innerHTML = "Score:" +"&nbsp"+score+"/5";

function checkAnswer(answer){
 if(questions[currentQuestionIndex].correct == answer){
  score++; 
  scoreCounter.innerHTML = "Score:" +"&nbsp"+score+"/5";
document.getElementById(answer).style.backgroundColor = "green"
document.getElementById(answer).style.color = "white";
		
	} else{
		document.getElementById(answer).style.backgroundColor = "red";
		document.getElementById(answer).style.color = "white";
		document.getElementById(questions[currentQuestionIndex].correct).style.backgroundColor= "green";
		document.getElementById(questions[currentQuestionIndex].correct).style.color= "white";
	
}
for(let x=0; x< options.children.length; x++){
	options.children[x].style.pointerEvents="none";
}
	nxtbtn.style.display= "";
}
 

function finaScoreDisplay(){
	main.style.display= "none";
	finalScore.style.display="";
	finalScore.style.display="block";
	lastscorepage.innerHTML = "Your score is" + "&nbsp"+ score+"/5";
	
}


	nxtbtn.addEventListener('click', function next(){

		if(currentQuestionIndex < lastQuestionIndex){
		currentQuestionIndex++;
		
displayQuestion();
	
	
	} else{
finaScoreDisplay();
	}
}); 