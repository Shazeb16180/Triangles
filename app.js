function checkAngle(){
    var txt1=parseInt(document.querySelector("#txt1").value);
    var txt2=parseInt(document.querySelector("#txt2").value);
    var txt3=parseInt(document.querySelector("#txt3").value);
    var sum=txt1+txt2+txt3;
    if(txt1>0&&txt2>0&&txt3>0){
    if(sum==180){
        document.querySelector("#result").innerHTML="Congrats It's a Triangle";
    }
    else{
        document.querySelector("#result").innerHTML="Oops It's  not a Triangle";
    }
 }
 else{
    document.querySelector("#result").innerHTML="Enter Valid Angles";
 }
}
function getHypo(){
    var txt1=parseInt(document.querySelector("#txt1").value);
    var txt2=parseInt(document.querySelector("#txt2").value);
    var txt3=Math.sqrt(Math.pow(txt1,2)+Math.pow(txt2,2));
    document.querySelector("#result").innerHTML="c="+txt3;
}
var checkedOne="";
function handleClick(radio){
    var selected1=["#a","#b","#c"];
    var result="#"+radio.value;
    checkedOne=result;
    for(var x=0;x<selected1.length;x++){
        if(selected1[x]==result){
            document.querySelector("#"+radio.value).style.display="block";
        }
        else{
            document.querySelector(selected1[x]).style.display="none";
        }
    }
    
}
function calcArea(){
    var area;
    console.log("Enter"+checkedOne);
    if(checkedOne=="#a"){
        var txt1=parseInt(document.querySelector("#a1").value);
        var txt2=parseInt(document.querySelector("#a2").value);
         area=0.5*txt1*txt2;
         console.log(area)
         document.querySelector("#error").style.display="none";
         document.querySelector("#result").innerHTML="Area is:"+area;
    }
    else if(checkedOne=="#b"){
        var s=0;
        var txt1=parseInt(document.querySelector("#b1").value);
        var txt2=parseInt(document.querySelector("#b2").value);
        var txt3=parseInt(document.querySelector("#b3").value);
        if((txt1+txt2)>txt3 && (txt2+txt3)>txt1 && (txt1+txt3)>txt2){
             s=(txt1+txt2+txt3)/2;
             area=Math.sqrt(s*(s-txt1)*(s-txt2)*(s-txt3));
             document.querySelector("#error").style.display="none";
             document.querySelector("#result").innerHTML="Area is:"+area;
        }
        else{
            document.querySelector("#error").style.display="block";
        }
    }
    else{
        var txt1=parseInt(document.querySelector("#c1").value);
        var txt2=parseInt(document.querySelector("#c2").value);
        var txt3=parseInt(document.querySelector("#c3").value);
        area=(txt3*txt3*Math.sin(txt1*Math.PI/180))/2;
        document.querySelector("#error").style.display="none";
        document.querySelector("#result").innerHTML="Area is:"+area;

    }
    if(checkedOne.length==0){
        console.log("empty")
        document.querySelector("#result").innerHTML="Select One of the Option";

    }

    
}
var quizUser=[];
var score1=0;
var quizAnswer=["a", "b", "a", "a", "a", "b", "b"];
var i=0;
function quizhandleClick(e){
    console.log("Entered counter");
        quizUser[i]=e.value;
        i++;
}
function quizCheck(){
    console.log(quizUser);
    console.log(quizAnswer);
    for(var t=0;t<quizUser.length;t++){
        console.log("enter for");
        if(quizAnswer[t]==quizUser[t]){
            console.log("if")
            score1=score1+1;
        }
        else{
            console.log('else');
            score=100;
        }
    }
    console.log(score1);
    document.querySelector("#result2").innerHTML="Score is:"+score1;
    document.querySelector("#bt").style.display="none";
}