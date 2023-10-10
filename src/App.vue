<template>
<div id="app">
  <header><h1>{{  title }}</h1></header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <div class="calculadora">
      <div class="talla-output">
        <h2>{{  }}</h2>
      </div>
      <div class="entradas">
        <div class="altura">
          <input type="text" class="Altura" placeholder="Altura(cm) " v-model="height">
        </div>
        <div class="altura">
          <input type="text" class="Edad" placeholder="Edad(Exacta)" v-model="age">
        </div>
        <div class="altura">
          <input type="text" class="Peso" placeholder="Peso(Kg)" v-model="weight">
        </div>
      </div>
    </div>
</div>
</template>
<script>
  export default {
    name: "app",
    data() {
      return {
      title: "Calculadora de tallas",
      age: "",
      weight: "",
      height: "",
      };
    },
    mounted(){
      this.getTalla();

    },
    methods: {
      getTallas(){
        
      } 
    }
  };
</script>

