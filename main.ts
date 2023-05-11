let t = 0
basic.forever(function () {
    t = input.lightLevel()
    if (t >= 128) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
    if (t <= 128) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # .
            # # . . .
            # . . . .
            `)
    }
})
