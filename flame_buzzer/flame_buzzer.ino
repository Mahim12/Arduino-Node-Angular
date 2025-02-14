#define FLAME_SENSOR A5  // Analog pin A5 for flame sensor
#define BUZZER 11        // Digital pin 11 for buzzer

void setup() {
  Serial.begin(9600); // Start Serial Monitor
  pinMode(FLAME_SENSOR, INPUT);
  pinMode(BUZZER, OUTPUT);
  digitalWrite(BUZZER, LOW); // Ensure buzzer is OFF initially
}

void loop() {
  int sensorValue = analogRead(FLAME_SENSOR); // Read flame sensor data
  Serial.print("Flame Sensor Value: ");
  Serial.println(sensorValue);

  if (sensorValue < 1023) { // 🔥 Fire detected (adjust threshold as needed)
    digitalWrite(BUZZER, HIGH); // 🚨 Turn ON buzzer
    Serial.println("🔥 Fire detected! Buzzer ON!");
  } else {
    digitalWrite(BUZZER, LOW); // ✅ No fire, turn OFF buzzer
  }

  delay(500); // Read every 500ms
}
