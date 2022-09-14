<template>
  <div class="movie-box"
  :style="{backgroundImage: `url(${movieInfo.movie_banner})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center'}"
  >
    <a @click="back" class="a-back">목록 보기</a>
    <div class="movie-detail">
    <img class="movie-image" :src="movieInfo.image" alt="">
    <div class="movie-info-wrap">
    <h2 class="movie-title">{{movieInfo.title}} <small>{{movieInfo.original_title}}</small></h2>
    <p class="movie-info">
      개봉년도 : {{movieInfo.release_date}}년<br>
      Director : {{movieInfo.director}}<br>
      Producer : {{movieInfo.producer}}<br>
      Running Time : {{movieInfo.running_time}}분
    </p>
    <p class="movie-des">Description : {{movieInfo.description}}</p>
    </div>
    
  
      </div>
  </div>
  </template>
  
  <script>
  // router를 통해 전송받은 데이터활용
  import {useRoute, useRouter} from 'vue-router'
  import {useStore} from 'vuex'
  import {computed} from 'vue'
  export default {
  setup(){
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    const id = route.params.id
    store.dispatch('fetchMovieInfo', id)
    const movieInfo = computed(()=>store.getters.getMovieInfo)
    const back = () => {
      router.push('/')
    }
    return{
      id, movieInfo, back
    }
  }
  }
  </script>
  
  <style scoped>
  .movie-box{
    position: relative;
    display: block;
    width: 100%;
  }
  .a-back{
    position: relative;
    display: block;
    cursor: pointer;
    float: right;
    margin-right: 20px;
    padding: 10px;
    border-radius: 5px;
    background: #333;
    color: #fff;
    margin-top: 20px;
    font-size: 16px;
  }
  .movie-detail{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  .movie-image{
    position: relative;
    display: block;
    width: 45%;
    height: auto;
    max-height: 900px;
    border-radius: 10px;
    border: 10px solid #fff;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
              0 8px 16px -8px rgba(0, 0, 0, 0.3), 
              0 -6px 16px -6px rgba(0, 0, 0, 0.025);
  }
  .movie-info-wrap{
    position: relative;
    display: block;
    width: 45%;
  }
  .movie-title{
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
                0 8px 16px -8px rgba(0, 0, 0, 0.3), 
                0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 5px;
    font-size: 20px;
  }
  .movie-title small{
    position: relative;
    display: blcok;
    float: right;
    color: #333;
    font-size: 12px;
  }
  .movie-info{
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
                0 8px 16px -8px rgba(0, 0, 0, 0.3), 
                0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 5px;
    font-size: 14px;
  }
  .movie-des{
    position: relative;
    display: block;
    width: 100%;
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
                0 8px 16px -8px rgba(0, 0, 0, 0.3), 
                0 -6px 16px -6px rgba(0, 0, 0, 0.025);
    border-radius: 5px;
    font-size: 14px;
  }
  @media screen and (max-width: 1000px){
    .movie-image{
      width: 95%;
      margin: 10px 0;
    }
    .movie-info-wrap{
      width: 95%;
      margin: 10px auto;
    }
  }
  </style>