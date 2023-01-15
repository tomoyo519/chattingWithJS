const newUserList = document.getElementsByClassName("list_btm");
const participantsList = document.getElementsByClassName("list_mid");

document.addEventListener("DOMContentLoaded", () => {
  onloadData();
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
    userName.innerHTML = user;
    participantsList[0].appendChild(userName);
  }
  // 기존 채팅목록 확인
};
