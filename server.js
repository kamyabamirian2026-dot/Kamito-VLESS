const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="fa" dir="rtl">
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>KAMITO VLESS</title>
      <style>
        body {
          background: #101014;
          color: white;
          font-family: Arial;
          text-align: center;
          padding: 40px 15px;
        }
        .panel {
          background: #202027;
          border: 1px solid #e32636;
          border-radius: 18px;
          padding: 25px;
          max-width: 400px;
          margin: auto;
        }
        h1 { color: #ed263b; }
      </style>
    </head>
    <body>
      <div class="panel">
        <h1>KAMITO VLESS</h1>
        <p>پنل مدیریت سرور</p>
        <p>سیستم با موفقیت اجرا شد.</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log("Kamito VLESS started on port " + PORT);
});
