  export function getImagePath(path) {
      const url = new URL(`./assets/img/${path}`,
          import.meta.url).href;
      return url;
  }