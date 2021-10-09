const http = require('http');
const url = require('url');
const PORT = 9000;

http.createServer((req,res) => {
    const requesturl = new url.URL(req.protocol + "://" + req.headers.host + req.url);
    const params = new URLSearchParams(requesturl.searchParams);
    const pathname = requesturl.pathname;
    res.writeHead(200, {'Content-Type': 'text/html'});
    const a = parseInt(params.get("a"));
    const b = parseInt(params.get("b"));
    if(Number.isNaN(a) || Number.isNaN(b))
    {
        res.writeHead(400, {"Content-Type": "text/html"});
        res.write("Bad request");
        res.end();
        return;
    }
    switch(pathname)
    {
        case "/add":
        {
            res.write(`a+b=${a + b}`);
            break;
        }
        case "/sub": {
            res.write(`a-b=${a - b}`);
            break;
        }
        case "/mul":
        {
            res.write(`a*b=${a * b}`);
            break;
        }
        case "/div":
        {
            if(b === 0)
            {
                res.write(`divison by zero (values are ${a} and ${b})`)
            }
            else
            {
                res.write(`a/b=${a/b}`);
            }
            break;
        }
        default:
        {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write(`The requested url  <<${pathname}>> was not found on this server`)
            break;
        }
    }
    res.end();
}).listen(PORT);