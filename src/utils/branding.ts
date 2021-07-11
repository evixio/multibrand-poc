import { FlexStyle, TextStyle } from 'react-native';
import DeviceInfo from 'react-native-device-info';

export enum Brand {
  'Default' = 'default',
  'Telenet' = 'telenet',
  'VRT' = 'vrt',
  'VTM' = 'vtm',
}

class BrandingUtil {
  private get bundleId() {
    return DeviceInfo.getBundleId();
  }

  public get activeBrand(): Brand {
    switch (this.bundleId) {
      case 'io.evix.multibrand.telenet':
        return Brand.Telenet;
      case 'io.evix.multibrand.vrt':
        return Brand.VRT;
      case 'io.evix.multibrand.vtm':
        return Brand.VTM;
    }

    return Brand.Default;
  }
}

const Branding = new BrandingUtil();

export const activeBrand = Branding.activeBrand;

export const contextualStyles = (
  brand: Brand,
  styles: FlexStyle | TextStyle,
) => {
  if (brand !== activeBrand) {
    return {};
  }

  return styles;
};
