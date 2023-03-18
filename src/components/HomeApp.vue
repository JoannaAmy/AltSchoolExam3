<template>
    <main>
        <h1>Home</h1>
        <p>
      This is a simple counter app built with Vue 3 and performs Increment, Decrement and Reset operations. 
        </p>
        <div class="btn">
        <button class="btn-link" ><router-link to="/counter">COUNTER</router-link>
        </button>
        <button type='btn-link' class='btn-link'><a href='https://www.github.com/joannaamy'>GITHUB</a> 
        </button>
    </div>
    </main>
</template>

<script>
export default {
    name: 'HomeApp'
    
}
</script>

<style>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;
    width: 100%;
    background-color: inherit;
    margin: 0 auto;
    font-family:monospace;
    font-size: 1.5rem;
    font-weight: 500;    
    gap: 20px;
    padding: 100px;
}
h1{
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
p{
    margin-bottom: 1rem;
    font-family: monospace;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
}
.btn{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.btn-link{
    color: #fff;
    border: 1px solid #B10DC9;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: 500;
    background-color: #B10DC9;
    font-family: monospace;
    cursor: pointer;
}
/* .btn-link:hover{
    background-color: #fff;
    color: #B10DC9;
    border: 1px solid #B10DC9;
} */
.btn-link a{
    text-decoration: none;
    background-color: #B10DC9;
    /* border: 2px solid red; */
    /* color: inherit; */
}
/* .btn-link a:hover{
    background-color: #fff;
} */

</style>