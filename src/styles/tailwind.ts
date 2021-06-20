import DynamicConfig, { Brand } from 'dynamic-config';
import { create } from 'tailwind-rn';

import baseConfig from './config/base.json';
import defaultConfig from './config/default.json';
import telenetConfig from './config/telenet.json';

export const { tailwind, getColor } = create({
  ...baseConfig,
  ...defaultConfig,
  ...(DynamicConfig.brand === Brand.Telenet ? telenetConfig : {}),
});
