import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners'; // Import the loading spinner

function FileUpload() {
  const [file, setFile] = useState(null);
  const [pros, setPros] = useState([]);
  const [cons, setCons] = useState([]);
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataReceived, setDataReceived] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://192.168.19.106:4000/resumeanalyse', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      const [prosText, consText, suggestionsText] = responseData.modelresponse.split('\n\n');

      const prosArray = prosText.replace('Pros:', '').trim().split('\n').map(item => item.trim());
      const consArray = consText.replace('Cons:', '').trim().split('\n').map(item => item.trim());
      const suggestionsArray = suggestionsText.replace('Suggestions:', '').trim().split('\n').map(item => item.trim());

      setPros(prosArray);
      setCons(consArray);
      setTips(suggestionsArray);
      setDataReceived(true);
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="mb-4 flex items-center">
        <input
          type="file"
          onChange={handleFileChange}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200"
        />
        <button
          onClick={handleUpload}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
          disabled={loading}
        >
          {loading ? <ClipLoader size={20} color="#ffffff" /> : 'Upload'}
        </button>
      </div>
      {dataReceived && (
        <>
          <div className="response-container">
            <h2 className="text-lg font-semibold mb-2">Pros:</h2>
            <ul className="list-disc ml-6">
              {pros.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          <div className="response-container">
            <h2 className="text-lg font-semibold mb-2">Cons:</h2>
            <ul className="list-disc ml-6">
              {cons.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
          <div className="response-container">
            <h2 className="text-lg font-semibold mb-2">Tips:</h2>
            <ul className="list-disc ml-6">
              {tips.map((item, index) => (
                <li key={index} className="text-gray-700">{item}</li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default FileUpload;
