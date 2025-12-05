input.onGesture(Gesture.Shake, function () {
    steps += 2
    basic.showNumber(steps)
    datalogger.log(datalogger.createCV("steps", 1))
})
let steps = 0
steps = 0
