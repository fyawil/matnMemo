import React from 'react';

const PDFViewer = () => {
    return (
        <div style={{ height: '80vh', width: '100%' }}>
            <object
                data={`${process.env.PUBLIC_URL}/qawaacidularbac.pdf`}
                type="application/pdf"
                width="100%"
                height="100%"
            >
                <p>Your browser does not support PDFs. Please download the PDF to view it: <a href={`${process.env.PUBLIC_URL}/qawaacidularbac.pdf`}>Download PDF</a>.</p>
            </object>
        </div>
    );
};

export default PDFViewer;
