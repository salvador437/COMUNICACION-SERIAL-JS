const { SerialPort, ReadlineParser  } = require('serialport')

const port = new SerialPort({
  path: 'COM5',
  baudRate: 9600,
  
})


port.open(function (err) {
  if (err) {
    return console.error('Error abriendo puerto: ', err.message)
    port.close(console.log("puerto cerrado"))
  }
  
})



const parser = new ReadlineParser()
port.pipe(parser)
parser.on('data',  (line) => {
  console.log(line)
})





