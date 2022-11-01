module.exports = function(options){
    this.add({channel: "post", action: "send"}, (msg, respond) => {
        //Send post
        respond(null, {status: "ok"});
    })

    this.add({channel: "post", action: "pending"}, (msg, respond) => {
        //Get post
        respond(null, {status: "ok"});
    })

    this.add({channel: "post", action: "read"}, (msg, respond) => {
        //Mark post as read
        respond(null, {status: "ok"});
    })
}