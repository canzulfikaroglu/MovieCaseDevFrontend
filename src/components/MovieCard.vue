<template>
  <Card class="movie-card max-w-sm" @click="handleClick">
    <template #title>
      {{ title }}
    </template>
    <template #content>
      <p class="text-sm text-gray-600">{{ overview }}</p>
    </template>
  </Card>
</template>

<script setup>
const props = defineProps({
  id: Number,
  title: String,
  overview: String
})

const emit = defineEmits(['movie-clicked'])
function handleClick() {
  emit('movie-clicked', props.id)
}
</script>

<style scoped>
.movie-card {
  cursor: pointer;
  transition: transform 0.2s ease;
}
.movie-card:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
}
</style>
