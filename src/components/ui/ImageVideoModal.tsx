'use client';

import { useState, useEffect } from 'react';

interface ImageVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'image' | 'video';
  src: string;
  title?: string;
  description?: string;
}

export function ImageVideoModal({ isOpen, onClose, type, src, title, description }: ImageVideoModalProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsLoading(true);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative max-w-4xl max-h-[90vh] mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
          {type === 'image' ? (
            <div>
              {isLoading && (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}
              <img
                src={src}
                alt={title || 'Image'}
                className={`w-full h-auto max-h-[70vh] object-contain ${isLoading ? 'hidden' : 'block'}`}
                onLoad={() => setIsLoading(false)}
                onError={() => setIsLoading(false)}
              />
            </div>
          ) : (
            <div className="relative">
              {isLoading && (
                <div className="flex items-center justify-center h-64 bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
              )}
              <iframe
                src={src}
                className={`w-full h-[70vh] ${isLoading ? 'hidden' : 'block'}`}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
              />
            </div>
          )}

          {/* Title and Description */}
          {(title || description) && (
            <div className="p-6 bg-gray-50">
              {title && (
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {title}
                </h3>
              )}
              {description && (
                <p className="text-gray-600">
                  {description}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 