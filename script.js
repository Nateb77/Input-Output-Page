
function showOutput () {
  let btnChange = document.querySelector("select");

  btnChange.addEventListener("click", showOutput);

    const FirstName = document.getElementById('FRName').value;
    const LastName = document.getElementById('LName').value;
    const email = document.getElementById('Email').value;
    const game = document.getElementById('radios').value;
    const WebsiteName = document.getElementById('Website').value;

    showOutput.innerHtml = 'FRName' + FirstName + 'LName' + LastName + 'Email' + email + 'radios' + game + 'Website' + WebsiteName;

}