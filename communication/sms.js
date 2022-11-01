module.exports = function (options) {
    this.add({channel: "sms", action: "send"}, (msg, respond) => {
        //Send SMS
        respond(null, {status: "ok"});
    })
    this.add({channel: "sms", action: "pending"}, (msg, respond) => {
        //Get SMS
        respond(null, {status: "ok"});
    })

    this.add({channel: "sms", action: "read"}, (msg, respond) => {
        //Mark SMS as read
        respond(null, {status: "ok"});
    })
}