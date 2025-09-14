// AdSense configuration - Easy to modify ad settings
export const adsenseConfig = {
  // AdSense Publisher ID
  clientId: "ca-pub-6946776427046584",
  
  // Ad Slot IDs - Easy to modify without touching component code
  adSlots: {
    banner: "1234567890",
    square: "0987654321", 
    inContent: "1122334455",
    sidebar: "5566778899"
  },
  
  // Ad placement settings
  placement: {
    homepageBanner: true,
    festivalPageBanner: true,
    godPageBanner: true,
    searchPageBanner: false,
    sidebarAds: true,
    inContentAds: true
  },
  
  // Ad configuration
  settings: {
    responsive: true,
    autoAds: false,
    dataAdFormat: "auto",
    dataFullWidthResponsive: true
  }
};

// Helper functions
export const getAdSlot = (type: keyof typeof adsenseConfig.adSlots) => adsenseConfig.adSlots[type];
export const isAdEnabled = (placement: keyof typeof adsenseConfig.placement) => adsenseConfig.placement[placement];
