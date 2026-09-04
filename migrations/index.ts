import * as migration_20260819_123034 from './20260819_123034';
import * as migration_20260820_025508 from './20260820_025508';
import * as migration_20260820_035146 from './20260820_035146';
import * as migration_20260820_040427 from './20260820_040427';
import * as migration_20260904_083251_add_media_pref from './20260904_083251_add_media_pref';

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
    name: '20260820_035146',
  },
  {
    up: migration_20260820_040427.up,
    down: migration_20260820_040427.down,
    name: '20260820_040427',
  },
  {
    up: migration_20260904_083251_add_media_pref.up,
    down: migration_20260904_083251_add_media_pref.down,
    name: '20260904_083251_add_media_pref'
  },
];
