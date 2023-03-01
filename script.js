// let msg = new SpeechSynthesisUtterance()
// function fala(){    
//     msg.text = ""
//     window.speechSynthesis.speak(msg)
// }

// window.addEventListener("click", fala)


if ('speechSynthesis' in window) {
    // new speech recognition object
    var recognition = new window.webkitSpeechRecognition();
    // Recognition start event handler
    recognition.onstart = () => { 
        console.log('Voice recognition started. Try speaking into the microphone.');
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        console.log(transcript);
      };
      
      // start recognition
      recognition.start();
      //   .....
    } else {
      console.log("Speech recognition not supported 😢");
      // code to handle error
    }