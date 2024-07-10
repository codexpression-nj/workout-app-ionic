import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.workout',
  appName: 'workout',
  webDir: 'www',
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '666786629384-e1mk0ddkessr2scq4utmb5v3i93pac2j.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
  },
};

export default config;
