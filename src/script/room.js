const newUserList = document.getElementsByClassName("list_btm");
const participantsList = document.getElementsByClassName("list_mid");
const chatList = document.getElementsByClassName("chat");
const wrapperList = document.getElementsByClassName("wrapper");

document.addEventListener("DOMContentLoaded", () => {
  onloadData();
});

document.addEventListener("mouseover", (e) => {
  onMakeCursor(e);
});

const onloadData = () => {
  let userList = JSON.parse(localStorage.getItem("userList"));
  const lastUser = userList.length;

  //   새로 입장한 사람 확인 ( 입장한 사람중에 중복되는 사람은 없나 ?)
  const newUser = document.createElement("div");
  newUser.innerText = `${userList[lastUser - 1]}님이 입장하였습니다`;
  newUserList[0].appendChild(newUser);

  //   참여자 목록 생성
  for (let user of userList) {
    const userName = document.createElement("div");
    userName.innerText = user;
    participantsList[0].appendChild(userName);
  }
  let previousChatList = JSON.parse(localStorage.getItem("chats"));
  for (let chat of previousChatList) {
    checkChatList(chat);
  }
};

const checkChatList = (chat) => {
  const chatItem = document.createElement("div");
  chatItem.className = "chat_item";
  const chatAuthor = document.createElement("div");
  chatAuthor.className = "chat_author";
  const chatText = document.createElement("div");
  chatText.className = "chat_text";
  chatAuthor.innerText = chat.author;
  chatText.innerText = chat.chat;
  chatItem.appendChild(chatAuthor);
  chatItem.appendChild(chatText);
  chatList[0].appendChild(chatItem);
};

const onMakeNewChat = () => {
  // 새로운 채팅을 로컬스토리지에 저장하는것
  let newChat = document.getElementById("chat_input").value;

  let addChat = JSON.parse(localStorage.getItem("chats"));

  let chatAuthor = localStorage.getItem("myName");
  if (!addChat) {
    addChat = [{ chat: newChat, author: chatAuthor }];
  } else {
    addChat.push({ chat: newChat, author: chatAuthor });
  }
  localStorage.setItem("chats", JSON.stringify(addChat));

  //새로운 채팅만채팅화면에 보여주기
  checkChatList({ chat: newChat, author: chatAuthor });
};

const onHandleEnter = () => {
  if (window.event.keyCode === 13) {
    onMakeNewChat();
  }
};

const onMakeCursor = (event) => {
  const userName = localStorage.getItem("myName");
  const userCursorList = JSON.parse(localStorage.getItem("userCursor"));
  const cursorInfo = [
    {
      userName: userName,
      cursorX: event.pageX,
      cursorY: event.pageY,
    },
  ];
  if (!userCursorList) {
    localStorage.setItem("cursorInfo", JSON.stringify(cursorInfo));
  } else {
    console.log("thisisuserName", userName);
    userCursorList.push(cursorInfo);
  }
};

// const checkUserCursor = () => {
setInterval(() => {
  const previousCursor = document.getElementById("userCursor");
  if (!previousCursor) {
    console.log("thisispreviousCUrsor", previousCursor);
    let usersCursorInfo = JSON.parse(localStorage.getItem("cursorInfo"));
    for (let info of usersCursorInfo) {
      console.log("thisisinfo", info);
      const cursor = document.createElement("div");
      cursor.contentEditable = true;
      cursor.id = "userCursor";
      cursor.style.position = "absolute";
      cursor.style.left = info.cursorX + "px";
      cursor.style.top = info.cursorY + "px";
      cursor.innerText = info.userName;
      wrapperList[0].appendChild(cursor);
    }
  } else {
    const previousCursor = document.getElementById("userCursor").remove();
    let usersCursorInfo = JSON.parse(localStorage.getItem("cursorInfo"));
    for (let info of usersCursorInfo) {
      console.log("thisisinfo", info);
      const cursor = document.createElement("div");
      cursor.contentEditable = true;
      cursor.id = "userCursor";
      cursor.style.position = "absolute";
      cursor.style.left = info.cursorX + "px";
      cursor.style.top = info.cursorY + "px";
      cursor.innerText = info.userName;
      wrapperList[0].appendChild(cursor);
    }
  }
}, 3000);
// };
