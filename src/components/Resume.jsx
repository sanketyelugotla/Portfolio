import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

// Configure PDF worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [numPages, setNumPages] = useState(null);
    const resumeFile = "/resume.pdf"; // in public folder

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumeFile;
        link.download = "Sanket_Resume.pdf";
        link.click();
    };

    return (
        <>
            {/* Preview Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className="bg-[#915EFF] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:shadow-purple-500/30 transition-all"
            >
                View Resume
            </motion.button>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 50, opacity: 0 }}
                            className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="p-4 flex justify-between items-center border-b border-gray-800">
                                <h3 className="text-xl font-bold text-white">My Resume</h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-400 hover:text-white"
                                >
                                    ✕
                                </button>
                            </div>

                            <div className="p-4">
                                <Document
                                    file={resumeFile}
                                    onLoadSuccess={onDocumentLoadSuccess}
                                    loading={<div className="text-white">Loading...</div>}
                                    error={<div className="text-red-500">Failed to load PDF</div>}
                                >
                                    {Array.from(new Array(numPages), (_, index) => (
                                        <Page
                                            key={`page_${index + 1}`}
                                            pageNumber={index + 1}
                                            width={800}
                                            renderTextLayer={false}
                                            className="border border-gray-800 mb-4"
                                        />
                                    ))}
                                </Document>
                            </div>

                            <div className="p-4 border-t border-gray-800 flex justify-end">
                                <button
                                    onClick={handleDownload}
                                    className="bg-[#915EFF] hover:bg-[#7d4de0] text-white px-4 py-2 rounded transition-colors"
                                >
                                    Download PDF
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Resume;