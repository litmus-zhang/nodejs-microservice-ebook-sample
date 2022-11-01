module.exports = function (options){
    //Send an email
    this .add({channel: 'email', action: 'send'}, (msg, respond) => {
        //Send email
        respond(null, {status: 'ok'})
    })

    //get pending mail

    this.add({channel: 'email', action: 'pending'}, (msg, respond) => {
        //Get email
        respond(null, {status: 'ok'})
    })

    //Mark email as read
    this.add({channel: 'email', action: 'read'}, (msg, respond) => {
        //Mark email as read
        respond(null, {status: 'ok'})
    })
}