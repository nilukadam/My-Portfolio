// Central place for all animation definitions
// These are subtle, professional, and reusable

export const fade = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' }
    }
  };
  
  export const slideUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }; 
  
  export const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12
      }
    }
  };
  