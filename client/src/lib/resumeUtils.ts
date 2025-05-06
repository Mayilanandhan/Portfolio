import resumeImage from '../assets/resume.jpg';

// Technically for a real app, you'd have both JPG and PDF files
// But for our purposes, we'll use the same image file
export const resumeImageUrl = resumeImage;
export const resumePdfUrl = resumeImage; // In a real app, this would be a PDF file

export const openResumeInNewTab = () => {
  // Open the resume image in a new tab
  window.open(resumeImageUrl, '_blank');
};

export const downloadResume = () => {
  // Create a link element
  const link = document.createElement('a');
  link.href = resumePdfUrl;
  link.download = 'Mayilanandhan_D_Resume.jpg'; // In a real app, this would be a .pdf file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};