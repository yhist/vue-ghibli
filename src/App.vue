<template>
  <div class="wrap">
    <div class="container">
    <RouterView/>
    </div>
  </div>
  </template>
  
  <script>
  import {useStore} from 'vuex'
  export default {
  setup(){
    // vuex에 dispatch 전송
    const store = useStore();
    store.dispatch('fetchMovieList')
    return{
    }
  }
  }
  </script>
  
  <style>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #333;
  }
  html{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    background: #eff3f7;
  }
  .wrap{
    position: relative;
    display: block;
  }
  .container{
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  </style>