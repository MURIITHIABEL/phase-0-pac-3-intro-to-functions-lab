function shout(string) {
    return string.toUpperCase();
  }

function whisper
  (string) {
    return string.toLowerCase();
  } 

function logShout(string) {
    console.log (string.toUpperCase());
  }

function logWhisper(string) {
    console.log (string.toLowerCase());
  }

  function sayHiToHeadphonedRoommate (string) {
    var cannotHear = "I can't hear you!";
    var canHear = "YES INDEED!";
    var dinner = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cannotHear;
    }
    else if (string.toUpperCase(string) === string) {
      return canHear;
    }
    else if ("Let's have dinner together!" === string) {
      return dinner
    }
  }