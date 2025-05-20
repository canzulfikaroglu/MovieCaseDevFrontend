<template>
  <div class="movie-info-card">
    <h2>{{ movie.originalTitle }}</h2>
    <p class="overview">{{ movie.overview }}</p>
    <p><strong>Yayın Tarihi:</strong> {{ formatDate(movie.releaseDate) }}</p>
    <p><strong>Ortalama Puan:</strong> {{ movie.averageScore?.toFixed(1) }}</p>
    <p><strong>Toplam Oy:</strong> {{ movie.totalRatings }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
})
function formatDate(isoString) {
  return new Date(isoString).toLocaleDateString('tr-TR')
}
</script>
<style scoped>
.movie-info-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
}
.overview {
  margin: 0.75rem 0;
  color: #444;
}
</style>
