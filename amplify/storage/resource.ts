import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'websiteDrive',
  access: (allow) => ({
    'website-folder/*': [
        allow.guest.to(['read']),
    ],
  })
});