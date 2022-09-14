<template>
  <div class="movie-box">
    <a @click.stop="detailMove">
    <h2 class="a-title">{{item.title}} <small>{{item.original_title}}</small></h2>
    <div class="a-img">
    <img :src="item.image">
    </div>
    <p class="a-desc">{{item.description}}</p>
    </a>
  </div>
</template>

<script>
// router를 이용한 페이지 이동
import {useRouter} from 'vue-router'
export default {
  props : ['item'],
  setup(props){
    const router = useRouter()
    const detailMove = () => {
      //props를 참조하고자 할 때, setup(props)를 활용
      router.push('/detail/' + props.item.id)
    }
    return{
detailMove
    }
  }
}
</script>

<style scoped>
.movie-box{
  position: relative;
  display: block;
}
.movie-box a{
}
.a-img{
  position: relative;
  display: block;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 30px;
}
.a-img img{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  width: 100%;
}
.a-title{
  text-align: center;
  margin-bottom: 30px;
  font-size: 30px;
}
.a-title small{
  display: block;
  float: right;
  color: #999;
  font-size: 14px;
  margin-top: 10px;
}
.a-desc{
  position: relative;
  display: block;
  margin-bottom: 20px;
  font-size: 12px;
  line-height: 1.25;
  color: #333;
}
</style>