import React from 'react';

const BookSelector = ({ currentBookList, setPreviousBook, setCurrentBook, setNextBook, pdfs }) => {
    const handleChange = (event) => {
        setCurrentBook(event.target.value);
        setPreviousBook(
            currentBookList.indexOf(event.target.value) == 0? currentBookList[currentBookList.length - 1]: currentBookList[currentBookList.indexOf(event.target.value) - 1]
        )
        setNextBook(
            currentBookList.indexOf(event.target.value) == currentBookList.length - 1? currentBookList[0]: currentBookList[currentBookList.indexOf(event.target.value) + 1]
        )
    };

    return (
        <select onChange={handleChange}>
                {
                    currentBookList.map((book, index) => (
                        <option value={book}>
                            {pdfs[book]['arabicName']}
                        </option>
                    ))
                }
        </select>
    );
};

export default BookSelector;
