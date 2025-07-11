// convert_to_pdf_advanced.js
import { launch } from 'puppeteer';

const generatePDF = async (options = {}) => {
  const {
    url = 'http://localhost:3000/pitch-deck',
    outputPath = 'jack-ai-pitch-deck-advanced.pdf',
    format = 'A4',
    pageBreaks = true,
    margins = { top: '10mm', bottom: '10mm', left: '2mm', right: '2mm' }
  } = options;

  const browser = await launch();
  const page = await browser.newPage();

  try {
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1280, height: 720 });

    // Navigate to the page
    await page.goto(url, { waitUntil: 'networkidle0' });

    // Wait for fonts and images to load
    await page.evaluateHandle('document.fonts.ready');
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Apply print media type
    await page.emulateMediaType('print');

    if (pageBreaks) {
      // Add custom page break styling
      await page.addStyleTag({
        content: `
          @media print {
            .slide {
              page-break-before: always !important;
              page-break-after: always !important;
              page-break-inside: avoid !important;
              margin: 0 !important;
              min-height: 100vh !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: flex-start !important;
            }
            
            .slide:first-of-type {
              page-break-before: auto !important;
            }
            
            header {
              page-break-after: always !important;
              min-height: 100vh !important;
              display: flex !important;
              flex-direction: column !important;
              justify-content: center !important;
            }
            
            footer {
              page-break-before: always !important;
              min-height: 100vh !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
            }
          }
        `
      });
    }

    // Generate PDF
    await page.pdf({
      path: outputPath,
      format: format,
      printBackground: true,
      margin: margins,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      pageRanges: ''
    });

    console.log(`PDF saved as ${outputPath}`);

  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
};

// Run with different configurations
(async () => {
  // Standard PDF with page breaks
//   await generatePDF({
//     outputPath: 'jack-ai-pitch-deck-with-breaks.pdf',
//     pageBreaks: true
//   });

  // PDF without forced page breaks (continuous)
  await generatePDF({
    outputPath: 'jack-ai-pitch.pdf',
    pageBreaks: true,
    margins: { top: '5mm', bottom: '5mm', left: '0mm', right: '0mm' }
  });

//   // Letter format PDF
//   await generatePDF({
//     outputPath: 'jack-ai-pitch-deck-letter.pdf',
//     format: 'Letter',
//     pageBreaks: true
//   });
})(); 