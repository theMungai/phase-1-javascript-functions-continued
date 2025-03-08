// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun()

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}
mondayWork()

function wrapAdjective(outerVar = "*"){
    return function(innerVar = "special"){
        return `You are ${outerVar}${innerVar}${outerVar}!`;

    }
}
wrapAdjective("%")("a dedicated programmer");