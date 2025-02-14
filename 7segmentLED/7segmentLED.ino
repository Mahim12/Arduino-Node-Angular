// Define segment connections
int segmentPins[] = {2, 3, 4, 5, 6, 7, 8}; // a, b, c, d, e, f, g

// Pattern for displaying "2" (common cathode setup)
const byte zero[7] = {1,1,1,0,1,1,1};
const byte one[7] = {0,0,1,0,1,0,0};
const byte two[7] = {1, 1, 0, 1, 1, 1, 0};
const byte three[7] = {0, 1, 1, 1, 1, 1, 0}; 
const byte four[7] = {0, 0, 1, 1, 1, 0, 1};
const byte five[7] = {0,1,1,1,0,1,1}; 
const byte six[7] = {1,1,1,1,0,1,1}; 
const byte seven[7] = {0,0,1,0,1,1,0}; 
const byte eight[7] = {1,1,1,1,1,1,1}; 
const byte nine[7] = {0,1,1,1,1,1,1}; 


bool isCommonAnode = false;  // Set to true if using common anode

void setup() {
  Serial.begin(9600);  // Start serial communication
  for (int i = 0; i < 7; i++) {
    pinMode(segmentPins[i], OUTPUT);
  }
}
void loop() {
  if (Serial.available()) {
    String received = Serial.readStringUntil('\n'); // Read incoming data
    received.trim(); // Remove extra spaces/newlines
    received.toLowerCase(); // Convert to lowercase for consistency

    // ✅ Print received data to Serial Monitor
    Serial.print("Received: "); 
    Serial.println(received);

    // ✅ Debug: Check which number is being processed
    if (received == "one") {
      Serial.println("Displaying: 1");
      displayNumber(one);
    } else if (received == "two") {
      Serial.println("Displaying: 2");
      displayNumber(two);
    } else if (received == "three") {
      Serial.println("Displaying: 3");
      displayNumber(three);
    } else if (received == "four") {
      Serial.println("Displaying: 4");
      displayNumber(four);
    } else if (received == "five") {
      Serial.println("Displaying: 5");
      displayNumber(five);
    } else if (received == "six") {
      Serial.println("Displaying: 6");
      displayNumber(six);
    } else if (received == "seven") {
      Serial.println("Displaying: 7");
      displayNumber(seven);
    } else if (received == "eight") {
      Serial.println("Displaying: 8");
      displayNumber(eight);
    } else if (received == "nine") {
      Serial.println("Displaying: 9");
      displayNumber(nine);
    } else if (received == "zero") {
      Serial.println("Displaying: 0");
      displayNumber(zero);
    } else {
      Serial.println("Invalid input received!");
    }
  }
}


// Function to display a number on the 7-segment display
void displayNumber(const byte num[7]) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segmentPins[i], isCommonAnode ? !num[i] : num[i]);
  }
}