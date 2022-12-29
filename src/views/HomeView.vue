<template>
  <div class="content-wrapper">
    <span class="title">С Новым 2023 Годом!</span> 

    <p class="inspiring-text" v-if="showInspText">
      Время идет и мы меняемся, но вместе с нами природа тоже 
      претерпевает определенные изменения. Каждый момент уникален и ценен, но особенно 
      ценным его делает тот факт, что его прожили мы. Ниже можно увидеть подборку таких 
      моментов  
    </p> 
    <span class="title photo">Фото альбом этого года</span> 
    <Cards /> 
  </div>
</template> 

<script>
import Cards from '@/components/Cards.vue'; 
export default {
  name: 'HomeView', 
  data() {
    return {
      showInspText: false 
    }
  }, 
  created() {
    this.showInspText = true
  }, 
  components: {
    Cards 
  }
}
</script> 

<style lang="scss" scoped> 
.content-wrapper {
  display: flex; 
  justify-content: center; 
  align-items: center;
  flex-direction: column; 
  width: 100%; 
  height: 100%; 
  z-index: 4; 

  .title { 
    margin-top: 35px;
    color: white; 
    text-shadow: 0 0 7px white; 
    text-align: center; 
    font-size: 50px; 
    font-weight: 500; 
    font-family: 'Montserrat', sans-serif; 
  }
  .photo { 
    position: relative; 
    text-shadow: 0 0 2px white; 
    font-size: 35px; 

    &::after {
      content: ''; 
      position: absolute; 
      bottom: 0; 
      left: 0; 
      background-color: rgb(151, 151, 151); 
      box-shadow: 0 0 2px rgb(151, 151, 151); 
      width: 100%; 
      height: 2px; 
    }
  }

  .inspiring-text { 
    width: 70%; 
    color: white; 
    margin-top: 35px; 
    font-family: 'Montserrat', sans-serif;
    border-width: 8px; 
    border-top: solid rgba(150, 150, 150, 0.8);  
    border-left: solid rgba(121, 121, 121, 0.8);
    padding: 10px; 
  }

  .line {
    width: 70%; 
    height: 2px; 
    background-color: gray; 
    margin-top: 20px; 
  }
}


@media screen and (max-width: 670px)  {
  .content-wrapper {
    .title {
      font-size: 40px; 
    }
    .photo {
      font-size: 30px;
    }
  }
}

@media screen and (max-width: 500px)  {
  .content-wrapper {
    .title {
      font-size: 30px; 
    }
    .photo {
      font-size: 20px;
    }
  }
}

</style>
