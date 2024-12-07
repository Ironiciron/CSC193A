// Get references to HTML elements
const textArea = document.getElementById("text-area");
const biggerButton = document.getElementById("bigger-button");
const fancyRadio = document.getElementById("fancy-radio");
const boringRadio = document.getElementById("boring-radio");
const mooButton = document.getElementById("moo-button");

// Event listener for the "Bigger!" button
biggerButton.addEventListener("click", () => {
    textArea.style.fontSize = "24pt";
});

// Event listener for radio button changes
fancyRadio.addEventListener("change", () => {
    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
});

// Event listener for the "Moo" button
mooButton.addEventListener("click", () => {
    const text = textArea.value;
    const sentences = text.split(".");
    const mooifiedSentences = sentences.map(sentence => {
        const words = sentence.trim().split(" ");
        const lastWord = words[words.length - 1];
        return words.join(" ") + "-" + lastWord.toUpperCase() + "-Moo.";
    });
    textArea.value = mooifiedSentences.join(". ");
});