<template>
  <div id="app"> 
    <router-view/>
  </div>
</template>

<style lang="scss"> 
* {
  margin: 0; 
  padding: 0;
  box-sizing: border-box; 

  ::-webkit-scrollbar {
    display: none; 
  }
} 

body {
  position: relative; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background: url('@/assets/santa-bg3.png') center/100% 110% no-repeat; 
  background-attachment: fixed;
  z-index: 1; 

  &::after {
    content: ''; 
    position: absolute; 
    top: 0; 
    left: 0; 
    width: 100vw; 
    min-height: 100vh;
    height: 100%; 
    background: rgba(0, 0, 0, 0.7); 
    z-index: 2; 
  }
} 

#app { 
  display: flex; 
  justify-content: center; 
  width: 70%; 
  max-width: 700px;
  min-height: 100vh; 
  height: 100%; 
  z-index: 3; 
}

@media screen and (max-width: 1000px) {
  body {
    background-image: url('@/assets/santa-bg.png'); 
  }
}

@media screen and (max-width: 800px) {
  #app {
    width: 90%; 
  }
}

@media screen and (max-width: 670px) {
  body {
    background-image: url('@/assets/santa-bg2.png'); 
  }

  #app {
    width: 100%; 
  }
}

@media screen and (max-width: 500px) {
  body {
    background-image: url('@/assets/phone-bg.jpg'); 
  }
}
</style>

<style> 
/* all used fonts */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap'); 
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap'); 
</style>