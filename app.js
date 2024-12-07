let user = "You";
function selectChatUser() {
  user = document.getElementById("sender").value;
}

function send() {
  let message = document.getElementById("msgtext").value;
  console.log(message);
  document.getElementById("chat-container").innerHTML += ` 
    <div class="message ${user === "You" ? "blue-bg" : "gray-bg"} ">
        <div class="message-sender fw-bold">${user}</div>
        <div class="message-text"> :  ${message}</div>
    </div>`;
    document.getElementById("msgtext").value = "";            
}
