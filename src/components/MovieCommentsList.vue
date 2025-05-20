<template>
  <div class="comments-list">
    <h3>Yorumlar</h3>
    <ul v-if="ratings?.length" class="ratings-list">
      <li v-for="(rating, index) in ratings" :key="index">
        <strong>{{ rating.userEmail }}</strong>:
        <em>{{ rating.score }}/10</em> – "{{ rating.note }}"
      </li>
    </ul>
    <p v-else>Henüz yorum yok.</p>
  </div>
</template>

<script setup>
const props = defineProps({
  ratings: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.comments-list {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
}
.ratings-list {
  margin-top: 1rem;
  padding-left: 1rem;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.ratings-list li {
  background-color: #f0f4f8;
  border-left: 4px solid #2c3e50;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #333;
}
.ratings-list li strong {
  display: block;
  font-weight: bold;
  margin-bottom: 0.25rem;
  color: #2c3e50;
}
.ratings-list li em {
  font-style: normal;
  color: #555;
}
</style>
