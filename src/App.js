import PDFViewer from './PDFViewer';
import BookSelector from './BookSelector';
import { useState } from 'react';

function App() {
  const [previousBook, setPreviousBook] = useState('alkabaair');
  const [currentBook, setCurrentBook] = useState('maaamaranaa');  
  const [nextBook, setNextBook] = useState('usuulussitta');
  const [currentBookList] = useState([
    'maaamaranaa', 
    'qawaacidularbac',
    'usuulussitta',
    'thalaathatulusuul',
    'kitaabuttawxiid',
    'kashf',
    'nawaaqidh',
    'masaailuljaahiliyyah',
    'fadhl',
    'usuululiimaan',
    'alkabaair',
  ]);

  const pdfs =  {
    'maaamaranaa': {
      'arabicName': 'واجبنا نحو ما أمرنا الله به',
      'URL': `/maaamaranaa.pdf`,
    },
    'qawaacidularbac': {
      'arabicName': 'القواعد الأربع',
      'URL': `/qawaacidularbac.pdf`,
    },
    'usuulussitta': {
      'arabicName': 'الأصول السّتة',
      'URL': `/usuulussitta.pdf`,
    },    
    'thalaathatulusuul': {
      'arabicName': 'الثّلاثة الأصول',
      'URL': `/thalaathatulusuul.pdf`,
    },
    'kitaabuttawxiid': {
      'arabicName': 'كتاب التّوحيد',
      'URL': `/kitaabuttawxiid.pdf`,
    },
    'kashf': {
      'arabicName': 'كشف الشّبهات',
      'URL': `/kashf.pdf`,
    },
    'nawaaqidh': {
      'arabicName': 'نواقض الإسلام',
      'URL': `/nawaaqidh.pdf`,
    },    
    'masaailuljaahiliyyah': {
      'arabicName': 'مسائل الجاهليّة',
      'URL': `/masaailuljaahiliyyah.pdf`,
    },
    'fadhl': {
      'arabicName': 'فضل الإسلام',
      'URL': `/fadhl.pdf`,
    },
    'usuululiimaan': {
      'arabicName': 'أصول الإيمان',
      'URL': `/usuululiimaan.pdf`,
    },
    'alkabaair': {
      'arabicName': 'كتاب الكبائر', 
      'URL': `/alkabaair.pdf`,
    }
  };

  const handleIncrementBook = () => {
    if(currentBookList.indexOf(nextBook) == currentBookList.length - 1){
      setNextBook(currentBookList[0])
    }
    else{
      setNextBook(currentBookList[currentBookList.indexOf(nextBook) + 1])
    }
    if(currentBookList.indexOf(previousBook) == currentBookList.length - 1){
      setPreviousBook(currentBookList[0])
    }
    else{
      setPreviousBook(currentBookList[currentBookList.indexOf(previousBook) + 1])
    }
  };

  const handleDecrementBook = () => {
    if(currentBookList.indexOf(previousBook) == 0){
      setPreviousBook(currentBookList[currentBookList.length - 1])
    }
    else{
      setPreviousBook(currentBookList[currentBookList.indexOf(previousBook) - 1])
    }
    if(currentBookList.indexOf(currentBook) == 0){
      setCurrentBook(currentBookList[currentBookList.length - 1])
    }
    else{
      setCurrentBook(currentBookList[currentBookList.indexOf(currentBook) - 1])
    }
    if(currentBookList.indexOf(nextBook) == 0){
      setNextBook(currentBookList[currentBookList.length - 1])
    }
    else{
      setNextBook(currentBookList[currentBookList.indexOf(nextBook) - 1])
    }
  };

  return (
    <div style={{textAlign: 'center'}}>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <BookSelector 
        setCurrentBook={setCurrentBook}
        setPreviousBook={setPreviousBook} 
        setNextBook={setNextBook}
        currentBookList={currentBookList}
        pdfs={pdfs}
        />
        <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <p onClick={handleDecrementBook}>{pdfs[previousBook].arabicName}</p>
        <h2>{pdfs[currentBook].arabicName}</h2>
        <p onClick={handleIncrementBook}>{pdfs[nextBook].arabicName}</p>
      </div>
      <PDFViewer PDFURL={pdfs[currentBook].URL}/>
    </div>
  );
}

export default App;
