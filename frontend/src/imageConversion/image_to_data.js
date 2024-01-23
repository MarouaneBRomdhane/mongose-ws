// import { useState } from "react";

// function ImageProcessorComponent({ imagePath, jsonFilePath }) {
//   const [dataUri, setDataUri] = useState("");
//   const [jsonData, setJsonData] = useState(null);

//   const processImageAndSaveToJSON = async () => {
//     try {
//       const fileBinary = await fetch(imagePath).then((res) => res.blob());

//       // Process the image data as needed
//       const base64Encoded = await processImageData(fileBinary);

//       // Update the state with the processed data
//       setDataUri(`data:${fileBinary.type};base64,${base64Encoded}`);

//       // Create a dictionary with the processed data
//       const processedData = {
//         image_data_uri: `data:${fileBinary.type};base64,${base64Encoded}`,
//         // Include other processed data as needed
//       };

//       // Save the data to a JSON file
//       await fetch(jsonFilePath, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(processedData),
//       });

//       // Update the state with the processed JSON data
//       setJsonData(processedData);

//       console.log("Image processed and JSON updated successfully");
//     } catch (error) {
//       console.error("Error processing image and updating JSON:", error);
//     }
//   };

//   const processImageData = async (fileBinary) => {
//     // Perform any image processing steps needed and return the base64-encoded data
//     // For example, you can use FileReader or other image processing libraries

//     const base64Encoded = await new Promise((resolve) => {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         const base64 = reader.result.split(",")[1];
//         resolve(base64);
//       };
//       reader.readAsDataURL(fileBinary);
//     });

//     return base64Encoded;
//   };

//   return (
//     <div>
//       {/* Render the processed data as needed */}
//       {dataUri && <img src={dataUri} alt="" />}
//       {jsonData}
//     </div>
//   );
// }

// export default ImageProcessorComponent;
