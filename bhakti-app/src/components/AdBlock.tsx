"use client";

import React, { useEffect } from 'react';

// AdSense configuration
export const ADSENSE_CONFIG = {
  CLIENT_ID: "ca-pub-6946776427046584",
  AD_SLOTS: {
    HERO_BANNER: "1234567890",
    CATEGORIES_INCONTENT: "1234567891", 
    FEATURED_INCONTENT: "1234567892",
    SIDEBAR_SQUARE: "1234567893",
    CONTENT_BANNER: "1234567894"
  }
};

// Main AdBlock component
interface AdBlockProps {
  adSlot?: string;
  adFormat?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AdBlock: React.FC<AdBlockProps> = ({ 
  adSlot = ADSENSE_CONFIG.AD_SLOTS.HERO_BANNER,
  adFormat = "auto", 
  className = "adsbygoogle",
  style = { display: 'block' }
}) => {
  useEffect(() => {
    try {
      // Push ad to AdSense when component mounts
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        <ins
          className={className}
          style={style}
          data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

// Responsive banner ad component
export const BannerAd: React.FC<{ adSlot?: string }> = ({ adSlot = ADSENSE_CONFIG.AD_SLOTS.HERO_BANNER }) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-8">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        <ins
          className="adsbygoogle"
          style={{ 
            display: 'block',
            width: '100%',
            maxWidth: '728px',
            height: '90px'
          }}
          data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

// Square ad component for sidebars
export const SquareAd: React.FC<{ adSlot?: string }> = ({ adSlot = ADSENSE_CONFIG.AD_SLOTS.SIDEBAR_SQUARE }) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        <ins
          className="adsbygoogle"
          style={{ 
            display: 'block',
            width: '300px',
            height: '250px'
          }}
          data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};

// In-content ad component
export const InContentAd: React.FC<{ adSlot?: string }> = ({ adSlot = ADSENSE_CONFIG.AD_SLOTS.CATEGORIES_INCONTENT }) => {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.error('AdSense error:', error);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <div className="text-center">
        <p className="text-xs text-gray-500 mb-2">Advertisement</p>
        <ins
          className="adsbygoogle"
          style={{ 
            display: 'block',
            width: '100%',
            maxWidth: '468px',
            height: '60px'
          }}
          data-ad-client={ADSENSE_CONFIG.CLIENT_ID}
          data-ad-slot={adSlot}
          data-ad-format="fluid"
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
};
