import { useState } from "react";

function ImageProcessorComponent() {
  const [dataUri, setDataUri] = useState("");
  const [jsonResult, setJsonResult] = useState(null);

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Encoded = e.target.result.split(",")[1];
        const dataUri = `data:${file.type};base64,${base64Encoded}`;
        setDataUri(dataUri);

        // Example: Populate processedData with the base64-encoded image data
        const processedData = {
          imageData: dataUri,
        };

        // Save the JSON result in the component state
        setJsonResult(processedData);
      };

      reader.readAsDataURL(file);
    }
  }

  function downloadJson() {
    if (jsonResult) {
      const jsonString = JSON.stringify(jsonResult, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      // Create a download link
      const a = document.createElement("a");
      a.href = url;
      a.download = "processedData.json";
      a.click();

      // Clean up
      URL.revokeObjectURL(url);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {dataUri && <img src={dataUri} alt="Processed Image" />}
      {jsonResult && (
        <div>
          <button onClick={downloadJson}>Download JSON</button>
          {/* Display JSON data if needed */}
          <pre>{JSON.stringify(jsonResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
export default ImageProcessorComponent;
