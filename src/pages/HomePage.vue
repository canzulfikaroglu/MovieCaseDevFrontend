<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import Navbar from '@/components/Navbar.vue'
import MovieList from '@/components/MovieList.vue'

const router = useRouter()
const route = useRoute()
const currentPage = computed(() => {
  const p = Number(route.params.page)
  return isNaN(p) || p < 1 ? 1 : p
})
function goToMovieDetails(id) {
  router.push(`/movie/${id}`)
}
function handlePageChange(newPage) {
  router.push(`/${newPage}`)
}
</script>

<template>
  <div class="homepage-container">
    <Navbar />
    <MovieList
      :initialPage="currentPage"
      @movie-clicked="goToMovieDetails"
      @page-change="handlePageChange"
    />
  </div>
</template>
