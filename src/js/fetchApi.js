const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

export async function fetchImage(query) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(error => {
      throw error;
    });
}
