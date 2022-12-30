<template>
  <div class="video-content">
    <div class="video-wrapper" :data-aos='swichVideosAOS()' data-aos-duration="1400" v-for="video of videosArr" :key="video">
      <video width="320" height="240" controls> 
        <source :src="require(`@/assets/videos/video(${video}).mp4`)" type="video/mp4">
        Похоже твой браузер не поддерживает видео теги 
      </video> 
    </div>

  </div>
</template> 

<script> 
export default {
  data() {
    return {
      videosArr: [], 
      changeVideosAOS: true   
    }
  }, 
  created() { 
    this.getVideos()  
  }, 
  methods: {
    getVideos() {
      for (let i = 1; i<5; i++) {
        this.videosArr.push(i)
      }
    }, 
    swichVideosAOS() {
      this.changeVideosAOS = !this.changeVideosAOS 
      return this.changeVideosAOS ? 'fade-down-left' : 'fade-down-right'
    } 
  }
}
</script>

<style lang="scss" scoped> 
.video-content {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  flex-wrap: wrap; 
  width: 100%; 
  margin-top: 30px; 
  gap: 10px; 

  .video-wrapper {
    flex: 45%; 
    max-width: 40%; 
    padding: 8px; 
    border: 2px solid white; 
    border-radius: 5px;
    overflow: scroll; 
    
    video {
      max-width: 100%; 
      max-height: auto; 
    }
  }
}

@media screen and (max-width: 400px) { 
  .video-content {
    .video-wrapper { 
      max-width: 70%; 
      flex: 100%; 
    }
  }
}
</style>