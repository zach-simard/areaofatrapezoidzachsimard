game.splash("\"Let's calculate the area of a trapezoid!\"")
let base1 = game.askForNumber("\"What is the length of the first base (cm)?\"")
let base2 = game.askForNumber("\"What is the length of the second base (cm)?\"")
let height = game.askForNumber("\"What is the height of the trapezoid (cm)?\"")
let area = (base1 + base2) / 2 * height
game.splash("The area of a trapezoid with base1 of " + base1 + " cm and base2 of  " + base2 + " cm and height of " + height + "  cm and will have an area of " + area + " cm^2")
