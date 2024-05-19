import PDFViewer from './PDFViewer';
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
    <div style={{textAlign: 'center'}}>
      <h1>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h1>
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
