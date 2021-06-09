function shout (string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(shout(string));
}

function logWhisper(string) {
    console.log(whisper(string));
}

function sayHiToGrandma(string) {
    let response;
    switch (string) {
        case whisper(string):
            response="I can't hear you!";
            break;
        case shout(string):
            response="YES INDEED!";
            break;
        case "I love you, Grandma.":
            response="I love you, too.";
            break;
    }
    return response;
}