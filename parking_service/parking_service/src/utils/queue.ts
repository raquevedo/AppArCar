
export function publishMessageIntoQueue(msg:any, queue:string){
    var amqp = require('amqplib/callback_api');
    
    amqp.connect('amqp://guest:guest@rabbitmq:5672/%2F', function(error0:any, connection:any) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1:any, channel:any) {
        if (error1) {
        throw error1;
        }

        channel.assertQueue(queue, {
        durable: false
        });

        channel.sendToQueue(queue, Buffer.from(msg));

    });
    });
}