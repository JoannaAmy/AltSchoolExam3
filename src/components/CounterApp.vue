<template>
  <div class="counter">
    <div class="counterImage">
    <img alt="Counter Image" src="../assets/counter.png" />
    </div>
    <h1 class="counterValue">Counter: {{ count }}</h1>
    

    <div class="btn">
    <button class="btn-increase" @click="increment">
      +
    </button>

    <button class="btn-decrease" @click="decrement">
      -
    </button>
    </div>

    <div class="setValue">
    <input class="input-field" type="number" v-model="value" />
    </div>

    <div class="btn">
    <input class="submit" type="submit" @click="setValue(value)" value="SET VALUE">
    
    <button class="btn-reset" @click="reset">
      RESET
    </button>
    </div>

    
    
  </div>
</template>

<script>
import useCounter from "../composables/counter";

export default {
  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    let value = "";

    return {
      count,
      increment,
      decrement,
      reset,
      value,
      setValue,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.btn-increase{
  width: 100px;
  height: 50px;
  border-radius: 12px;
  background-color:#B10DC9;
  color: white;
  font-size: 2.5rem;
}
.btn-increase:hover{
  background-color: rgb(119, 3, 3);
  color: azure;
}
.btn-decrease{
  width: 100px;
  height: 50px;
  border-radius: 12px;
  background-color:#B10DC9;
  color: white;
  font-size: 2.5rem;
}
.btn-decrease:hover{
  background-color: rgb(119, 3, 3);
  color: azure;
}
.counterValue{
  margin: 5px;
  padding: 5px;
  font-size: 2rem;
}

.setValue{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
}
input{
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color:#B10DC9;
  color: black;
  font-size: 20px;
  margin: 20px 0 20px 0;
  padding: 10px;
}
.input-field{
  width: 300px;
  height: 30px;
  border-radius: 10px;
  background-color: azure;
  /* background-color: rgb(119, 3, 3); */

  /* margin: 0 10px 0 0; */
  padding: 20px;
}
input:hover{
  background-color: rgb(119, 3, 3);
  color: azure;
}
.submit{
  width: 100px;
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  background-color:#B10DC9;
  color: white;
  font-size: 1rem;
  padding: 10px;
}
.submit:hover{
  background-color: rgb(119, 3, 3);
  color: azure;
}
.btn-reset{
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background-color:#B10DC9;
  color: white;
  font-size: 1rem;
}
.btn-reset:hover{
  background-color: rgb(119, 3, 3);
  color: azure;
}
.counterImage{
  width : 500px; 
  height : 250px;
}
.btn{
  margin: 20px 0 0;
}

.counterImage img{
  width: 100%;
  height: 100%;
}
.counter{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  flex-wrap: wrap;
}



</style>
