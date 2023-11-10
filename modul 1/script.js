const getElement = (identifier = "") => document.querySelector(identifier);

function verifySubmission() {
  let subjectElement = getElement("#Subject").value;
  let messageElement = getElement("#Message").value;
  let nameElement = getElement("#Name").value;

  if (subjectElement && messageElement && nameElement) {
    let body = encodeURIComponent("From: " + nameElement + "\n" + messageElement);
    window.location.href = "mailto:rowen.rh@outlook.com?subject=" + subjectElement + "&body=" + body;
  } else {
    alert("Please fill in all required fields.");
  }
}

getElement("#send").addEventListener("click", verifySubmission);


