slowify-proxy
=============
[![Dependency Status](https://gemnasium.com/quitschibo/slowify-proxy.png)](https://gemnasium.com/quitschibo/slowify-proxy)

A http proxy for slowing down request. Nice for testing. ;)
A core feature is, that you can configure different delay times for different paths.

# How to configure
Just fill out the [configuration section](https://github.com/quitschibo/slowify-proxy/blob/master/server.js#L4:L17)

### Host configuration
This is the configuration for the server we want to proxy to. Requests to this host will be delayed.
`host: The host we want to call without protocol or port (e.g. www.example.com)`
`port: The port of the host we want to call (e.g. 80)`
`protocol: The protocol of the server we want to call (e.g. http or https)`

### Proxy configuration
`proxyPort: The port of the proxy. MUST NOT be the same as your server you to finally call`

### Delay time configuration
You can configure explicit paths in [this section](https://github.com/quitschibo/slowify-proxy/blob/master/server.js#L32:L41).
`defaultTimeout: This is delay time for all requests, NOT explicitly configured in the "delay section".`

# How to run
```
// clone repo and change directory
git clone https://github.com/quitschibo/slowify-proxy.git && cd slowify-proxy

// install dependencies
npm install

// run server
npm start
```
# License
[MIT License](https://github.com/quitschibo/slowify-proxy/blob/master/LICENSE)
