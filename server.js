const express = require('express');
const app = express();
const PORT = 3000;

const httpStatusCodes = {
    200: "OK: The request has succeeded.",
    201: "Created: The request has been fulfilled and resulted in a new resource.",
    204: "No Content: The request has succeeded, but no response body is sent.",
    400: "Bad Request: The server could not understand the request.",
    401: "Unauthorized: Authentication is required to access the resource.",
    403: "Forbidden: The server refuses to authorize the request.",
    404: "Not Found: The requested resource could not be found.",
    405: "Method Not Allowed: The HTTP method is not supported.",
    429: "Too Many Requests: User has exceeded rate limits.",
    500: "Internal Server Error: The server encountered an unexpected condition.",
    502: "Bad Gateway: The server received an invalid response from an upstream server.",
    503: "Service Unavailable: The server is overloaded or under maintenance.",
    504: "Gateway Timeout: The server did not receive a timely response."
};

app.get('/status-info', (req, res) => {
    const statusCode = parseInt(req.query.code);
    if (httpStatusCodes[statusCode]) {
        res.json({ status: statusCode, message: httpStatusCodes[statusCode] });
    } else {
        res.status(400).json({ status: 400, message: "Invalid status code" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/assistant/greet', (req, res) => {
  const name = req.query.name;
  if (name) {
      res.json({ status: 200, message: `Hello, ${name}! How can I assist you today?` });
  } else {
      res.status(400).json({ status: 400, message: "Missing name parameter" });
  }
});