<script>
export default {
  name: 'HomeView',
  mounted() {
    this.$store.dispatch('fetchQuesttion')
  }
}

</script>

<template>
  <main>
    {{ $store.state.questions }}
  </main>
</template>
