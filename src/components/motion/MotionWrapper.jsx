import { motion, useReducedMotion } from 'framer-motion';

const MotionWrapper = ({
  children,
  variants,
  className = '',
  ...props
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
