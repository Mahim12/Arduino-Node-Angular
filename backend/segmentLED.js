const express = require('express');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const cors = require('cors');

const app = express();
const port = 3000;
const arduinoPortPath = '/dev/tty.usbmodem14101';

// Open serial port
const arduinoPort = new SerialPort({ path: arduinoPortPath, baudRate: 9600 });
const parser = arduinoPort.pipe(new ReadlineParser({ delimiter: '\n' }));

// Middleware
app.use(cors());
app.use(express.json());

// Log when serial port is opened
arduinoPort.on('open', () => {
  console.log('Arduino serial port opened');
  
  // Add delay to ensure Arduino is ready
  setTimeout(() => {
    console.log('Arduino is ready to receive data.');
  }, 3000);
});

// Handle serial port errors
arduinoPort.on('error', (err) => {
  console.error('Error on Arduino serial port:', err);
});

// Register the route outside of serial event
app.post('/send-to-arduino', (req, res) => {
  const number = req.body.result;

  if (!number || typeof number !== 'string') {
    console.error('Invalid input:', number);
    return res.status(400).json({ error: 'Invalid input' });
  }

  console.log('Received from Angular:', number);

  arduinoPort.write(number + '\n', (err) => {
    if (err) {
      console.error('Error writing to Arduino:', err);
      return res.status(500).json({ error: 'Error writing to Arduino' });
    }

    console.log('Sent to Arduino:', number);
    res.json({ message: 'Data sent to Arduino' });
  });
});

// Log incoming serial data (optional)
parser.on('data', (data) => {
  console.log('Data from Arduino:', data);
});

// Start the Express server
app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});
