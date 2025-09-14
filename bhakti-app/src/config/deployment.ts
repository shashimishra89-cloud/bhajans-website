// Deployment and environment configuration
export const deploymentConfig = {
  // Environment settings
  environment: process.env.NODE_ENV || 'production',
  
  // Cloudflare Pages settings
  cloudflare: {
    projectName: "bhajans",
    customDomain: "bhajans.justhobby.net",
    buildCommand: "npm run build",
    buildOutputDirectory: "out",
    nodeVersion: "18",
    
    // Environment variables for Cloudflare Pages
    environmentVariables: {
      NODE_ENV: "production",
      NEXT_TELEMETRY_DISABLED: "1"
    }
  },
  
  // Build settings
  build: {
    generateSitemap: true,
    generateRobotsTxt: true,
    optimizeImages: true,
    minifyCSS: true,
    minifyJS: true
  },
  
  // Analytics
  analytics: {
    googleAnalytics: "G-XXXXXXXXXX", // Replace with your GA4 ID
    cloudflareAnalytics: true,
    webVitals: true
  }
};

// Helper functions
export const isProduction = () => deploymentConfig.environment === 'production';
export const isDevelopment = () => deploymentConfig.environment === 'development';
