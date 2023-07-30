var formDiv = document.getElementById("formDiv");

function submitData() {
    const email = document.getElementById("emailField").value
    const senderName = document.getElementById("nameField").value
    const message = document.getElementById("feedbackField").value

    const data = {
        'email': email,
        'name': senderName,
        'feedback': message
    }

    axios({
        method: 'post',
        url: `https://unit731.drakonzai.repl.co/send`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    })
    .then(response => {
        var newPath = location.pathname.split("/")
        newPath.pop(newPath.length)
        newPath.push(`submitted.html?name=${senderName}`)
        location.href = location.origin + newPath.join("/")
    })
    .catch(error => {
        var newPath = location.pathname.split("/")
        newPath.pop(newPath.length)
        newPath.push(`submitted.html?name=${senderName}`)
        location.href = location.origin + newPath.join("/")
    })
    formDiv.innerHTML = `<p><strong>Thanks for submitting, ${senderName}!</strong></p>`
}