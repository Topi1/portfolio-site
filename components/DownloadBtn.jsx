import React from "react";

const DownloadBtn = () => {
    const handleDownload = () => {
        // Replace 'resume.pdf' with the path to your PDF file
        const url = '/pictures/resumeTopi.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'resume.pdf');
        document.body.appendChild(link);
        link.click();
    };
    
    return (
        <button onClick={handleDownload}>Download Resume</button>
    );
};

export default DownloadBtn;