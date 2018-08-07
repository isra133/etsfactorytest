const commentsModule = {
  state: {
  	comments : window.localStorage.getItem("comments") || []
  },
  mutations: {

  },
  actions: {
  	sendComment : function({commit}, text){

  	}
  },
  getters: {

  }
}

export default commentsModule;