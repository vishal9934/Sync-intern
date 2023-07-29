let i = -1;
let count = 0;
let opt=null;
let correct_ans =0;
function start() {  
    box.style.display = 'none';
    box2.style.display = 'block';
    submit(update());
    quiz.style.display = 'none';
    if( quiz.style.display == 'none')
    {
        Submit.style.display = 'block';
    }
}
function submit() {
    let quesarray = [
        'Who is the President of India?',
        'How many months do we have in a year?',
        'What is the colour of an apple?',
        'How many legs do humans have?',
        'Which day comes after Saturday?'];
    document.getElementById('quesid').innerHTML = quesarray[i];
    let ansarray =
        [
            ['Narendra Modi', 'Rahul Gandhi', 'Dropdi murmu', 'Ramnath kovind'],
            ['10', '11', '12', '13'],
            ['Red', 'Yellow', 'Green', 'Black'],
            ['One', 'Two', 'Three', 'Four'],
            ['Sunday','Monday','Tuesday','Wednesday']
        ];
    document.getElementById('opt1').innerHTML = ansarray[i][0];
    document.getElementById('opt2').innerHTML = ansarray[i][1];
    document.getElementById('opt3').innerHTML = ansarray[i][2];
    document.getElementById('opt4').innerHTML = ansarray[i][3];    
    document.getElementById('scorevalue').innerHTML = "Q.no " +(i+1) + " Of 5";
    if (opt == correct_ans) {
        count++;
    }
    opt = null;
}
function op1() {
     opt = document.getElementById('opt1').innerHTML;
     correct_ans = correctans();
}
function op2() {
     opt = document.getElementById('opt2').innerHTML;
     correct_ans = correctans();
}
function op3() {
     opt = document.getElementById('opt3').innerHTML;
     correct_ans = correctans();
}
function op4() {
     opt = document.getElementById('opt4').innerHTML;
     correct_ans = correctans();
}
function correctans() {
    let canswer = ['New Delhi', '12', 'Red', 'Two', 'Sunday'];
    if (i == 0) {
        return canswer[0];
    }
    else if (i == 1) {
        return canswer[1];
    }
    else if (i == 2) {
        return canswer[2];
    }
    else if (i == 3) {
        return canswer[3];
    }
    else {
        return canswer[4];
    }
}
function update() {
    i++;
    if (i > 4) {
        if (opt == correct_ans) {
            count++;
        }
       document.getElementById('questionid').innerHTML = "Thank You!";
       document.getElementById('questionid').setAttribute("style",
       "font-size:100px ; text-alignment:center; padding-top:100px ;font-family: 'Lora', serif; ");
        document.getElementById('last').innerHTML = "You Score " + count + " out of 5";
        document.getElementById('last').setAttribute("style",
       "font-size:70px ; text-alignment:center; margin-top:100px; padding-top:50px; font-family: 'Abhaya Libre', serif;");
        scorevalue.style.display='none';
        Submit.style.display ='none';
    }
}