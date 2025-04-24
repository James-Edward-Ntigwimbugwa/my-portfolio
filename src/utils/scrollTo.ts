export const scrollTo = (elementId: string): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const yOffset = -80; // Header height offset
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};