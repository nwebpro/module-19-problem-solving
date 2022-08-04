/*
5) You are in a hurry to go to your school on time. But when you are crossing the road, the traffic signal is red coloured. In this situation, if you try to cross the road, you may be in danger. If you notice a yellow coloured traffic signal, you should stop. If you notice a green coloured traffic signal, you should cross the road. So write a JS code, where there is a variable called signal. Its value can be green, yellow, or red & we will get different activities as output depending on the variable. So, hurry up.
*/

// If Else Statement
var signal = 'green';
if(signal === 'red'){
    console.log('If you try to cross the road, you may be in danger.');
}else if(signal === 'yellow'){
    console.log('If you notice a yellow colored traffic signal, you should stop.');
}else if(signal === 'green'){
    console.log('If you notice a green coloured traffic signal, you should cross the road.');
}else{
    console.log('Hurry got to school!');
}

// Switch Statement
switch(signal){
    case 'red':
        console.log('If you try to cross the road, you may be in danger.');
        break;
    case 'yellow':
        console.log('If you notice a yellow colored traffic signal, you should stop.');
        break;
    case 'green':
        console.log('If you notice a green coloured traffic signal, you should cross the road.');
        break;
    default:
        console.log('Hurry got to school!');
}