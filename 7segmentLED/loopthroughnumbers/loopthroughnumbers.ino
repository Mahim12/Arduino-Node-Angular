// Define segment connections
int segmentPins[] = {2, 3, 4, 5, 6, 7, 8}; // a, b, c, d, e, f, g

// Patterns for displaying digits (common cathode setup)
const byte digitPatterns[10][7] = {
  {1, 1, 1, 0, 1, 1, 1}, // 0
  {0, 0, 1, 0, 1, 0, 0}, // 1
  {1, 1, 0, 1, 1, 1, 0}, // 2
  {0, 1, 1, 1, 1, 1, 0}, // 3
  {0, 0, 1, 1, 1, 0, 1}, // 4
  {0, 1, 1, 1, 0, 1, 1}, // 5
  {1, 1, 1, 1, 0, 1, 1}, // 6
  {0, 0, 1, 0, 1, 1, 0}, // 7
  {1, 1, 1, 1, 1, 1, 1}, // 8
  {0, 1, 1, 1, 1, 1, 1}  // 9
};

bool isCommonAnode = false;  // Set to true if using common anode

void setup() {
  for (int i = 0; i < 7; i++) {
    pinMode(segmentPins[i], OUTPUT);
  }
}

void loop() {
  for (int digit = 0; digit < 10; digit++) { // Loop from 0 to 9
    displayNumber(digitPatterns[digit]);  // Show the current number
    delay(2000); // Wait for 2 seconds before showing the next number
  }
}

// Function to display a number on the 7-segment display
void displayNumber(const byte num[7]) {
  for (int i = 0; i < 7; i++) {
    digitalWrite(segmentPins[i], isCommonAnode ? !num[i] : num[i]);
  }
}
