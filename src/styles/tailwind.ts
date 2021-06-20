import DynamicConfig, { Brand } from 'dynamic-config';
import { create } from 'tailwind-rn';

import baseConfig from './config/base.json';
import defaultConfig from './config/default.json';

export const { tailwind, getColor } = create({
  ...baseConfig,
  ...(DynamicConfig.brand === Brand.Default ? defaultConfig : {}),
});
