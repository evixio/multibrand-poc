import DeviceInfo from 'react-native-device-info';

export enum Brand {
  'Default' = 'default',
  'Telenet' = 'telenet',
}

class BrandingUtil {
  private get bundleId() {
    return DeviceInfo.getBundleId();
  }

  public get activeBrand(): Brand {
    switch (this.bundleId) {
      case 'io.evix.multibrand.telenet':
        return Brand.Telenet;
    }

    return Brand.Default;
  }
}

const Branding = new BrandingUtil();

export const activeBrand = Branding.activeBrand;
