function minimal_plugin(options) {
  console.log(options);
}

require("seneca")().use(minimal_plugin, { foo: "bar" });

module.exports = function (options) {
  this.add({ role: "employee", cmd: "add" }, (msg, respond) => {
    this.make("employee").data$(msg.data).save$(respond);
  });

  this.find({ role: "employee", cmd: "get" }, (msg, respond) => {
    this.make("employee").load$(msg.id, respond);
  });
};

var seneca = require("seneca")().use("employee-storage");
var employee = {
  name: "John",
  surname: "Doe",
  position: "Developer",
};

function add_employee() {
  seneca.act({ role: "employee", cmd: "add", data: employee }, (err, msg) => {
    console.log(msg);
  });
}

add_employee();
