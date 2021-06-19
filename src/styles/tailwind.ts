import { create } from 'tailwind-rn';

import baseConfig from './config/base.json';

export const { tailwind, getColor } = create({ ...baseConfig });
