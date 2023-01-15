const onMakeChattingRoom = () => {
  console.log("오우");
  window.location.href = "./join.html";
};

const setName = () => {
  let props = document.getElementById("name").value;
  localStorage.setItem("userName", props);
  window.location.href = "./room.html";
};
