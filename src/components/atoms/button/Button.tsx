'use client';

import { ButtonProps } from './Button.types';

const Button = ({
  variant = 'primary',
  size = 'md', 
  children,
  isLoading = false,
  fullWidth = false
}: ButtonProps) => {
  
  // 1. BASE STYLES - Every button has these (from your design system)
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none';
  
  // 2. VARIANT STYLES - Using YOUR colors from Issue #5
  const variantStyles = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]', // Your primary blue
    secondary: 'bg-transparent border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white', // Your secondary style
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50', // We'll customize this later
    ghost: 'text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#1E293B]' // Your ghost style
  };
  
  // 3. SIZE STYLES - From your design system
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base', 
    lg: 'px-6 py-3 text-lg',
    xl: 'px-6 py-3 text-2xl'
  };
  
  // 4. WIDTH STYLE
  const widthStyle = fullWidth ? 'w-full' : '';
  
  // 5. LOADING TEXT
  const loadingText = 'Sending...';

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle}`}
      disabled={isLoading}
    >
      {isLoading ? loadingText : children}
    </button>
  );
};

export default Button;