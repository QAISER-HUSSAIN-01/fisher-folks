'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface AlertProps {
  variant?: 'success' | 'error' | 'warning' | 'info';
  title?: string;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  showIcon?: boolean;
}

export function Alert({
  variant = 'info',
  title,
  children,
  className,
  onClose,
  showIcon = true,
}: AlertProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          container: 'bg-green-50 border-green-200 text-green-800 hover:shadow-md',
          icon: 'text-green-400',
          closeButton: 'text-green-400 hover:text-green-600 hover:bg-green-100',
        };
      case 'error':
        return {
          container: 'bg-red-50 border-red-200 text-red-800 hover:shadow-md',
          icon: 'text-red-400',
          closeButton: 'text-red-400 hover:text-red-600 hover:bg-red-100',
        };
      case 'warning':
        return {
          container: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:shadow-md',
          icon: 'text-yellow-400',
          closeButton: 'text-yellow-400 hover:text-yellow-600 hover:bg-yellow-100',
        };
      case 'info':
        return {
          container: 'bg-blue-50 border-blue-200 text-blue-800 hover:shadow-md',
          icon: 'text-blue-400',
          closeButton: 'text-blue-400 hover:text-blue-600 hover:bg-blue-100',
        };
    }
  };

  const getIcon = () => {
    if (!showIcon) return null;

    const iconClass = getVariantStyles().icon;
    
    switch (variant) {
      case 'success':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        );
      case 'error':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        );
      case 'warning':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'info':
        return (
          <svg className={`w-5 h-5 ${iconClass}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        );
    }
  };

  const styles = getVariantStyles();

  return (
    <div
      className={cn(
        'border rounded-lg p-4 transition-all duration-300 ease-out',
        styles.container,
        className
      )}
      role="alert"
    >
      <div className="flex">
        {getIcon() && (
          <div className="flex-shrink-0 mr-3">
            {getIcon()}
          </div>
        )}
        <div className="flex-1">
          {title && (
            <h3 className="text-sm font-medium mb-1">{title}</h3>
          )}
          <div className="text-sm">
            {children}
          </div>
        </div>
        {onClose && (
          <div className="flex-shrink-0 ml-3">
            <button
              onClick={onClose}
              className={cn(
                'inline-flex text-sm font-medium transition-all duration-200 p-1 rounded-full',
                styles.closeButton
              )}
              aria-label="Close alert"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 