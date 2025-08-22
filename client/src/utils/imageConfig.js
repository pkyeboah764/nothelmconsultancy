// Image configuration utility
// Set USE_LOCAL_IMAGES to true to use local images, false to use S3
const USE_LOCAL_IMAGES = true;

const s3BaseUrl = import.meta.env.VITE_S3_BUCKET_URL;
const localBaseUrl = '';

export const getImageUrl = (imagePath) => {
  if (USE_LOCAL_IMAGES) {
    return `${localBaseUrl}/${imagePath}`;
  }
  return `${s3BaseUrl}/${imagePath}`;
};

export const getVideoUrl = (videoPath) => {
  if (USE_LOCAL_IMAGES) {
    return `${localBaseUrl}/${videoPath}`;
  }
  return `${s3BaseUrl}/${videoPath}`;
};

// Toggle this to switch between local and S3 images
export const toggleImageSource = () => {
  // You can change USE_LOCAL_IMAGES at the top of this file
  console.log(`Currently using: ${USE_LOCAL_IMAGES ? 'Local' : 'S3'} images`);
};