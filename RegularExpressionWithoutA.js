let regex = /^[^aA]{6,}$/
let words = ["Wonderful", "Joyful", "Happiness", "Time", "Task", "Apple"]
for (var i = 0; i < words.length; i++) {
    if (regex.test(words[i])) {
        console.log(words[i] + " - without letter 'A'");
    } else {
        console.log(words[i] + " - with letter 'A'");
    }
}