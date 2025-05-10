// convert_to_pdf.js
import { launch } from 'puppeteer';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  // Change this URL to your running Nuxt app
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });

  await page.pdf({
    path: 'profile.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '10mm', right: '10mm' }
  });

  await browser.close();
  console.log('PDF saved as profile.pdf');
})();