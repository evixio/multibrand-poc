import DeviceInfo from 'react-native-device-info';

export enum Brand {
  'Default' = 'default',
}

class Config {
  get bundleId() {
    return DeviceInfo.getBundleId();
  }

  get brand(): Brand {
    // switch (this.bundleId) {
    //   case 'io.evix.multibrand.something...'
    // }

    return Brand.Default;
  }
}

const DynamicConfig = new Config();

export default DynamicConfig;
