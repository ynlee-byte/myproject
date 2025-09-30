import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { cn } from '../../lib/utils';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const { ref, isVisible } = useScrollAnimation({
    threshold: 0.15,
    rootMargin: '-50px',
  });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-800 ease-out';
    
    if (!isVisible) {
      return `${baseClasses} opacity-0 translate-y-16`;
    }
    
    return `${baseClasses} opacity-100 translate-y-0`;
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
