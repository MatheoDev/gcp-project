<script setup>
import TheWelcome from '../components/TheWelcome.vue'

document.addEventListener("click", (e) => {
  window.close();
})
</script>

<template>
  <main>
    {{ $store.state.questions }}
    <TheWelcome />
  </main>
</template>
