const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE-MESSAGE-TEXT";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "It is my first post", likesCount: "12" },
        { id: 2, message: "I am 28 years old", likesCount: "5" },
        { id: 3, message: "I am learning React", likesCount: "2" },
        { id: 4, message: "How are you?", likesCount: "0" },
      ],
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: 1,
          name: "Nick",
          photo:
            "https://images.pexels.com/photos/1812634/pexels-photo-1812634.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 2,
          name: "John",
          photo:
            "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 3,
          name: "Ivan",
          photo:
            "https://images.pexels.com/photos/1054048/pexels-photo-1054048.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 4,
          name: "Anna",
          photo:
            "https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 5,
          name: "Alex",
          photo:
            "https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          id: 6,
          name: "Harry",
          photo:
            "https://images.pexels.com/photos/7561911/pexels-photo-7561911.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
      messagesData: [
        { id: 1, message: "Hi!" },
        { id: 2, message: "What`s up?" },
        { id: 3, message: "Where are you?" },
        { id: 4, message: "Ok" },
        { id: 5, message: "Have a good day!" },
        { id: 6, message: "I like it" },
      ],
      newMessageText: "",
    },
  },
  _callSubscriber() {
    console.log("State changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      };
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
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

export default store;
window.state = store;
