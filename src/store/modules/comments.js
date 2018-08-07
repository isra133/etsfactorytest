const commentsModule = {
	state: {
		comments : JSON.parse(window.localStorage.getItem("comments")) || new Array()
	},
	getters: {

	},
	actions: {
		sendComment : function({commit}, comment){
			commit('addComment',comment);
		}
	},
	mutations: {
		addComment (state, data){

			let date = Date.now();

			let comment = {
				id : data.id,
				text : data.text,
				date : date,
				fav : false
			};

			state.comments.push(comment);
			window.localStorage.setItem('comments', JSON.stringify(state.comments));
		}
	},

}

export default commentsModule;