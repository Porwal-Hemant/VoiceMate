// SpeechSynthesisUtterance is part of the Web Speech API, which lets web developers give their websites the power to “speak” text out loud using the browser’s built-in speech synthesis (text-to-speech) capabilities.

let speech = new SpeechSynthesisUtterance();    //    It represents a speech request.

let voices = [];  // The Web Speech API offers multiple voices (different languages, accents, etc.). This array will store them after loading.

let voiceSelect = document.querySelector("select");

// Some browsers (like Chrome) load speech voices asynchronously. So when the voices list finishes loading, this event fires.
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();     // Fetch the list of all available voices from the browser.
    speech.voice = voices[0];              // by default to the first array element  

    // Fill the <select> dropdown with all available voice names.
    voices.forEach((voice, i) =>
        voiceSelect.options[i] = new Option(voice.name, i)
    );
};

/* 

<select>
  <option value="0">Google US English</option>
  <option value="1">Google UK English</option>
  ...
</select> 

*/

// Listen for a change event on the <select>.
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
});
// This event fires when the user picks a different voice from the dropdown.


// I am creating an instance with the text you want to be spoken.

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;

    //  there is only one textarea in the HTML code through which i want to extract the text and have to store it in the speech.text 
    // Now speech.text represents the text string that will be spoken aloud by the browser. 
    window.speechSynthesis.speak(speech);

})

