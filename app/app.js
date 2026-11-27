const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (req.url === "/health") {
        return res.end(JSON.stringify({ status: "healthy" }));
    }

    res.end(JSON.stringify({
        message: "Hello from my DevOps GitOps project!",
        status: "Running",
        version: "1.1"
    }));
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
