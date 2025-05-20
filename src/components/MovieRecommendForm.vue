<template>
  <div class="recommend-form">
    <h3 class="form-title">Bir Arkadaşına Film Öner</h3>
    <div class="form-group">
      <label for="email">E-posta adresi</label>
      <InputText
        id="email"
        v-model="email"
        placeholder="ornek@mail.com"
        type="email"
        required
        class="w-full"
      />
    </div>
    <div class="form-actions">
      <Button label="Öner" severity="info" @click="recommend" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { recommendMovieByEmail } from '@/services/movieService'

const props = defineProps({
  movieId: Number
})
const email = ref('')
const recommend = async () => {
  if (!email.value) return
  try {
    await recommendMovieByEmail(props.movieId, email.value)
    email.value = ''
  } catch (error) {
    console.error(error)
  }
}
</script>
<style scoped>
.recommend-form {
  margin-top: 2rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #2c3e50;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
label {
  font-weight: 500;
  color: #333;
}
.form-actions {
  display: flex;
  justify-content: flex-end;
}
</style>
