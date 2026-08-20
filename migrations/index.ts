import * as migration_20260819_123034 from './20260819_123034';
import * as migration_20260820_025508 from './20260820_025508';
import * as migration_20260820_035146 from './20260820_035146';

export const migrations = [
  {
    up: migration_20260819_123034.up,
    down: migration_20260819_123034.down,
    name: '20260819_123034',
  },
  {
    up: migration_20260820_025508.up,
    down: migration_20260820_025508.down,
    name: '20260820_025508',
  },
  {
    up: migration_20260820_035146.up,
    down: migration_20260820_035146.down,
    name: '20260820_035146'
  },
];
