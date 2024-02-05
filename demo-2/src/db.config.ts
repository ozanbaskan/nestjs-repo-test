import { User } from './modules/user/models/user.model';

export const dbConfig = {
  dialect: 'postgres',
  host: '127.0.0.1',
  port: 5432,
  username: 'elkaso_user',
  password: 'ELKASO@4444',
  database: 'elkaso_dev',
  logging: true,
  models: [User],
  retryAttempts: 5,
  retryDelay: 3000,
  define: {
    underscored: true,
    timestamps: true,
    paranoid: true,
    freezeTableName: false,
  },
  pool: {
    max: 10,
    min: 5,
    acquire: 15000,
    idle: 5000,
  },
  benchmark: false,
  synchronize: false,
};
