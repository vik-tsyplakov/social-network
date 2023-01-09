import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

export default store;
window.state = store;
