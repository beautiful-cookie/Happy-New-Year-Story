<template>
  <div class="cards-content">

    <div class="card-wrapper" :data-aos='swichAOS(picture)' data-aos-duration="1500" v-for="picture of picturesArr" :key="picture">
      <img :src="require(`../assets/nature-pictures/photo(${picture}).jpg`)" alt="Картинка не загрузилась">
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      picturesArr: [], 
    }
  }, 
  created() {
    this.getPictures()  
  }, 
  methods: {
    getPictures() {
      for (let i = 1; i<15; i++) {
        this.picturesArr.push(i)
      } 
    }, 
    swichAOS(pic) {
      return pic % 2 ? 'fade-down-right' : 'fade-down-left'
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
  margin-top: 5vh; 
  gap: 30px; 
  overflow: scroll; 

  .card-wrapper {
    padding: 8px; 
    border: 2px solid white; 
    border-radius: 5px;
    overflow: scroll; 
    flex: 45%; 
    max-width: 40%; 
    max-height: 300px; 

    img {
      max-width: 100%; 
      max-height: 100%; 
    }
  } 

}

@media screen and (max-width: 400px) { 
  .cards-content {
    .card-wrapper { 
      max-width: 70%; 
      flex: 100%; 
    }
  }
}
</style>

<!-- 
    С начала сентября прошло четыре месяца 

 --> 
