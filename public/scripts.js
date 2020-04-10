// const sqlite3 = require("sqlite3").verbose();
// const db = new sqlite3.Database("../ws.db");


function onOff() {
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")
}

function checkFields(event) {

    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]

    const isEmpty = valuesToCheck.find(function (value) {
        const checkIfIsString = typeof event.target[value].value === 'string'
        const checkIfIsEmpty = !event.target[value].value.trim()

        if (checkIfIsString && checkIfIsEmpty) {
            return true
        }
    })

    if (isEmpty) {
        event.preventDefault()
        alert('Favor preencher os campos')
    }
}

function deleteIdea(id) {
  var conf = confirm("Você quer apagar isso?");
  if (conf) {
    window.location.href = '/removeIdeas/' + id;
  }
}
