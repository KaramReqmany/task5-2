let num;
let display=document.querySelector('.display');
let firstunit=document.querySelector('.from');
let secondunit=document.querySelector('.to');

function get(x){
    display.value+=x;

}

function convert()
{
    if (firstunit.value=='m'){
        if(secondunit.value=='km')
            display.value/=1000;
        if(secondunit.value=='cm')
            display.value*=100;}
    if (firstunit.value=='km'){
        if(secondunit.value=='m')
            display.value*=1000;
        if(secondunit.value=='cm')
            display.value*=100000;}
    if (firstunit.value=='cm'){
        if(secondunit.value=='m')
            display.value/=100;
        if(secondunit.value=='km')
            display.value/=100000;}
       
}