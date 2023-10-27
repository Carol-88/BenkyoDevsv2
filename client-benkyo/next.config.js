// next.config.js
module.exports = {
    async redirects() {
      return [
        {
          source: '/loginpage',
          destination: '/loginpage', // La ruta de destino debe ser tu archivo de página real para el inicio de sesión
          permanent: true,
        },
        {
          source: '/register',
          destination: '/register', // La ruta de destino debe ser tu archivo de página real para el registro
          permanent: true,
        },
      ];
    },
  };
  