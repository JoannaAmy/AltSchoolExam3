<template>
    <main class="container">
    <div class="notFound">
        <img src="@/assets/404.png" alt="404" />
        <!-- <h1>Page not found</h1>
        <p>The page you are looking can not be found</p> -->
    </div>
    </main>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 768px) {
  .container {
    padding: 10px;
  }
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  .container {
    padding: 15px;
  }
}

@media screen and (min-width: 993px) {
  .container {
    padding: 20px;
  }
}
</style>
