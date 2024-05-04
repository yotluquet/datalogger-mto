datalogger.onLogFull(function () {
    enregistrement = false
    basic.showLeds(`
        # # # # #
        . # . # .
        # # # # #
        . # . # .
        # # # # #
        `)
})
input.onButtonPressed(Button.A, function () {
    enregistrement = true
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # # # . .
        `)
    datalogger.deleteLog(datalogger.DeleteType.Full)
})
input.onButtonPressed(Button.B, function () {
    enregistrement = false
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
let enregistrement = false
enregistrement = false
datalogger.setColumnTitles(
"température",
"luminosité"
)
loops.everyInterval(60000, function () {
    if (enregistrement) {
        datalogger.log(
        datalogger.createCV("luminosité", input.lightLevel()),
        datalogger.createCV("température", input.temperature())
        )
    }
})
