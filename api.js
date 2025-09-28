const API_KEY = "AIzaSyD99Yk0r5EUMedt8OVJM6NCOS_Cb_e6RI8";
const API_URL = "https://www.googleapis.com/books/v1/volumes";

export async function fetchBooks(category, startIndex = 0, maxResults = 6) {
  const url = `${API_URL}?q=subject:${encodeURIComponent(category)}&startIndex=${startIndex}&maxResults=${maxResults}&key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.items || [];
}
