<script setup lang="ts">
import { ref, onMounted } from 'vue'

const texts = [
  '👋 Hello, Energizer!',
  "G'Day Boss!",
  "What's our plan for today? ☺️",
  'Keep it going!',
  'Hello sunshine! ☀️',
]

const randomText = ref<string>('')

const getRandomText = () => {
  const randomIndex = Math.floor(Math.random() * texts.length)
  randomText.value = texts[randomIndex]
}

onMounted(() => {
  getRandomText()
})
</script>

<template>
  <h1>{{ randomText }}</h1>
</template>

<style scoped>
h1 {
  font-size: 24px;
  font-weight: 700;
  line-height: 32.69px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #494955;
}
</style>
