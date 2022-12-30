<template>
    <div>
      <video :src='require(`@/assets/videos/video(${videoNum}).mp4`)' class="video"></video>
      <div class="controls">
        <div class="controls__play"><img :src='require(`@/assets/videos/${playPauseIconUrl}-circle.png`)' alt="play"></div>
        <div class="controls__propgress">
          <input type="range" class="progress" value="0">
        </div>
        <div class="controls__time">{{ videoEl.minutes }}:{{ videoEl.seconds }}</div>
      </div>
    </div>
</template>

<script> 
export default { 
  data() {
    return {
      minutes: '00', 
      seconds: '00', 
      playPauseIconUrl: 'play' 
    }
  }, 
  props: {
    videoNum: {
        required: true, 
        type: Number 
    }, 
    videoEl: {
        required: true, 
        type: Object 
    }
  },  
  mounted() {
    const videoTag = document.querySelector('.video'); 
    const playPauseTag = document.querySelector('.controls__play'); 
    const progressBar = document.querySelector('.progress'); 
    if (playPauseTag) {
      playPauseTag.addEventListener('click', () => {this.togglePlay(videoTag)}); 
    }
    if (progressBar) {
      progressBar.addEventListener('change', () => {this.setProgressStatus(videoTag, progressBar)})
    }
    if (videoTag) {
        videoTag.addEventListener('click', () => {this.togglePlay(videoTag)}); 
      videoTag.addEventListener('timeupdate', () => {this.timer(videoTag, progressBar)}) 
    }
  },
  methods: {
    togglePlay(video) {  
      if (video.paused) {
        video.play() 
        this.playPauseIconUrl = 'pause' 
      } 
      else {
        video.pause() 
        this.playPauseIconUrl = 'play' 
      }
    }, 
    timer(video, progress) {
      progress.value = (video.currentTime / video.duration) * 100; 

      let curMinutes = Math.floor(video.currentTime / 60) 
      this.videoEl.minutes = curMinutes < 10 ? `0${curMinutes}` : curMinutes 
      let curSeconds = Math.floor(video.currentTime % 60) 
      this.videoEl.seconds = curSeconds < 10 ? `0${curSeconds}` : curSeconds 
    }, 
    setProgressStatus(video, progress) {
      video.currentTime = (progress.value * video.duration) / 100 
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
  margin-top: 20px; 
  gap: 10px; 
  max-height: 100vh; 
  overflow: scroll; 

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

  .player {
    width: 70%; 
    border-radius: 10px; 
    border: 2px solid black; 
    box-shadow: 0 0 3px black; 

    .video {
      max-width: 100%; 
      border-radius: 10px 10px 0 0; 
    } 
    .controls {
      display: flex; 
      align-items: center; 
      gap: 15px; 
      border-radius: 2px 2px 10px 10px; 
      background-color: #0091ea; 
      padding: 5px 10px; 
      margin-top: -5px;  

      .controls__stop { 
        margin-left: 10px; 
        cursor: pointer; 
      }
      .controls__play { 
        cursor: pointer; 

        img {
          max-width: 100%; 
          width: 100%; 
          height: auto; 
        }
      } 
      .controls__time {
        margin-left: auto; 
        font-style: normal; 
        font-weight: 500; 
        font-size: 16px; 
        font-family: 'Comfortaa', cursive; 
        line-height: 10px; 
        color: white; 
        max-width: 15%; 
        width: 15%;
      }
      .controls__propgress {
        display: flex; 
        width: 100%; 
        margin: 0 5px; 
      }
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