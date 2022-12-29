<template>
  <div class="cards-content">
    <div class="card-wrapper" v-for="picture of picturesArr" :key="picture">
      <img :src="require(`../assets/nature-pictures/photo(${picture}).jpg`)" alt="Картинка не загрузилась">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      picturesArr: [] 
    }
  }, 
  created() {
    this.getPictures()  
  }, 
  methods: {
    getPictures() {
      for (let i = 1; i<13; i++) {
        this.picturesArr.push(i)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.cards-content { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap; 
  width: 100%; 
  margin-top: 20px; 
  gap: 10px; 
  max-height: 100vh; 
  overflow: scroll; 

  .card-wrapper {
    flex: 45%; 
    max-width: 40%; 
    max-height: 300px; 
    padding: 8px; 
    border: 2px solid white; 
    border-radius: 5px;
    overflow: scroll; 

    img {
      max-width: 100%; 
      max-height: 100%; 
    }
  }
}
</style>

<!-- 
    С начала сентября прошло четыре месяца 

 --> 
