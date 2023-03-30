<template>
    <nav>
        <div class="container">
        <div class="name">CountXore</div>
        <div class="links">
        <router-link to="/">HOME</router-link>
        <router-link to="/counter">COUNTER</router-link>
        <router-link to="/contact">CONTACT</router-link>
    </div>
    </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: inherit;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
}
.name{
    font-size: 2rem;
    font-weight: 700;
    margin-right: auto;
    font-family: cursive;
    flex-wrap: wrap;

}
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: inherit;
    padding: 10px;
    width: 100%;
    margin: 0 auto;
}
.links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    font-family: fantasy;
    gap: 10px;
    /* flex-wrap: wrap */

}
.links a{
    text-decoration: none;
    color:inherit;
    font-size: 1.5rem;
    font-weight: 500;
    margin-left: auto;

}
.links a:hover{
    color: #B10DC9;
}

@media screen and (max-width: 768px) {
  .container {
    padding: 5px;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 769px) and (max-width: 992px) {
  .container {
    padding: 5px;
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 993px) {
  .container {
    padding: 20px;
    flex-wrap: wrap;
  }
}
</style>