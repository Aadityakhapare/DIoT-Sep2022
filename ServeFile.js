let http = require("http")  //http is a core module
let fs = require("fs")

function process_req(req, resp){
   fs.readFile("bigFile.txt", (err, data) => {
      if(err) console.log(err);
      else{
         let size = data.toString().length

         resp.writeHead(200, {
            'Content-length': size,
            'Content-type' : 'text/plain'
         });
         resp.write(data.toString());
         resp.end();
      }

   })
}
let server = http.createServer(process_req)
server.listen(9999,"127.0.0.1")
console.log("Server is running on http://127.0.0.1:9999")