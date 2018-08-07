const commentsModule = {
	state: {
		comments : JSON.parse(window.localStorage.getItem("comments")) || new Array()
	},
	getters: {
		getComments(state) {
			return (id) => {
				return state.comments.filter(comment => comment.id == id);
			}
		}
	},
	actions: {
		sendComment : function({commit}, comment){

			return new Promise((resolve, reject) => {
				resolve(true);
				commit('addComment',comment);
			});

		},
		requestEraseComment : function({commit}, comment){
			commit('eraseComment', comment);
		},
		editComment : function({commit}, comment){
			return new Promise((resolve, reject) => {
				resolve(true);
				commit('saveCommentEdited', comment);
			});
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
		},
		eraseComment(state, data){
			let comments = state.comments.filter(comment => {
				if(comment.date != data.date){
					return true;
				}
			});

			state.comments = comments;
			window.localStorage.setItem('comments', JSON.stringify(state.comments));

		}, 
		saveCommentEdited(state, data){
			state.comments.forEach(comment => {
				if(comment.id == data.id && comment.date == data.date){
					comment.text = data.text;
				}
			});

			window.localStorage.setItem('comments', JSON.stringify(state.comments));
			
		}
	},

}

export default commentsModule;