require('dotenv').config();
const { writeFileSync } = require('fs');
const targetPath = './src/environments/environment.prod.ts';

const fallback = (key) => process.env[key] || '';

const envConfigFile = `
export const environment = {
  production: true,
  emailJsServiceId: '${fallback('EMAILJS_SERVICE_ID')}',
  emailJsTemplateId: '${fallback('EMAILJS_TEMPLATE_ID')}',
  emailJsPublicKey: '${fallback('EMAILJS_PUBLIC_KEY')}',
  baseUrl:'${fallback('BASE_URL')}',
};
`;
writeFileSync(targetPath, envConfigFile);