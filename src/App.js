import './App.css';
import PDFViewer from './PDFViewer';
import { useState } from 'react';

function App() {
  const [previousBook, setPreviousBook] = useState('thalaathatulusuul');
  const [currentBook, setCurrentBook] = useState('qawaacidularbac');  
  const [nextBook, setNextBook] = useState('thalaathatulusuul');
  const [currentBookList] = useState(['qawaacidularbac', 'thalaathatulusuul']);

  const pdfs =  {
    'qawaacidularbac': {
      'arabicName': 'qawaacidularbac',
      'URL': `/qawaacidularbac.pdf`,
    },
    'thalaathatulusuul': {
      'arabicName': 'thalaathatulusuul', 
      'URL': `/thalaathatulusuul.pdf`,
    }
  };

  const handleIncrementBook = () => {
    const currentIndex = currentBookList.indexOf(currentBook);
    const nextIndex = (currentIndex + 1) % currentBookList.length;
    const previousIndex = (currentIndex + currentBookList.length - 1) % currentBookList.length;

    setPreviousBook(currentBook);
    setCurrentBook(currentBookList[nextIndex]);
    setNextBook(currentBookList[(nextIndex + 1) % currentBookList.length]);
  };

  const handleDecrementBook = () => {
    const currentIndex = currentBookList.indexOf(currentBook);
    const previousIndex = (currentIndex + currentBookList.length - 1) % currentBookList.length;
    const nextIndex = (currentIndex + 1) % currentBookList.length;

    setPreviousBook(currentBookList[previousIndex]);
    setCurrentBook(currentBookList[previousIndex]);
    setNextBook(currentBook);
  };

  return (
    <div className="app">
      <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
      <div>
        <p onClick={handleDecrementBook}>{pdfs[previousBook].arabicName}</p>
        <h2>{pdfs[currentBook].arabicName}</h2>
        <p onClick={handleIncrementBook}>{pdfs[nextBook].arabicName}</p>
      </div>
      <PDFViewer PDFURL={pdfs[currentBook].URL}/>
    </div>
  );
}

export default App;
