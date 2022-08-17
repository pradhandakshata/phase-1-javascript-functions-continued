// code your solution here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!`;
}

function mondayWork (mondayactivity = "go to the office") { 
    return `This Monday, I will ${mondayactivity}.`;
}
function wrapAdjective (hi = "*"){
    return function (how = "special"){
        return `You are ${hi}${how}${hi}!`;
    }
}