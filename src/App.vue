<template>
  <div class="wrap">
    <div class="container">
      <Transition name="fade">
      <div class="intro" v-if="show"></div>
      </Transition>
      <RouterView v-on:hide="hideIntro" />
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex';
import { ref } from 'vue';

export default {
  components: {
  },
  setup() {   

    // vuex 에 dispatch 전송
    const store = useStore();
    // 각각의 페이지에서 자료 호출 할지는 개인의 판단
    store.dispatch('fetchMovieList')
    // intro 화면관련 
    // show가 true 면 보이고, false면 사라진다.
    const show = ref(true)
    const hideIntro = () => {
      show.value = false;
      // html에 overflow-y를 auto로 
      document.querySelector('html').style.overflowY = 'auto';
    }

    return { 
      show,
      hideIntro
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,li {
  list-style: none;
}

a {
  color: #333;
  text-decoration: none;
}

html {
    scrollbar-3dLight-Color: #efefef;
    scrollbar-arrow-color: #dfdfdf;
    scrollbar-base-color: #efefef;
    scrollbar-Face-Color: #dfdfdf;
    scrollbar-Track-Color: #efefef;
    scrollbar-DarkShadow-Color: #efefef;
    scrollbar-Highlight-Color: #efefef;
    scrollbar-Shadow-Color: #efefef;
    -ms-overflow-style: none;
    overflow: auto;
}

/* scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 5px;
  background-color: #f7f7f7;
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
  -moz-border-radius: 2px;
  -webkit-border-radius: 2px;
  border-radius: 2px;
}

html {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 16px;
  background: #eff3f7;
  overflow-x: hidden;
  overflow-y: hidden;
}
.wrap {
  position: relative;
  display: block;
}
.container {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.intro {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: url('@/assets/intro.jpg') no-repeat center;
  background-size: cover;
}

</style>