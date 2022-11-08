function randomGenerator(num) {
    return Math.floor(Math.random() * num)
}

    const collectiveWords = {
        firstWord: ["life", "nothing burger"],
        secondWord: ["answer", "piano"], 
        thirdWord: ["abyss", "identity", "box"]
        }

    let randomWords = []

    for (let i in collectiveWords) {
        let optionIdx = randomGenerator(collectiveWords[i].length)
        switch(i){
            case 'firstWord':
                randomWords.push(collectiveWords[i][optionIdx])
                break
            case 'secondWord':
                randomWords.push(collectiveWords[i][optionIdx])
                break
            case 'thirdWord':
            randomWords.push(collectiveWords[i][optionIdx])
            default:
                randomWords.push('No info')
        }
    }

    function newSentence(sentence) {
        const formatted = randomWords.join('\n')
        console.log(formatted)
    }
    
    newSentence(randomWords);

