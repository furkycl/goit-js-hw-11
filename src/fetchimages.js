const API_KEY = '50302681-206249c251fc1642a903456bf';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchimages(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => data.hits);
}
