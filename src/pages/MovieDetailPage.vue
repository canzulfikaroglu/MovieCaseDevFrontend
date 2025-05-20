<template>
  <div>
    <Navbar />
  </div>
  <div v-if="movie.originalTitle" class="movie-details">
    <Button
      label="⬅ Geri Dön"
      icon="pi pi-arrow-left"
      @click="goBack"
      severity="secondary"
      class="mb-4"
    />
    <MovieInfoCard :movie="movie" />
    <MovieCommentsList :ratings="movie.allRatings" />
    <MovieRatingForm :movieId="movie.id" :onRatingSubmitted="loadMovie" />
    <MovieRecommendForm :movieId="movie.id" />
  </div>
  <div v-else class="loading">Yükleniyor...</div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { fetchMovieDetails } from '@/services/movieService'
import Navbar from '@/components/Navbar.vue'
import MovieRatingForm from '@/components/MovieRatingForm.vue'
import MovieRecommendForm from '@/components/MovieRecommendForm.vue'
import MovieCommentsList from '@/components/MovieCommentsList.vue'
import MovieInfoCard from '@/components/MovieInfoCard.vue'
const router = useRouter()
const route = useRoute()
const movie = ref({})
const goBack = () => {
  router.back()
}
const loadMovie = async () => {
  try {
    const data = await fetchMovieDetails(route.params.id)
    movie.value = data
  } catch (error) {
    console.error('Film detayları alınırken hata oluştu:', error)
  }
}
onMounted(() => {
  loadMovie()
})
</script>
<style scoped>
.movie-details {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1.5rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
}
.loading {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;
  color: #666;
}
</style>
