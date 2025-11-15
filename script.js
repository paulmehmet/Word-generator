const novaLines = [
    "If procrastination was an Olympic sport, I’d still find a way to postpone the finals.",
    "Somebody invented the doorbell so humans could have a tiny heart attack every day.",
    "If clouds are made of water, does that make rain just cloud juice?",
    "My phone battery lasts longer when I don't touch it—just like my happiness.",
    "The person who created autocorrect should burn in hello.",
    "If humans evolved from monkeys, why do monkeys still refuse to pay taxes?",
    "Bluetooth works perfectly until you actually need it.",
    "Every mirror you buy is technically used.",
    "Nothing makes you more productive than the last five minutes before a deadline.",
    "If money doesn’t buy happiness, transfer it to me and let me investigate.",
    "Why do we call them apartments if they’re all stuck together?",
    "A group chat is just digital chaos with timestamps.",
    "If I had a dollar for every time I got distracted, I wish I had a pony.",
    "The brain named itself. That’s suspicious.",
    "Going to bed early hits different when you're old and tired of everybody’s nonsense."
];


function generateWords(n) {
    let text = "<p>";
    for (let i = 0; i < n; i++) {
        let randomLine = novaLines[Math.floor(Math.random() * novaLines.length)];
        let split = randomLine.split(" ");
        text += split[Math.floor(Math.random() * split.length)] + " ";
    }
    text += "</p>";
    return text;
}


function generateSentences(n) {
    let text = "";
    for (let i = 0; i < n; i++) {
        let sentence = novaLines[Math.floor(Math.random() * novaLines.length)];
        text += `<p>${sentence}.</p>`;
    }
    return text;
}


function generateParagraphs(n) {
    let text = "";
    for (let i = 0; i < n; i++) {
        let paragraph = "";
        for (let j = 0; j < 4; j++) {
            let s = novaLines[Math.floor(Math.random() * novaLines.length)];
            paragraph += s + ". ";
        }
        text += `<p>${paragraph}</p>`;
    }
    return text;
}

document.getElementById("generate").addEventListener("click", () => {
    const amount = parseInt(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    const output = document.getElementById("output");

    output.innerHTML = ""; 

    if (type === "words") {
        output.innerHTML = generateWords(amount);
    } else if (type === "sentences") {
        output.innerHTML = generateSentences(amount);
    } else {
        output.innerHTML = generateParagraphs(amount);
    }
});
