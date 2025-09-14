"use client";

import { useEffect } from 'react';

// AdSense configuration
export const ADSENSE_CONFIG = {
  CLIENT_ID: "ca-pub-6946776427046584",
  SCRIPT_SRC: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6946776427046584"
};

// AdSense Script component for head
export const AdSenseScript = () => {
  useEffect(() => {
    // Load AdSense script
    const script = document.createElement('script');
    script.src = ADSENSE_CONFIG.SCRIPT_SRC;
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(`script[src="${ADSENSE_CONFIG.SCRIPT_SRC}"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return null;
};

// Individual ad unit component
interface AdUnitProps {
  adSlot: string;
  adFormat?: string;
  style?: React.CSSProperties;
  className?: string;
}

export const AdUnit: React.FC<AdUnitProps> = ({ 
  adSlot, 
  adFormat = "auto", 
  style = { display: 'block' },
  className = "adsbygoogle"
}) => {
  useEffect(() => {
    try {
      // Push ad to AdSense
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <ins
      className={className}
      style={style}
      data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
};

// Responsive banner ad component
export const BannerAd: React.FC<{ adSlot: string }> = ({ adSlot }) => {
  return (
    <div className="w-full flex justify-center my-8">
      <AdUnit 
        adSlot={adSlot}
        adFormat="auto"
        style={{ 
          display: 'block',
          width: '100%',
          maxWidth: '728px',
          height: '90px'
        }}
      />
    </div>
  );
};

// Square ad component for sidebars
export const SquareAd: React.FC<{ adSlot: string }> = ({ adSlot }) => {
  return (
    <div className="w-full flex justify-center my-6">
      <AdUnit 
        adSlot={adSlot}
        adFormat="auto"
        style={{ 
          display: 'block',
          width: '300px',
          height: '250px'
        }}
      />
    </div>
  );
};

// In-content ad component
export const InContentAd: React.FC<{ adSlot: string }> = ({ adSlot }) => {
  return (
    <div className="w-full flex justify-center my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        <AdUnit 
          adSlot={adSlot}
          adFormat="fluid"
          style={{ 
            display: 'block',
            width: '100%',
            maxWidth: '468px',
            height: '60px'
          }}
        />
      </div>
    </div>
  );
};
