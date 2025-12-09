/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import qr from 'qr-image';
import { writeFile } from 'fs';

async function generateQRCode() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL to generate a QR code for:',
    },
  ]);

  const qrImage = qr.imageSync(answers.url, { type: 'png' });

  writeFile('qr_code.png', qrImage, (err) => {
    if (err) throw err;
    console.log('QR code generated and saved to qr_code.png');
  });
  writeFile('url.txt', answers.url, (err) => {
    if (err) throw err;
    console.log('URL saved to url.txt');
  });
}

generateQRCode();
