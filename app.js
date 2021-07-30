


function calculateBMI()
{

    var Weight=document.getElementById("weightinkg").value;

    var Height =document.getElementById("heightincm").value;

    var bmi = (Weight/(Height/100*Height/100));

    bmi = bmi.toFixed(2);

document.getElementById("yourbmi").innerHTML="Your BMI is " +bmi;


if(bmi<18.5)
{
    document.getElementById("bmicompliment").innerText= "You are  Under weighted."
}

else if(bmi>=18.5 || bmi>=25)
{
    document.getElementById("bmicompliment").innerText= "You are Normal weighted."
}

else
{
    document.getElementById("bmicompliment").innerText= "You are Over weighted."
}

}
