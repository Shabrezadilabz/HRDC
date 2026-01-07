import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Chrome, Mail, User, Phone } from 'lucide-react';

export function GoogleSignIn() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    
    // This would integrate with Google OAuth
    // User clicks "Allow" and we get: name, email, profile picture
    // Note: Phone number requires additional permission
    
    try {
      // Example using Google OAuth (requires setup)
      // window.google.accounts.oauth2.initTokenClient({
      //   client_id: 'YOUR_GOOGLE_CLIENT_ID',
      //   scope: 'email profile',
      //   callback: (response) => {
      //     // User granted permission!
      //     // Fetch user info from Google
      //     fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
      //       headers: { Authorization: `Bearer ${response.access_token}` }
      //     })
      //     .then(res => res.json())
      //     .then(data => {
      //       // ✅ We now have: data.name, data.email, data.picture
      //       console.log('User info:', data);
      //     });
      //   }
      // }).requestAccessToken();
      
      console.log('Google Sign-In would trigger here');
    } catch (error) {
      console.error('Sign-in failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Button
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      variant="outline"
      className="w-full border-white/20 text-white hover:bg-white/10 flex items-center gap-3"
    >
      <Chrome className="w-5 h-5" />
      {isLoading ? 'Connecting...' : 'Continue with Google'}
    </Button>
  );
}

// Alternative: Facebook Login
export function FacebookSignIn() {
  const handleFacebookSignIn = () => {
    // Facebook Login SDK
    // User clicks "Continue as [Name]"
    // We get: name, email (if user allows), profile picture
    
    console.log('Facebook Sign-In would trigger here');
  };

  return (
    <Button
      onClick={handleFacebookSignIn}
      variant="outline"
      className="w-full border-white/20 text-white hover:bg-white/10 flex items-center gap-3 bg-blue-600 hover:bg-blue-700"
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
      Continue with Facebook
    </Button>
  );
}


