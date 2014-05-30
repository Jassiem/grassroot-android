var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://jassiemmoore:@localhost/postgres";

var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT registration_id FROM devices', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows);
    return;
    
		var gcm = require('node-gcm');
		var message = new gcm.Message();
		 
		//API Server Key
		var sender = new gcm.Sender('AIzaSyAJ3isLmgf6jG4yKrO1MLpo2zxE2zY1lvo');
		var registrationIds = [];
		 
		// Value the payload data to send...
		message.addData('message',"Bank account statement just like I'm ready for early retirement.");
		message.addData('title','Drizzy Sample' );
		message.addData('msgcnt','3'); // Shows up in the notification in the status bar
		message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
		//message.collapseKey = 'demo';
		//message.delayWhileIdle = true; //Default is false
		message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
		 
		// At least one reg id required
		registrationIds.push('APA91bGtOgd8hxMfwRBh5iXQEMOv9kMyehglkzd7fpz53_mY3ILFhNp0PW7i9x4-_IOCmrJBFmyZd8IuX76VAYsne7LeTHLHmaZQscR0CwwzYGKsDZNYLZYxw9PjDHAKTeLec5QEvYq7Dinwazry9CmQNQxzeeJkMQ');
		 
		/**
		 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
		 */
		sender.send(message, registrationIds, 4, function (result) {
		    console.log(result);
		});


    client.end();
  });
});
