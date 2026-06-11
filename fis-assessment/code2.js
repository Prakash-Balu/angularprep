var http = require('http'); 

http.createServer(function (request, result) {	

  result.writeHead(200, { 'Content-Type': 'text/html' });
  result.write('<div>');
  result.write('<h1 id="welcome">welcome</h1>');
  result.write('<input type="text" id="name">');

  result.write('<button onclick="addClient()">Add</button>');	

  result.write('</div>');
  result.write(`
    <script>
      function addClient(){
        var name = document.getElementById("name");
        var welcome = document.getElementById("welcome");
        var text = "welcome";
        welcome.innerHTML = text + name.value;
      }
    </script>
  `);

  return result.end();
}).listen(8080);