const { Board, Led } = require("johnny-five");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); 
app.use(express.json()); 

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const board = new Board({ port: "/dev/tty.usbmodem14201" });

class TrafficController {
  constructor() {
    this.leds = {}; // Store LED objects
    this.colorPins = {
      "red": 11,
      "yellow": 12,
      "green": 10
    };
  }

  setupLeds() {
    Object.keys(this.colorPins).forEach(color => {
      this.leds[color] = new Led(this.colorPins[color]);
    });
  }

  blinkLed(color) {
    if (this.leds[color]) {
      console.log(`Blinking ${color} light`);
      this.leds[color].on();
      setTimeout(() => this.leds[color].off(), 2000); // Turns off after 2 seconds
    } else {
      console.log("Invalid color received");
    }
  }
}

let trafficController;

board.on("ready", () => {
  console.log("Arduino is ready!");
  trafficController = new TrafficController();
  trafficController.setupLeds(); // Initialize LEDs

  // API to receive traffic light selection from Angular
  app.post("/send-message", (req, res) => {
    console.log("Received from Angular:", req.body.message);
    trafficController.blinkLed(req.body.message); // Call class method
    res.json({ response: "Message received by Node.js!" });
  });
});
