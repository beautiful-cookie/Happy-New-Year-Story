<template>
  <div class="content-wrapper">
    <span class="title">С Новым 2023 Годом!</span>
  </div>
</template>

<script>
export default {
  name: 'HomeView', 
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
}


@media screen and (max-width: 670px)  {
  .content-wrapper {
    .title {
      font-size: 40px; 
    }
  }
}

@media screen and (max-width: 500px)  {
  .content-wrapper {
    .title {
      font-size: 30px; 
    }
  }
}

</style>
