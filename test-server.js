// Quick test script to check if server is running
const http = require('http');

const testUrls = [
  'http://localhost:5000/test',
  'http://localhost:5000/api/enquiries',
  'http://localhost:5000/'
];

testUrls.forEach(url => {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => { data += chunk; });
    res.on('end', () => {
      console.log(`✅ ${url} - Status: ${res.statusCode}`);
      if (res.statusCode === 200) {
        console.log(`   Response: ${data.substring(0, 100)}...`);
      }
    });
  }).on('error', (err) => {
    console.log(`❌ ${url} - Error: ${err.message}`);
  });
});


