<template>
    <div class="">
        <div class="grid gap-4 grid-cols-2 grid-rows-3 w-4/4 h-auto p-10 text-white">
            <div class=" rounded-md bg-slate-800 w-3/5 h-4/4 p-5"  
            :key="character.id">
                <div class="character h-auto w-auto">
                    <img :src="character.image" alt="" class="w-2/4 h-2/4 rounded-md" >
                    <div class="h-auto w-auto">
                        <h2 class="">Name: {{ character.name}}</h2>
                        <h4>Specie: {{ character.species}}</h4>
                        <h4>Location: {{ character.location.name}}</h4>
                        <h4>Created: {{ character.created}}</h4>
                        <h4>Episodes where appear: {{ character.episode}}</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
//const API_URL = "https://rickandmortyapi.com/api/character";

export default {
    
  name: 'HomePage',
  props: ["id"],
  components: {
},
  data(){
    return{
      title: "Rick & Morty",
      post: {},
      characters: []
    }
  },
  mounted(){
    this.getTodos();
  },
  
  methods:{
    getTodos(){
      axios
      .get(`https://rickandmortyapi.com/api/character/${this.id}`)
      .then(response =>{
        (this.post = response.data.results)
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
  created(){
    this.getPost();
  },
}
</script>
