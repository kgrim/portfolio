import axios from "./axios";

export function receiveFriendsWannabes(id) {
  return axios
    .get(`/getWannabeFriends/${id}`)
    .then(resp => {
      return {
        type: "RECEIVE_FRIENDS_WANNABES",
        friends: resp.data.rows
      };
    })
    .catch(e =>
      console.log("catch in Actions.js / receiveFriendsWannabes: ", e)
    );
}

export function acceptFriendRequest(id) {
  return axios
    .post(`/updateFriendship/${id}`)
    .then(resp => {
      return {
        type: "ACCEPT_FRIEND_REQUEST",
        id
      };
    })
    .catch(e => console.log("catch in Actions.js / acceptFriendRequest: ", e));
}

export function unfriend(id) {
  return axios
    .post(`/deleteFriend/${id}`)
    .then(resp => {
      return {
        type: "UNFRIEND",
        id
      };
    })
    .catch(e => console.log("catch in Actions.js / unfriend: ", e));
}

export function receiveOnlineUsers(data) {
  return {
    type: "ONLINE_FRIENDS",
    data
  };
}

export function updateOnlineUsers(data) {
  return {
    type: "UPDATE_ONLINE_FRIENDS",
    data
  };
}

export function userLeft(id) {
  return {
    type: "USER_LEFT",
    id
  };
}

export function chatMessages(recentMessages) {
  return {
    type: "CHAT_MESSAGES",
    recentMessages
  };
}

export function chatMessage(latestMessage) {
  return {
    type: "CHAT_MESSAGE",
    latestMessage: latestMessage
  };
}

export function alert(notification) {
  return {
    type: "NOTIFICATION",
    notification
  };
}
