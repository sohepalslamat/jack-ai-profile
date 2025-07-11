// convert_to_pdf.js
import { launch } from 'puppeteer';

(async () => {
  const browser = await launch();
  const page = await browser.newPage();

  // Set viewport size for better PDF generation
  await page.setViewport({ width: 1280, height: 720 });

  // Change this URL to your running Nuxt app
  await page.goto('http://localhost:3000/pitch-deck', { waitUntil: 'networkidle0' });

  // Wait for fonts to load
  await page.evaluateHandle('document.fonts.ready');
  
  // Wait a bit more for everything to load
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Add print media styles
  await page.emulateMediaType('print');

  await page.pdf({
    path: 'jack-ai-pitch-deck1.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' },
    displayHeaderFooter: false,
    preferCSSPageSize: true,
    pageRanges: ''
  });

  await browser.close();
  console.log('PDF saved as jack-ai-pitch-deck1.pdf');
})();