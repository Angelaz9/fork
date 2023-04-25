input.onButtonPressed(Button.A, function () {
    comment.comment("sets forklift to \"down\" position")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
})
input.onButtonPressed(Button.AB, function () {
    comment.comment("moves forward for 1 second")
    wuKong.setAllMotor(20, 20)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    comment.comment("sets the fork to the \"Up\" position")
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    comment.comment("moves backwards for one second")
    wuKong.setAllMotor(-20, -20)
    basic.pause(1000)
    wuKong.stopAllMotor()
})
basic.showIcon(IconNames.Rollerskate)
