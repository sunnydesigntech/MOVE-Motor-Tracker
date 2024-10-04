// Test script for MOVE Motor Tracker

input.onButtonPressed(Button.A, function () {
    // Reset the motor rotation counter
    moveMotorTracker.resetRotationCount()
    basic.showString("Reset")
})

input.onButtonPressed(Button.B, function () {
    // Display the current motor rotation count
    let rotations = moveMotorTracker.getRotationCount()
    basic.showNumber(rotations)
})

basic.forever(function () {
    // Run the motor and track the rotations
    moveMotorTracker.trackMotorRotations()
    basic.pause(1000)
    basic.clearScreen()
})
