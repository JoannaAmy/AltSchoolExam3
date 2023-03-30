<template>
    <nav>
        <div class="name">CountXore</div>
        <div class="links">
        <router-link to="/">HOME</router-link>
        <router-link to="/counter">COUNTER</router-link>
        <router-link to="/contact">CONTACT</router-link>
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
    padding: 5px;
    width: 100%;
    margin: 0 auto;
    margin-top: 0;
}
.name{
    font-size: 2rem;
    font-weight: 700;
    margin-right: auto;
    font-family: cursive;
    flex-wrap: wrap;

}
.links{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
    font-family: fantasy;
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

</style>