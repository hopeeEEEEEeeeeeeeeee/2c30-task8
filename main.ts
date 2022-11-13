input.onButtonPressed(Button.A, function () {
    if (input.compassHeading() == 30 || input.compassHeading() > 330) {
        basic.showString("\"N\"")
    } else {
        if (input.compassHeading() == 60 || input.compassHeading() > 120) {
            basic.showString("\"E\"")
        } else {
            if (input.compassHeading() == 150 || input.compassHeading() > 210) {
                basic.showString("\"S\"")
            } else {
                if (input.compassHeading() == 240 || input.compassHeading() > 300) {
                    basic.showString("\"W\"")
                } else {
                    basic.showIcon(IconNames.Heart)
                }
            }
        }
    }
})
