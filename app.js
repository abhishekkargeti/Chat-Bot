function talk() {
    var know = {
        "whats my name is ": "As i remember your name is Abhishek Kargeti",
        "hello": "Yes how may i help you ?",
        "Hello": "Yes how may i help you ?",
        "who am i": "your'e Abhishek Kargeti ...! ",
        "my name is": "your'e Abhishek Kargeti  ",
        "How are you": "Good :)",
        "how are you": "Good :)",
        "Your favourite Cricket Team": "My favorite cricket team is CSK",
        "ok": "Thank You So Much ",
        "Bye": "Okay! Will meet soon..",
        "bye": "Okay! Will meet soon..",
        "kese ho ?": "bdia hu aap bataye",
        "what's my Girl friend name ?": "Simran Singh am i right?",
        "yes": "okay thank you ask me more question..",
        "Yes": "okay thank you ask me more question..",
        "hi": "Yes hello..?",
        "Abhishek Kargeti friend's name ?": "Simran Singh am i right ? ",
        "Abhishek Kargeti friend's name ?": "Simran Singh am i right?",
        "Abhishek Kargeti father name ?": "Mr R.P Kargeti am i right?"  ,
        "Abhishek Kargeti Father name ?": "Mr R.P Kargeti am i right?",
        "how old is Abhishek Kargeti ?": "21",
        "nothing": "ok..!",
        "Abhishek Kargeti mother name ?": "Mrs Meenakshi Kargeti am i right?"  ,
        "Abhishek Kargeti Mother name ?": "Mrs Meenakshi Kargeti am i right?",

    
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    
    if (user in know) {
        document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    } else {
        document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
}


