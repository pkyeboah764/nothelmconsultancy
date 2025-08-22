import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload fonts
      const fontPreloads = [
        '/fonts/PTSerif-Regular.woff2',
        '/fonts/ivymode-regular.woff2'
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Optimize images with intersection observer
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              observer.unobserve(img);
            }
          });
        }, {
          rootMargin: '50px 0px',
          threshold: 0.01
        });

        images.forEach(img => imageObserver.observe(img));
      } else {
        // Fallback for older browsers
        images.forEach(img => {
          img.src = img.dataset.src;
        });
      }
    };

    // Prefetch next page resources on hover
    const prefetchOnHover = () => {
      const links = document.querySelectorAll('a[href^="/"]');
      
      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          const href = link.getAttribute('href');
          if (href && href !== window.location.pathname) {
            const prefetchLink = document.createElement('link');
            prefetchLink.rel = 'prefetch';
            prefetchLink.href = href;
            document.head.appendChild(prefetchLink);
          }
        }, { once: true });
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Performance monitoring
    const monitorPerformance = () => {
      if ('performance' in window && 'PerformanceObserver' in window) {
        // Monitor Largest Contentful Paint
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              // LCP tracking for performance monitoring
            }
          });
        });
        
        try {
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch (e) {
          // Fallback for browsers that don't support this
        }
      }
    };

    // Run optimizations
    preloadCriticalResources();
    optimizeImages();
    prefetchOnHover();
    optimizeThirdPartyScripts();
    
    if (process.env.NODE_ENV === 'development') {
      monitorPerformance();
    }

    // Cleanup function
    return () => {
      // Remove any observers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;