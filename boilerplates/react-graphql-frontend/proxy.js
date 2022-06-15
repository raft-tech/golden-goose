const https = require('https');
const express = require('express');

const app = express();

app.use('/graphql', (req, res) => {
  // Clear request origination headers
  delete req.headers.referer;
  delete req.headers.host;
  delete req.headers.origin;

  // Replace request origination with target domain
  const headers = {
    referer: 'https://staging.selfdetermine.net/login',
    ...req.headers,
  };

  // Create a request object aimed at our target destination
  const remoteReq = https.request('https://staging.selfdetermine.net/graphql', {
    method: req.method,
    headers,
  });

  // Forward original request using our modified request object
  req.pipe(remoteReq);

  // Redirect response to original response target
  remoteReq.on('response', (remoteRes) => {
    res.set(remoteRes.headers);
    remoteRes.pipe(res);
  });
});

// Serve static assets from our build directory
app.use(express.static('./build'));

// Enable configuration of listening port
const PORT = process.env.PORT || 8080;

// Start listening for incoming traffic on configured port
// eslint-disable-next-line no-console
app.listen(PORT, () => console.log('Listening on port ', PORT));
