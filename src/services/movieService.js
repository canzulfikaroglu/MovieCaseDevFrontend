import axios from 'axios';

const API_BASE_URL = 'https://localhost:7070';

export async function fetchMovies(pagenumber) {


  try {
    const response = await axios.get(`${API_BASE_URL}/api/movies?page=${pagenumber}`, {
    });
    console.log("serviseden gelen"+ response.data);
    return response.data;
    
  } catch (error) {
    console.error('Failed to fetch movies:', error);
    throw error;
  }
}
export async function fetchMovieDetails(movieId) {
  try {
    const response = await fetch(`https://localhost:7070/api/movies/${movieId}/details`);
    if (!response.ok) {
      throw new Error('API isteği başarısız');
    }
    const data = await response.json();
    return data; // Film detaylarını döndürüyoruz
  } catch (error) {
    console.error('Film detayları alınırken bir hata oluştu:', error);
    throw error; // Hata oluşursa dışarıya atıyoruz
  }
  
}
export async function submitMovieRating(Id, payload, accessToken) {
  try {
    const response = await fetch(`https://localhost:7070/api/movies/${Id}/rate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`
      },
      body: JSON.stringify(payload)
    });
    if (!response.ok) {
      throw new Error('Puan gönderilemedi');
    }

      // Yanıt tipi JSON değilse .json() çağırma
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return await response.json();
    } else {
      return await response.text(); // "Puan eklendi." gibi düz metni al
    }

  } catch (error) {
    console.error('POST isteği başarısız:', error);
    throw error;
  }
}
export async function recommendMovieByEmail(movieId, email) {
  try {
    const response = await fetch(`https://localhost:7070/api/email/${movieId}/recommend`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (!response.ok) {
      throw new Error('Mail gönderilemedi');
    }

    return await response.text(); // "Email gönderildi." gibi düz metin dönecek
  } catch (error) {
    console.error('Mail gönderme hatası:', error);
    throw error;
  }
}