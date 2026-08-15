const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ executablePath: 'C:\\\\Users\\\\Asus\\\\.cache\\\\puppeteer\\\\chrome\\\\win64-152.0.7977.42\\\\chrome-win64\\\\chrome.exe' });
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  await page.goto('http://localhost:4173', { waitUntil: 'networkidle0' });
  await browser.close();
})();
