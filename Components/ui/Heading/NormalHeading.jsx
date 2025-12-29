// src/components/Heading.jsx
import React from 'react';

const NormalHeading = ({
  children,
  as = 'h2',
  className = '',
  variant = 'primary',
}) => {
  const Component = as;

  const baseStyles = 'font-bold tracking-tight leading-tight';

  const asStyles = {
    h1: 'text-5xl md:text-6xl lg:text-7xl',
    h2: 'text-4xl md:text-5xl lg:text-6xl',
    h3: 'text-3xl md:text-4xl lg:text-5xl',
    h4: 'text-2xl md:text-3xl lg:text-4xl',
    h5: 'text-xl md:text-2xl lg:text-3xl',
    h6: 'text-lg md:text-xl lg:text-2xl',
  };

  const variantStyles = {
    primary: 'text-gray-900 dark:text-white',
    secondary: 'text-gray-700 dark:text-gray-300',
    gradient: 'bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent',
    tersory: 'text-gray-400',
  };

  const classes = [
    baseStyles,
    asStyles[as],
    variantStyles[variant],
    className,
  ].filter(Boolean).join(' ');

  return <Component className={classes}>{children}</Component>;
};

export default NormalHeading;