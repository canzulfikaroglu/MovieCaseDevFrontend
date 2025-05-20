<template>
  <div class="movie-grid">
    <MovieCard 
      v-for="movie in movies" 
      :key="movie.id"
      :id="movie.id"
      :title="movie.originalTitle" 
      :overview="movie.overview" 
      @movie-clicked="handleMovieClick"
    />
  </div>
  <div class="pagination-controls">
    <Button label="Geri" @click="previousPage" :disabled="currentPage === 1" />
    <span>Sayfa: {{ currentPage }}</span>
    <Button label="İleri" @click="nextPage" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import MovieCard from '@/components/MovieCard.vue'
import { fetchMovies } from '../services/movieService'
import Button from 'primevue/button'

const props = defineProps({initialPage: {type: Number,default: 1}})
const emit = defineEmits(['movie-clicked','page-change'])
const movies = ref([])
const currentPage = ref(props.initialPage)
function handleMovieClick(movieId) {
  emit('movie-clicked', movieId)
}
onMounted(async () => {
  try {
    const data = await fetchMovies(currentPage.value)
    movies.value = data
  } catch (error) {
    console.error('Veri çekme hatası:', error)
  }
})
const nextPage = async () => {
   currentPage.value += 1
  await loadPage(currentPage.value)
  emit('page-change', currentPage.value)
}
const previousPage = async () => {
   if (currentPage.value > 1) {
    currentPage.value -= 1
    await loadPage(currentPage.value)
    emit('page-change', currentPage.value)
  }
}
emit('page-change', currentPage.value)
async function loadPage(page) {
  movies.value = []
  try {
    const data = await fetchMovies(page)
    movies.value = data
  } catch (error) {
    console.error("Veri çekme hatası:", error)
  }
}
</script>

<style scoped>
.movie-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
  justify-items: center;
}
.pagination-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
}
</style>
