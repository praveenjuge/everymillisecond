const Influx = require('influx');
const os = require('os');
const influx = new Influx.InfluxDB({
 host: '192.168.31.98',
 database: 'machinedb',
 schema: [
   {
     measurement: 'gearSpeed',
     fields: {
       duration: Influx.FieldType.FLOAT
     },
     tags: [
       'host'
     ]
   }
 ]
})

var i = 0;
setInterval(function() {
  influx.writePoints([
    {
      measurement: 'gearSpeed',
      tags: { host: "machine1" },
      fields: { duration: Math.random() * 2.1 },
    }
  ])
  i += 1;
}, 5);

console.log(i);