  export function getImagePath(path) {
      try {
          const url = new URL(`./assets/img/${path}`,
              import.meta.url).href;
          if (url.includes('undefined')) {
              throw new Error('Image not found');
          }
          return url;
      } catch {
          return new URL('./assets/img/no-image.jpg',
              import.meta.url).href;
      }
  }

  export async function getData() {
      try {
          const response = await fetch(
              `${import.meta.env.BASE_URL}/mocks/data.json`
          );
          if (response.ok) {
              const data = await response.json();
              return data;
          } else {
              throw new Error(
                  "Failed to fetch data, with status: " + response.status
              );
          }
      } catch (error) {
          toast.error("Error occured: " + error.message, {
              theme: "dark"
          });
      }
  };