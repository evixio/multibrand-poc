import { create } from 'tailwind-rn';
import Branding, { Brand } from 'utils/branding';

import baseConfig from './config/base.json';
import defaultConfig from './config/default.json';
import telenetConfig from './config/telenet.json';

export const { tailwind, getColor } = create({
  ...baseConfig,
  ...defaultConfig,
  ...(Branding.brand === Brand.Telenet ? telenetConfig : {}),
});
