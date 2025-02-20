import * as THREE from 'three';
import { STLExporter } from 'three-stdlib';
import { GLTFLoader } from 'three-stdlib';
import fs from 'fs';
import path from 'path';

// Function to load the .glb file and export to STL
async function loadAndExportToSTL(inputFilePath, outputFilePath) {
  const loader = new GLTFLoader();
  const exporter = new STLExporter();

  try {
    // Read the GLB file as a binary buffer
    const fileBuffer = fs.readFileSync(inputFilePath);
    
    // Load the binary data using THREE.GLTFLoader
    loader.parse(fileBuffer, path.dirname(inputFilePath), (gltf) => {
      const scene = gltf.scene; // Get the loaded 3D model scene

      // Export the scene to an STL format
      const stlData = exporter.parse(scene);

      // Write the STL data to a file
      fs.writeFileSync(outputFilePath, stlData);
      console.log(`STL file saved to: ${outputFilePath}`);
    }, (error) => {
      console.error("Error loading GLB:", error);
    });
  } catch (error) {
    console.error("Error loading and exporting model:", error);
  }
}

// Specify input and output paths
const inputFilePath = './character.glb';  // Your input GLB file path
const outputFilePath = './character.stl'; // The output STL file path

// Call the function to load and export
loadAndExportToSTL(inputFilePath, outputFilePath);
