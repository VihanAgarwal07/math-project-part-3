Player1_name=localStorage.getItem("player_1");
Player2_name=localStorage.getItem("player_2");
console.log(Player1_name);
console.log(Player2_name);

Score1=0;
Score2=0;

document.getElementById("player1_name").innerHTML=Player1_name + " : &nbsp";
document.getElementById("player2_name").innerHTML=Player2_name + " : &nbsp";

document.getElementById("player1_score").innerHTML=Score1;
document.getElementById("player2_score").innerHTML=Score2;

document.getElementById("player_question_turn").innerHTML="Question Turn :" + Player1_name;
document.getElementById("player_answer_turn").innerHTML="Answer Turn :" + Player2_name;
number_multiplication=""
function send(){
    num_1=document.getElementById("number1").value;
    num_2=document.getElementById("number2").value;

    number_multiplication=num_1*num_2;
    console.log(number_multiplication);

    num_question=num_1 + "X" + num_2;
    console.log(num_question);

    html1="<h4 id='question'>" + "Q." + num_question + "</h4>";
    html2="<br><input type='text' id='answer' class='form-control' placeholder='type your answer'> <br>"
    html3="<button type='button' class='btn btn-info' id='checkanswer' onclick='check()'>Check</button>"
    row=html1 + html2 + html3 ; 
    document.getElementById("output").innerHTML=row                                  
}
