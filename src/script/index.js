const onMakeChattingRoom = () => {
  window.location.href = "./join.html";
};

const setName = () => {
  let props = document.getElementById("name").value;
  let addedNewUser = JSON.parse(localStorage.getItem("userList"));
  console.log("thisisaddedNewUser", addedNewUser);
  if (!addedNewUser) {
    addedNewUser = [props];
  } else {
    console.log("thisisaddedNewUser", addedNewUser);
    addedNewUser.push(props);
  }
  localStorage.setItem("myName", props);
  localStorage.setItem("userList", JSON.stringify(addedNewUser));
  window.location.href = "./room.html";
};
