const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  postsData: [
    { id: 1, message: "It is my first post", likesCount: "12" },
    { id: 2, message: "I am 28 years old", likesCount: "5" },
    { id: 3, message: "I am learning React", likesCount: "2" },
    { id: 4, message: "How are you?", likesCount: "0" },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    let newPost = {
      id: 5,
      message: state.newPostText,
      likesCount: 0,
    };
    state.postsData.push(newPost);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
  }
  return state;
};

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export default profileReducer;
