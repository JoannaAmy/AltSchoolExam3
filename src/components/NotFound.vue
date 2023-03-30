<template>
    <div class="notFound">
        <h1>404</h1>
        <img src="@/assets/404.png" alt="404" />
        <h2>Page not found</h2>
        <p>The page you are looking can not be found</p>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.notFound{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-color: #f5f5f5; */
    flex-wrap:wrap ;
    width : 500px; 
    height : 250px;
}

.notFound img{
  width: 100%;
  height: 100%;
}
</style>