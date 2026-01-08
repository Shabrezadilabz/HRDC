import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, Shield, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookie_consent', 'all');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setShowBanner(false);
    
    // Enable tracking
    enableTracking();
  };

  const acceptEssential = () => {
    localStorage.setItem('cookie_consent', 'essential');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setShowBanner(false);
  };

  const rejectAll = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    localStorage.setItem('cookie_consent_date', new Date().toISOString());
    setShowBanner(false);
  };

  const enableTracking = () => {
    // Enable Google Analytics or other tracking here
    console.log('✅ Tracking enabled with user consent');
    
    // You can add Google Analytics, Facebook Pixel, etc. here
    // Example:
    // window.gtag('consent', 'update', {
    //   'analytics_storage': 'granted'
    // });
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setShowBanner(false)}
          />

          {/* Cookie Banner */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[101] p-4 md:p-6"
          >
            <div className="max-w-6xl mx-auto">
              <div className="glass rounded-2xl p-6 md:p-8 border-2 border-primary/30 shadow-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/20 border border-primary/30">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                      🍪 We Value Your Privacy
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      We use cookies to enhance your browsing experience, provide personalized content, 
                      and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                    </p>

                    {showDetails && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-4 space-y-3"
                      >
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Essential Cookies:</span>
                            <span className="text-white/70 ml-2">Required for website functionality</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Analytics Cookies:</span>
                            <span className="text-white/70 ml-2">Help us understand how you use our site</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-white">Marketing Cookies:</span>
                            <span className="text-white/70 ml-2">Personalize ads and content for you</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="text-primary hover:text-yellow-400 text-sm font-medium transition-colors underline"
                  >
                    {showDetails ? 'Hide Details' : 'Show Details'}
                  </button>

                  <div className="flex flex-wrap gap-3 w-full md:w-auto">
                    <Button
                      variant="outline"
                      onClick={rejectAll}
                      className="flex-1 md:flex-initial border-white/20 text-white hover:bg-white/10"
                    >
                      Reject All
                    </Button>
                    <Button
                      variant="outline"
                      onClick={acceptEssential}
                      className="flex-1 md:flex-initial border-primary/30 text-primary hover:bg-primary/10"
                    >
                      Essential Only
                    </Button>
                    <Button
                      onClick={acceptAll}
                      className="flex-1 md:flex-initial bg-primary hover:bg-yellow-400 text-primary-foreground font-bold"
                    >
                      Accept All
                    </Button>
                  </div>
                </div>

                {/* Privacy Policy Link */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-white/60">
                    <Shield className="w-4 h-4" />
                    <span>
                      Learn more about how we protect your data in our{' '}
                      <a href="/privacy-policy" className="text-primary hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Helper function to check if user has given consent
export function hasUserConsent(): boolean {
  const consent = localStorage.getItem('cookie_consent');
  return consent === 'all' || consent === 'essential';
}

// Helper function to check if analytics is enabled
export function hasAnalyticsConsent(): boolean {
  const consent = localStorage.getItem('cookie_consent');
  return consent === 'all';
}



