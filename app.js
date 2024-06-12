const http = require('http'); // הרשאת יבוא מודול
const hostname = '127.0.0.1'; //
const port = 8000;

const server = http.createServer((req, res) => { //כך ניצור את השרת
 res.statusCode = 200; // השרת יחזיר סטטוס 'טוב'
 res.setHeader('Content-Type', 'text/plain'); //כותרת לשרת
 res.end("hello to grafikol"); //סוף קריאת השרת
});
server.listen(port, hostname, () => { // יצירת האזנה לקריאות לשרת הנ"ל שנוצר
 console.log(`Server running at http://${hostname}:${port}/`); 
});
