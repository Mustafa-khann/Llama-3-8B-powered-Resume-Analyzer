import React from 'react';
import FileUpload from './components/FileUpload';

function Navbar() {
  return (
    <nav className="bg-gray-200 p-2 text-center">
      <div className="container mx-auto">
        <h1 className="text-gray-800 text-2xl font-bold">AI-Powered Resume Analyzer</h1>
      </div>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="mt-8">
          <FileUpload />
        </div>
      </div>
    </div>
  );
}

export default App;
