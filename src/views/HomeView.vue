<script>
import TheWelcome from '../components/TheWelcome.vue'

export default {
  name: 'HomeView',
  components: {
    TheWelcome
  },
  mounted() {
    this.$store.dispatch('fetchQuesttion')
  }
}

</script>

<template>
  <main>
    {{ $store.state.questions }}
    <TheWelcome />
  </main>
</template>
