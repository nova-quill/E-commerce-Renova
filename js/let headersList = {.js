let headersList = {
 "server": "openresty/1.13.6.1",
 "date": "Thu, 29 Feb 2024 15:05:58 GMT",
 "content-type": "text/html",
 "transfer-encoding": "chunked",
 "content-encoding": "gzip",
 "connection": "close"
}

let response = await fetch("https://Inkd.in/de-9aqmk");//, { 
  // method: "GET",
  // headers: headersList
// });

let data = await response.json();
console.log(data);
