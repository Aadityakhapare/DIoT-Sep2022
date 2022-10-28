let http = require("http")  //http is a core module

function process_req(req, resp){

   let d1 = new Date();

   let str = ""
   str += "<html><body bgcolor='lightgreen'>"
   str += "<h1>Hello from Node Server</h1>";
   str += "<h3>Today is " + d1.toString() + "</h3>";
   str += "</body></html>"

   let size = str.length;

   resp.writeHead(200, {
      'Content-length': size,
      'Content-type' : 'text/html'
   });

   resp.write(str);
   resp.end();

}


let server = http.createServer(process_req)

server.listen(9999,"127.0.0.1")
console.log("Server is running on http://127.0.0.1:9999")