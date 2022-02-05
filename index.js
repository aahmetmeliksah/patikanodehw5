/*
createServer metodunu kullanacağız.
index, hakkimda ve iletisim sayfaları oluşturalım.
Sayfalara içerik olarak xxx sayfasına hoşgeldiniz şeklinde h2 başlıkları yazdıralım.
port numarası olarak 5000'i kullanalım.
Kolay gelsin.
*/
const http = require("http");

http
  .createServer((req, res) => {
    let url = req.url;
    if (url === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Index</h2>");
    } else if (url === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>About me</h2>");
    } else if (url === "/contact") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("<h2>Hire me</h2>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("<h2>The page that you're looking for does not exist</h2>");
    }

    res.end();
  })
  .listen(5000, () => {
    console.log("Server started on port 5000");
  });
