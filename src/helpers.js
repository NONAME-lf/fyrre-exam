  export function getImagePath(path) {
      const url = new URL(path,
          import.meta.url).href;
      return url;
  }