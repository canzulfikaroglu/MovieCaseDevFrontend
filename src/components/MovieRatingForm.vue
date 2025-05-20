<template>
  <form class="rating-form" @submit.prevent="submitRating">
    <h3>Filme Puan Ver ve Yorum Yap</h3>

    <div class="form-group">
      <label for="score">Puan (1-10):</label>
      <InputNumber
        id="score"
        v-model="rating.score"
        :min="1"
        :max="10"
        required
        showButtons
        class="w-full"
      />
    </div>

    <div class="form-group">
      <label for="note">Yorum:</label>
      <Textarea
        id="note"
        v-model="rating.note"
        required
        autoResize
        class="w-full"
        rows="3"
        placeholder="Yorumunuzu yazın..."
      />
    </div>

    <Button type="submit" label="Gönder" severity="success" />
  </form>
</template>

<script setup>
import { ref } from 'vue'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'
import { useAuth0 } from '@auth0/auth0-vue'
import { submitMovieRating } from '@/services/movieService'

const props = defineProps({
  movieId: Number,
  onRatingSubmitted: Function
})

const rating = ref({
  score: 1,
  note: ''
})

const { getAccessTokenSilently } = useAuth0()

const submitRating = async () => {
  try {
    const token = await getAccessTokenSilently()
    await submitMovieRating(props.movieId, rating.value, token)

    rating.value.score = 1
    rating.value.note = ''

    if (props.onRatingSubmitted) {
      await props.onRatingSubmitted()
    }
  } catch (err) {
    console.error('Puan gönderme hatası:', err)
  }
}
</script>

<style scoped>
.rating-form {
  margin-top: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>
