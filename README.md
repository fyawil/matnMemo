# Matn Memo

This React application allows users to view a selection of PDF documents in Arabic. Users can navigate through a predefined list of books and view their contents directly within the app.

## Features

- **PDF Viewer**: View PDF documents within the app.
- **Book Selector**: Select from a list of available books.
- **Navigation**: Navigate between previous, current, and next books in the list.

## Installation

To get started with this project, clone the repository and install the necessary dependencies:

``` bash
git clone https://github.com/yourusername/react-pdf-viewer-app.git
cd react-pdf-viewer-app
npm install 
```

## Usage

To run the application locally, use the following command:

``` bash

npm start
```

This will start the development server and open the application in your default web browser.

## Components

### `App.js`

This is the main component that manages the state and renders the PDF viewer and Book Selector.

### State Variables

- `previousBook`: Tracks the previous book in the list.
- `currentBook`: Tracks the current book being viewed.
- `nextBook`: Tracks the next book in the list.
- `currentBookList`: An array containing the list of all books.

### `pdfs` Object

The pdfs object contains metadata for each book, including its Arabic name and URL.

### Handlers

- `handleIncrementBook`: Handles the navigation to the next book.
- `handleDecrementBook`: Handles the navigation to the previous book.

### PDFViewer.js
This component is responsible for displaying the PDF document.

### BookSelector.js
This component allows users to select a book from the list.

## File Structure

``` csharp
Copy code
react-pdf-viewer-app/
├── public/
│   ├── index.html
│   └── *.pdf  # PDF files
├── src/
│   ├── components/
│   │   ├── PDFViewer.js
│   │   └── BookSelector.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Available Scripts

In the project directory, you can run:

`npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

`npm test`
Launches the test runner in interactive watch mode.

`npm run build`
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## Acknowledgements

The PDFs are from the

متون التوحيد و أصول الإيمان (المستوى الأول)

Telegram channel



