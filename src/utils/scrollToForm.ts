export const scrollToForm = () => {
  const formElement = document.getElementById('contact-form');
  if (formElement) {
    formElement.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'center' 
    });
  }
};