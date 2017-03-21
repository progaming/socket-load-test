var net = require('net');
var delayed = require('delayed');

var address = '128.199.66.43';
var port = 47240;
var connection = 3000;
var count = 0;

for(var i = 0; i < connection; i++)
{
    delayed.delay(() => { 
        var client = new net.Socket();
        client.connect(port, address, () => {
            count++;
            console.log('Connected for: ' + count);
            client.on('error', err => {
                client.write('err: ' + err);
            });
        })
    }, 100 * i);
}