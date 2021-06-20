import DeviceInfo from 'react-native-device-info';

export enum Brand {
  'Default' = 'default',
  'Telenet' = 'telenet',
}

class Config {
  get bundleId() {
    return DeviceInfo.getBundleId();
  }

  get brand(): Brand {
    switch (this.bundleId) {
      case 'io.evix.multibrand.telenet':
        return Brand.Telenet;
    }

    return Brand.Default;
  }
}

const DynamicConfig = new Config();

export default DynamicConfig;
