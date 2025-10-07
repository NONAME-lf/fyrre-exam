  export function getImagePath(path) {
      const url = new URL(`./assets/img/${path}`,
          import.meta.url).href;
      return url;
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