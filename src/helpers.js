  // To helpers.js
  export function getImagePath(path) {
      console.log('Path: ' + path);

      const url = new URL(path,
          import.meta.url).href;
      console.log(url);

      return url;
  }