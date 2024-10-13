var mins_html = document.getElementById('min')
var seconds_html = document.getElementById('sec')
var milliSeconds_html = document.getElementById('ms')
var start_btn = document.getElementById('start')

var second = 0
var minute = 0
var milliSeconds = 0

var watchInterval;

function start(){
    watchInterval = setInterval(function(){
        milliSeconds++
        if(milliSeconds >= 99){
            second++
            milliSeconds = 0
        }
        if(second >= 59){
            minute++
            second = 0
        }
        milliSeconds_html.innerText = milliSeconds
        seconds_html.innerText = second < 10 ? '0' +second : second
        mins_html.innerText = minute < 10 ? '0' +minute : minute
        start_btn.disabled = true

    }, 10)
}
function stop(){
    clearInterval(watchInterval)
    start_btn.disabled = false
}
function reset(){
    clearInterval(watchInterval)
    milliSeconds = 0
    second = 0
    minute = 0
    mins_html.innerText = 0
    seconds_html.innerText = 0
    milliSeconds_html.innerText = 0
    start_btn.disabled = false
}