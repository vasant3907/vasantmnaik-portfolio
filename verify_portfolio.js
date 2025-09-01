const https = require('https');

const url = 'https://vasant3907.github.io/vasantmnaik-portfolio/';

console.log('🔍 Testing Portfolio...');
console.log('URL:', url);
console.log('');

// Test 1: Check if main page loads
https.get(url, (res) => {
    console.log('✅ Main page status:', res.statusCode);
    
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    
    res.on('end', () => {
        // Check if it contains React app
        if (data.includes('Vasant M Naik') && data.includes('main.3eefb498.js')) {
            console.log('✅ HTML contains portfolio content');
            console.log('✅ JavaScript file referenced correctly');
        } else {
            console.log('❌ HTML missing expected content');
        }
        
        // Test 2: Check JavaScript file
        https.get('https://vasant3907.github.io/vasantmnaik-portfolio/static/js/main.3eefb498.js', (jsRes) => {
            console.log('✅ JavaScript file status:', jsRes.statusCode);
            
            // Test 3: Check CSS file
            https.get('https://vasant3907.github.io/vasantmnaik-portfolio/static/css/main.9b4ced4a.css', (cssRes) => {
                console.log('✅ CSS file status:', cssRes.statusCode);
                
                console.log('');
                console.log('🎉 Portfolio Verification Complete!');
                console.log('');
                console.log('📱 Your portfolio should now be working at:');
                console.log(url);
                console.log('');
                console.log('💡 If you still see a blank page:');
                console.log('1. Clear browser cache (Ctrl+Shift+Delete)');
                console.log('2. Try incognito/private mode');
                console.log('3. Wait 10-15 seconds for JavaScript to load');
                console.log('4. Try different browser (Chrome, Firefox, Safari)');
            }).on('error', (err) => {
                console.log('❌ CSS file error:', err.message);
            });
        }).on('error', (err) => {
            console.log('❌ JavaScript file error:', err.message);
        });
    });
}).on('error', (err) => {
    console.log('❌ Main page error:', err.message);
});