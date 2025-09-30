import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'scale-up';
  delay?: number;
  duration?: number;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animationType = 'fade-in',
  delay = 0,
  duration = 600,
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: '-50px',
  });

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} ease-out`;
    
    if (!isVisible) {
      switch (animationType) {
        case 'fade-in':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'slide-up':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'slide-left':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'slide-right':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'scale-up':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
