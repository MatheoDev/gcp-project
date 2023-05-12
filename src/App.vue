<script>
export default {
  name: 'App',
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">GCP</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
