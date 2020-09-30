// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  // API
  pokeApi: 'https://pokeapi.co/api/v2',

  // Páginas de referencias
  homeAngular: 'https://angular.io/',
  homePokeApi: 'https://pokeapi.co/',

  // Redes sociales
  keilerLinkedin: 'https://www.linkedin.com/in/keilermora/',
  pokedexGithub: 'https://github.com/keilermora/pokedex',

  // Ruta a la carpeta de imágenes que no están asociadas directamente a la plantilla
  imagesPath: '/assets/images',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.