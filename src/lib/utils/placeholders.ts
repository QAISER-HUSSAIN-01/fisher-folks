// Placeholder image and video utilities for PFF website

export const placeholderImages = {
  // Hero and banner images
  hero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=600&fit=crop',
  banner: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  
  // Community and people images
  community: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
  fisherfolk: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
  women: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
  youth: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  
  // Activity images
  training: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
  workshop: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
  meeting: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop',
  advocacy: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop',
  
  // Environmental images
  coastal: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  mangrove: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  climate: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  
  // Profile images
  profile1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  profile2: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
  profile3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  profile4: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  
  // Generic placeholders
  small: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  medium: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
  large: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
  
  // Video thumbnails
  video1: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
  video2: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&h=300&fit=crop',
  video3: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
};

export const placeholderVideos = {
  // Video URLs (using sample videos from Pexels)
  overview: 'https://player.vimeo.com/video/328217847?h=1280&w=720',
  community: 'https://player.vimeo.com/video/328217847?h=1280&w=720',
  climate: 'https://player.vimeo.com/video/328217847?h=1280&w=720',
  
  // YouTube video IDs (for embedding)
  youtube1: 'dQw4w9WgXcQ', // Sample video ID
  youtube2: '9bZkp7q19f0', // Sample video ID
  youtube3: 'kJQP7kiw5Fk', // Sample video ID
};

export const getPlaceholderImage = (category: string, size: 'small' | 'medium' | 'large' = 'medium') => {
  const images = {
    community: placeholderImages.community,
    fisherfolk: placeholderImages.fisherfolk,
    women: placeholderImages.women,
    youth: placeholderImages.youth,
    training: placeholderImages.training,
    workshop: placeholderImages.workshop,
    meeting: placeholderImages.meeting,
    advocacy: placeholderImages.advocacy,
    coastal: placeholderImages.coastal,
    mangrove: placeholderImages.mangrove,
    climate: placeholderImages.climate,
  };
  
  return images[category as keyof typeof images] || placeholderImages[size];
};

export const getPlaceholderVideo = (category: string) => {
  const videos = {
    overview: placeholderVideos.overview,
    community: placeholderVideos.community,
    climate: placeholderVideos.climate,
  };
  
  return videos[category as keyof typeof videos] || placeholderVideos.overview;
}; 