export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  orgSlug: process.env.ORG_SLUG,
  baseEndpoint: process.env.BASE_ENDPOINT,
  scope: process.env.SCOPE,
});
