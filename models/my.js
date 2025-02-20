import CryptoJS from 'crypto-js';
import fs from 'fs';

// Decrypt function
function decryptFile(inputFilePath, outputFilePath, key, iv) {
  return new Promise((resolve, reject) => {
    // Read the encrypted file
    fs.readFile(inputFilePath, (err, encryptedData) => {
      if (err) {
        reject("Error reading file: " + err);
        return;
      }

      // Decrypt the data using AES
      const decryptedBytes = CryptoJS.AES.decrypt(
        {
          ciphertext: CryptoJS.enc.Base64.parse(encryptedData.toString('base64'))
        },
        CryptoJS.enc.Utf8.parse(key), {
          iv: CryptoJS.enc.Utf8.parse(iv),
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.Pkcs7
        });

      // Convert decrypted bytes to a buffer (handle as binary data)
      const buffer = Buffer.from(decryptedBytes.toString(CryptoJS.enc.Base64), 'base64');

      // Write the decrypted data to the output file
      fs.writeFile(outputFilePath, buffer, (err) => {
        if (err) {
          reject("Error writing file: " + err);
        } else {
          resolve("Decryption successful. Output file saved as: " + outputFilePath);
        }
      });
    });
  });
}

// Decrypt and save the file
async function decryptAndSave(inputFilePath, outputFilePath) {
  const key = "Character3D#@";  // The password/key used for encryption
  const iv = "1234567890abcdef";  // The IV used for encryption (this might need to be adjusted)
  
  try {
    const message = await decryptFile(inputFilePath, outputFilePath, key, iv);
    console.log(message);
  } catch (error) {
    console.error("Decryption failed", error);
  }
}

// Specify input and output file paths
const inputFilePath = "character.enc";  // Path to your encrypted file
const outputFilePath = "character.stl"; // Change the extension to .stl for the decrypted file

// Decrypt and save the file
decryptAndSave(inputFilePath, outputFilePath);
