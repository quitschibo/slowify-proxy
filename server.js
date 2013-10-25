var http = require('http'),
    httpProxy = require('http-proxy');

// --- Configuration section ---

// The server we want to call
var host = 'localhost';
var port = '8080';
var protocol = 'http'

// Proxy configuration
var proxyPort = 18080;

// Delay time for all requests not handled by the delay section
defaultTimeout = 0;

// --- End of configuration section ---

//
// Create the slowify proxy.
//
httpProxy.createServer(function (req, res, proxy) {
    //
    // Buffer the request so that `data` and `end` events
    // are not lost during async operation(s).
    //
    var buffer = httpProxy.buffer(req);

    // Set default timeout for all other request (NOT defined in delay section)
    var timeout = defaultTimeout;

    //
    // --- Delay section ---
    //
    // Set delay for different paths
    if (req.url.indexOf("/test") != -1) {
        timeout = 1000;
    }
    //
    // --- End of delay section ---
    //

    //
    // Wait until delegating the request.
    //
    setTimeout(function () {
            proxy.proxyRequest(req, res, {
                protocol: protocol,
                host: host,
                port: port,
                buffer: buffer
            });
        },
        // this is the delay
        timeout);

}).listen(proxyPort);
