import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.biswajit.galaxynextai',
  appName: 'Galaxy Next AI',
  server: {
    url: 'https://galaxy-next-psi.vercel.app',
    cleartext: false
  }
};

export default config;
