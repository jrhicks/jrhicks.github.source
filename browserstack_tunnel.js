var BrowserStackTunnel = require('browserstacktunnel-wrapper');

var browserStackTunnel = new BrowserStackTunnel({
  key: process.env.BROWSERSTACK_KEY,
  hosts: [{
    name: 'localhost',
    port: 8080,
    sslFlag: 0
  }], // optionally set hosts
  v: true, // optionally set the -v (verbose) option
  force: true, // optionally set the -force option
  forcelocal: true, // optionally set the -forcelocal option
  onlyAutomate: false, // optionally set the -onlyAutomate option
});

browserStackTunnel.start(function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('Tunnel Started');


    // browserStackTunnel.stop(function(error) {
    //  if (error) {
    //    console.log(error);
    //  } else {
    //    console.log('Tunnel Stopped');
    //  }
    // });
  }
});
