# Llama 3 8B Powered Resume Analyzer

Welcome to the Llama 3 8B Powered Resume Analyzer! This project utilizes a locally hosted Llama 3 8B language model to analyze resumes. Built with React, this tool provides insights and feedback on resumes to help job seekers improve their applications.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- **Resume Upload**: Easily upload resumes for analysis.
- **Real-Time Feedback**: Get instant feedback on resume content and structure.
- **Insightful Metrics**: Provides detailed metrics and suggestions for improvement.
- **User-Friendly Interface**: Simple and intuitive React-based UI.

## Installation

To get started with the Llama 3 8B Powered Resume Analyzer, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Mustafa-khann/Llama-3-8B-powered-Resume-Analyzer.git
    cd Llama-3-8B-powered-Resume-Analyzer
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

## Usage

1. **Upload a Resume**: Navigate to the upload section and select a resume file (PDF or DOCX).
2. **Analyze**: Click on the "Analyze" button to process the resume.
3. **View Feedback**: Review the feedback and metrics provided by the LLM.

## Project Structure

```plaintext
Llama-3-8B-powered-Resume-Analyzer/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── components/
│   │   └── [Your components files]
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── input.css
│   ├── logo.svg
│   ├── output.css
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
└── tailwind.config.js

