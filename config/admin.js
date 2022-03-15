module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6b8b69f325c2391578b1c836fa3985e4'),
  },
});
