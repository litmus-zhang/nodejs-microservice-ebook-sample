var http = require("http");
var seneca = require("seneca")();

var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World");
});

// seneca.add({role: 'math', cmd: 'sum'}, function (msg, respond) {
//     var product = msg.left + msg.right
//     respond(null, {answer: product})
// })

// seneca.add({role: 'math', cmd: 'product', left: 1, right: 2}, function (msg, result) {
//     var product = msg.left * msg.right
//     respond(null, {answer: product})
// })

// seneca.act({role: 'math', cmd: 'sum',left: 1, right: 2}, console.log)
// seneca.act({role: 'math', cmd: 'product',left: 3, right: 4}, console.log)
// seneca.add({ role: "math", cmd: "sum" }, function (msg, respond) {
//   var sum = msg.left + msg.right;
//   respond(null, { answer: sum });
// });
// seneca.add({ role: "math", cmd: "product" }, function (msg, respond) {
//   var product = msg.left * msg.right;
//   respond(null, { answer: product });
// });
// seneca.act({ role: "math", cmd: "sum", left: 1, right: 2 }, console.log);
// seneca.act({ role: "math", cmd: "product", left: 3, right: 4 }, console.log);

// seneca.add({ component: "greeter" }, (msg, respond) => {
//   respond(null, { message: "Hello " + msg.name });
// });

// seneca.act({ component: "greeter", name: "John" }, (err, result) => {
//   if (err) return console.log(err);
//   console.log(result.message);
// });

seneca.add({cmd: "wordcount"}, (msg, respond)=>{
    var length = msg.phrase.split(" ").length;
    respond(null, {words: length});
})

seneca.add({cmd: "wordcount", skipShort: true}, (msg, respond)=>{
    var length = msg.phrase.split(" ").filter((word)=>word.length > 3).length;
    respond(null, {words: length});
})


seneca.act({cmd: "wordcount",skipShort: true ,phrase: "Hello World This is a seneca"}, (err, result)=>{
    if(err) return console.log(err);
    console.log(result.words);
})

server.listen(8000, function () {
  console.log("Server listening on port 3000");
});
