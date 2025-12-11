// src/components/ui/AnimatedText.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  className = "",
  delay = 0,
  as: Component = "div"
}) => {
  const MotionComponent = motion(Component);

  return (
    <MotionComponent
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        ...fadeInUp,
        visible: {
          ...fadeInUp.visible,
          transition: {
            ...fadeInUp.visible.transition,
            delay: delay
          }
        }
      }}
    >
      {children}
    </MotionComponent>
  );
};

export default AnimatedText;
