
window.onload = () => {
    reloadAdvice();
}

var DiceButton = document.getElementsByClassName("DiceGenerator")
DiceButton[0].addEventListener("click", function() {
    reloadAdvice();
})

function reloadAdvice() {

    fetch(' https://api.adviceslip.com/advice').then(response => {
        return response.json();
    }).then(adviceData => {
        var AdviceId = adviceData.slip.id;
        var AdviceText = adviceData.slip.advice;
        document.getElementsByClassName("AdviceID")[0].innerText = `ADVICE #${AdviceId}`;
        document.getElementsByClassName("AdviceText")[0].innerText = `"${AdviceText}"`
    })
}