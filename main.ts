radio.setFrequencyBand(0)
radio.setGroup(1)
radio.setTransmitPower(7)



let zprava:number

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    zprava = 2
    poslat(zprava)
})
input.onButtonPressed(Button.A, function() {
    zprava = 1
    poslat(zprava)
})
input.onButtonPressed(Button.B, function () {
    zprava = 3
    poslat(zprava)

})
function poslat(zprava:number){

radio.sendNumber(zprava)

}