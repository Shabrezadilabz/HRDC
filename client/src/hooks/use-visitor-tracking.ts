import { useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

// Helper to check if user has given consent
function hasUserConsent(): boolean {
  const consent = localStorage.getItem('cookie_consent');
  return consent === 'all' || consent === 'essential';
}

// Helper to detect browser info
function getBrowserInfo() {
  const ua = navigator.userAgent;
  let browser = 'Unknown';
  let os = 'Unknown';
  let device = 'Desktop';

  // Browser detection
  if (ua.includes('Firefox')) browser = 'Firefox';
  else if (ua.includes('Chrome')) browser = 'Chrome';
  else if (ua.includes('Safari')) browser = 'Safari';
  else if (ua.includes('Edge')) browser = 'Edge';
  else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

  // OS detection
  if (ua.includes('Windows')) os = 'Windows';
  else if (ua.includes('Mac')) os = 'macOS';
  else if (ua.includes('Linux')) os = 'Linux';
  else if (ua.includes('Android')) os = 'Android';
  else if (ua.includes('iOS') || ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';

  // Device detection
  if (/Mobile|Android|iPhone|iPad|iPod/.test(ua)) device = 'Mobile';
  else if (/Tablet|iPad/.test(ua)) device = 'Tablet';

  return { browser, os, device };
}

// Helper to get or create session ID
function getSessionId(): string {
  let sessionId = sessionStorage.getItem('visitor_session_id');
  if (!sessionId) {
    sessionId = nanoid();
    sessionStorage.setItem('visitor_session_id', sessionId);
  }
  return sessionId;
}

export function useVisitorTracking() {
  const hasTracked = useRef(false);

  useEffect(() => {
    // Only track once per session
    if (hasTracked.current) return;
    hasTracked.current = true;

    const trackVisitor = async () => {
      try {
        // Check for consent first
        if (!hasUserConsent()) {
          console.log('⚠️ Visitor tracking skipped - no consent');
          return;
        }

        const { browser, os, device } = getBrowserInfo();
        const sessionId = getSessionId();

        const visitorData = {
          sessionId,
          browser,
          os,
          device,
          userAgent: navigator.userAgent,
        };

        await fetch('/api/visitor-track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(visitorData),
        });
        
        console.log('✅ Visitor tracked with consent');
      } catch (error) {
        console.error('Failed to track visitor:', error);
      }
    };

    // Track after a short delay to not block initial render
    // Also wait a bit for consent banner interaction
    const timeoutId = setTimeout(trackVisitor, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
}

// Function to update visitor with user details (after form submission)
export async function updateVisitorDetails(details: {
  name?: string;
  email?: string;
  phone?: string;
}) {
  try {
    // Check for consent
    if (!hasUserConsent()) {
      console.log('⚠️ Visitor update skipped - no consent');
      return;
    }

    const sessionId = getSessionId();
    const { browser, os, device } = getBrowserInfo();

    await fetch('/api/visitor-track', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...details,
        sessionId,
        browser,
        os,
        device,
      }),
    });
    
    console.log('✅ Visitor details updated');
  } catch (error) {
    console.error('Failed to update visitor details:', error);
  }
}


