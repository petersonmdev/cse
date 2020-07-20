const readline = require('readline-sync')

function start() {
    const content = {}

    content.serachTerm = askAndRetornSearchTerm()

    function askAndRetornSearchTerm() {
        return readline.question('Type a google search term: ')
    }

    console.log(content)
}

start()