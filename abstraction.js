module.exports = function (options) {
    var init = {}

    // Send one SMS
  this.add({ role: "employee", cmd: "add" }, (msg, respond) => {
    this.make("employee").data$(msg.data).save$(respond);
  });


  //Read pending SMS
  this.find({ role: "employee", cmd: "get" }, (msg, respond) => {
    this.make("employee").load$(msg.id, respond);
  });

  // Send an email

    // Send a push notification

    //Get a list of pending emails

    //Get a list of pending push notifications

    return init;
};