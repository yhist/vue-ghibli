import {createStore} from 'vuex'
import {fetchAllApi,fetchDetailInfo} from '../api/index.js'
export default createStore({
  // 데이터
  state: {
    movieList : [],
    movieInfo : {} 
  },

  // api연동
  actions: {
    // 전체 데이터 호출
    fetchMovieList({commit}){
      fetchAllApi()
      .then(res => {
        commit('MOVIE_LIST_INIT', res.data)
      })
      .catch(err => console.log(err))
    },
    // 상세데이터 호출
    fetchMovieInfo({commit}, _id){
      fetchDetailInfo(_id)
      .then(res => {
        commit('MOVIE_INFO', res.data)
      })
      .catch(err => console.log(err))
    }
  },

  // 데이터 저장
  mutations: {
    // actions에서 전송된 데이터 저장
    MOVIE_LIST_INIT(state,payload){
      state.movieList = payload
    },
    MOVIE_INFO(state, payload){
      state.movieInfo = payload
    }
  },

  // 데이터 참조(호출)
  getters: {
    // 전체 데이터 출력/참조
    getMovieList(state){
      return state.movieList
    },
    getMovieInfo(state){
      return state.movieInfo
    }
  }
});