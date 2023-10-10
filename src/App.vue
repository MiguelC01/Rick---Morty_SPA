<template>

  <div id="app" >
    <header class="bg-gray-900 text-white">
      <H1 class="text-2xl font-bold p-4">{{ title }}</H1></header>
      <nav class="bg-gray-800 text-white font-bold">
        <ul class="flex">
          <li class="p-4">
            <router-link to="/">Inicio</router-link>
          </li>
          <li class="p-4">
            <router-link to="/acerca-de">Acerca de</router-link>
          </li>
        </ul>
      </nav>
      </div>
    <div class="p-10 items-center	">
    <router-view></router-view>
  </div>

</template>

<script>
import axios from "axios";
//const API_URL = "https://rickandmortyapi.com/api/character";

export default {
  name: 'App',
  components: {
},
  data(){
    return{
      title: "Rick & Morty",
      search: '',
      characters: []
    }
  },
  mounted(){
    this.getTodos();
  },
  
  methods:{
    getTodos(){
      axios
      .get('https://rickandmortyapi.com/api/character')
      .then(response =>{
        (this.characters = response.data.results)
      })
    },
  },
  computed: {
    filterSearch(){
      return this.characters.filter((character) => {
        return character.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },


}
</script>
