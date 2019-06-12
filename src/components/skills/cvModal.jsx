import React from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

import cv from './cv.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function CVModal() {
  return (
    <div className="modal fade" id="cvModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div className="modal-body">
            <Document file={cv}  >
              <Page pageNumber={1} scale={1.4} style={{ background: 'green' }} />
              <Page pageNumber={2} scale={1.4} />
            </Document>
          </div>

        </div>
      </div>
    </div>
  )
}

export default CVModal