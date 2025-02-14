🚀 Arduino & Node.js Integration with Traffic Light, 7-Segment Display, and Flame Sensor
This project demonstrates Arduino and Node.js communication using the SerialPort and Johnny-Five libraries. The system consists of:

Traffic Light Control via LEDs (Red, Yellow, Green).
7-Segment Display for number representation.
Flame Sensor for fire detection with a buzzer alert.

⚙️ Technologies Used
Node.js (Express.js, Johnny-Five, SerialPort)
Arduino (C++)
Johnny-Five (JavaScript Robotics framework)
7-Segment Display
LEDs for Traffic Light
Flame Sensor & Buzzer

🚀 Getting Started

1️⃣ Prerequisites
Ensure you have:

Node.js & npm installed
Arduino IDE installed
Git installed for version control

2️⃣ Install dependencies:
npm install express serialport @serialport/parser-readline cors johnny-five

🔥 Fire Detection (Flame Sensor)
1️⃣ Upload flameSensor.ino to Arduino. 2️⃣ The buzzer will activate if fire is detected. 🚨 3️⃣ View flame sensor values in the Arduino Serial Monitor.


🛠 API Endpoints
Method	Endpoint	Description
POST	/send-message	Send LED color (red, yellow, green) to Arduino
POST	/send-to-arduino	Send numbers (one, two, three) to display
GET	/flame-status	Retrieve flame sensor readings


👨‍💻 Author
Mahim Dhungel
