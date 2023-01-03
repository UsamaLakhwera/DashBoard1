import { ConfigEnum, IServerConfig } from '@lib/types';
import { registerAs } from '@nestjs/config';

export default registerAs(ConfigEnum.SERVER, (): IServerConfig => ({
  port: parseInt(process.env.BACKEND_APP_PORT) || 5500,
  admin: {
    userName: process.env.ADMIN_USERNAME || 'admin',
    email: process.env.ADMIN_EMAIL || 'admin@example.com',
    firstName: process.env.ADMIN_FIRST_NAME || 'Super',
    lastName: process.env.ADMIN_LAST_NAME || 'Admin',
    password: process.env.ADMIN_PASSWORD || 'adminPassword',
  }
}));
