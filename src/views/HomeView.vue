<template>
  <div class="content-wrapper">
    <span class="title" data-aos="fade-down" data-aos-duration="1400">С Новым 2023 Годом!</span> 

    <transition name="titleTxt" appear>
      <p class="inspiring-text">
        Время идет. Эту мысль мы часто обдумываем, ощущая неумалимый ход времени, мы вспоминаем
        как недавно только начиналось то, что уже подходит к концу. Так же быстро прошел и этот год, так же 
        быстро пройдет и следующий. Но всегда приятно остановиться и оглянуться назад, в это самое ушедшее прошлое. 
        Мы делаем фотографии и видео именно для таких моментов. Они служат своего рода капсулой времени, запечатавшей в себе 
        памятный осколок минувшего момента, каждый из которых уникален и ценен, именно тем, что его прожили мы. Мы были теми, 
        кто надолго запечатал его в памяти своего телефона, тем самым доказав нескончаемому потоку событий своё существование. 
      </p> 
    </transition> 
    <span class="title photo">Фото альбом этого года</span> 
    <Cards /> 
    <span class="title photo" data-aos="fade-down" data-aos-duration="800">Видео альбом этого года</span> 
    <Videos /> 
    <footer></footer>
  </div>
</template> 

<script>
import Cards from '@/components/Cards.vue'; 
import Videos from '@/components/Videos.vue'; 
export default {
  name: 'HomeView', 
  components: {
    Cards, Videos 
  }, 
}
</script> 

<style scoped>
.titleTxt-enter-active, 
.titleTxt-leave-active {
    transition: all 0.8s; 
}
.titleTxt-enter, 
.titleTxt-leave-to {
    opacity: 0; 
    transform: translateY(-30px);
}
</style>

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
    border-left: solid rgba(109, 109, 109, 0.8);
    padding: 10px; 

  }

  .line {
    width: 70%; 
    height: 2px; 
    background-color: gray; 
    margin-top: 20px; 
  } 

  footer { 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    text-align: center;
    margin-top: 20px; 
    width: 100vw; 
    max-width: 80%; 
    height: 15vh; 
    font-size: 16px; 
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; 
    text-shadow: 0 0 2px white; 
    color: white; 
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
