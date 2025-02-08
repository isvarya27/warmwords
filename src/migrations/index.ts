import * as migration_20250208_220530 from './20250208_220530';

export const migrations = [
  {
    up: migration_20250208_220530.up,
    down: migration_20250208_220530.down,
    name: '20250208_220530'
  },
];
