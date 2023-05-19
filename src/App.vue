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
        <div class="items">
          <RouterLink to="/">Home</RouterLink>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  background-color: #333;
  padding: 1rem;
}
nav a {
  text-decoration: none;
  color: #fff;
  font-size: 1.1rem;
}
nav a:hover {
  color: #ccc;
}
</style>
