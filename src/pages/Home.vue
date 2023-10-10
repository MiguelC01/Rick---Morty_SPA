<template>
        <div>
          <input 
      type="text" 
      v-model="search" 
      placeholder="Search" class="rounded-3xl bg-black text-white w-1/4 h-10 p-5" >
      <router-link to="/post/{{ character.id }}" >
      <div class="grid gap-4 grid-cols-2 grid-rows-3 w-4/4 p-10 text-white  ">
      <div class=" rounded-md bg-slate-800 w-3/5 h-4/4 p-5 hover:bg-slate-400 active:bg-slate-500 focus:outline-none focus:ring focus:ring-slate-300 " 
      v-for="character in filterSearch" 
      :key="character.id">
        <div class="character">
            <img :src="character.image" alt="" class="w-2/4 h-2/4 rounded-md" >
            <div class="info-character">
              <h2 class="">Name: {{ character.name}}</h2>
              <h4>Species: {{ character.species}}</h4>
              <h4>Location: {{ character.location.name}}</h4>
              <h4>Created: {{ character.created}}</h4>
            </div>
          </div>
      </div>
    </div>
  </router-link>
    </div>
  
  </template>
  
  <script>
  import axios from "axios";
  //const API_URL = "https://rickandmortyapi.com/api/character";
  
  export default {
    name: 'HomePage',
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
  