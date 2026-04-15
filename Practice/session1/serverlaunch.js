const http = require("node:http");
const PORT = 8089;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/') {
        res.end("Welcome to the Home Page");
    } 
    else if (url === '/fitness') {
        const fitnessData = {
            name: "Shavali Badvel",
            age: 25,
            goals: ["lose weight", "build muscle"]
        };
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(fitnessData));
    } 
    else {
        res.statusCode = 404;
        res.end("Page Not Found");
    }
});

server.listen(PORT, () => {
    console.log(`Server is back online at http://localhost:${PORT}`);
});