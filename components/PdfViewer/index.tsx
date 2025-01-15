import React from 'react';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={onLoadSuccess}
        className="pdf-document"
      >
        <Page pageNumber={pageNumber} />
      </Document>

      <div>
        <button onClick={goToPreviousPage} disabled={pageNumber === 1}>
          Previous
        </button>
        <button
          onClick={goToNextPage}
          disabled={pageNumber === numPages}
        >
          Next
        </button>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    </div>
  );
};

export default PdfViewer;
