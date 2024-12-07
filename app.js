var md = window.markdownit();



function send() {
  let message = document.getElementById("msgtext").value;
  console.log(message);
  document.getElementById("chat-container").innerHTML += ` 
    <div class="message blue-bg ">
        <div class="message-sender fw-bold">you  </div>
        <div class="message-text"> :  ${message}</div></div>
    `;
  document.getElementById("msgtext").value = "";

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    contents: [
      {
        parts: [
          {
            text: `${message}`,
          },
        ],
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyC8pAg1Y_aMeX3x-nn7yKmYTaT9mHkjeUA\n",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.candidates[0].content.parts[0].text);
      let message=result.candidates[0].content.parts[0].text;
      let formatmessage=md.render(message);
      document.getElementById("chat-container").innerHTML +=`
      <div class="message gray-bg">
        <div class="message-sender fw-bold">Bot  </div>
        <div class="message-text"> : ${formatmessage}</div></div>
        `;
    })
    .catch((error) => console.error(error));
}
