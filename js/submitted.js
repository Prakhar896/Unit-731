const data = location.search.substring(1, location.search.length).split("&")

var senderName = data[0].split("=")[1]
senderName = senderName.replaceAll("%20", " ")
document.getElementById("thanksLabel").innerText = `Thanks for submitting, ${senderName}!`