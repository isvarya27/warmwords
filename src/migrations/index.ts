import * as migration_20250208_202019_migration from './20250208_202019_migration';

export const migrations = [
  {
    up: migration_20250208_202019_migration.up,
    down: migration_20250208_202019_migration.down,
    name: '20250208_202019_migration'
  },
];
