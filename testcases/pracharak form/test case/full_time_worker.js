const fs = require('fs');
const path = require('path');

describe('File Upload Test', () => {
  it('should upload a CSV file', async () => {
    const filePath = path.resolve(__dirname, 'your_file.csv');
    const fileInput = element(by.css('input[type="file"]'));
    
    // Navigate to the webpage with the file upload functionality
    await browser.get('https://yourwebsite.com/upload');

    // Use 'sendKeys' to set the file path in the file input element
    await fileInput.sendKeys(filePath);

    // Perform any other actions or assertions after file upload
  });
});
