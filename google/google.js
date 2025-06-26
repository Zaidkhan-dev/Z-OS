function performSearch() {
  const query = document.getElementById('searchInput').value;
  if (query.trim()) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}`, '_blank');
  }
}

function feelingLucky() {
  const query = document.getElementById('searchInput').value;
  if (query.trim()) {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(query)}&btnI=1`, '_blank');
  }
}

document.getElementById('searchInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    performSearch();
  }
});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('searchInput').focus();
});

function startVoiceTyping(targetClass) {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Speech recognition is not supported in this browser.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = 'en-IN';
  recognition.interimResults = false;
  recognition.continuous = false;

  const target = document.querySelector(`.${targetClass}`);
  if (!target) {
    alert(`Element with class "${targetClass}" not found.`);
    return;
  }

  // Animate "Listening." → "Listening.." → "Listening..." → repeat
  const states = ["Listening.", "Listening..", "Listening..."];
  let stateIndex = 0;
  const animationInterval = setInterval(() => {
    target.value = states[stateIndex];
    stateIndex = (stateIndex + 1) % states.length;
  }, 500);

  recognition.start();

  recognition.onresult = (event) => {
    clearInterval(animationInterval);
    const transcript = event.results[0][0].transcript;
    target.value = transcript;
  };

  recognition.onerror = (event) => {
    clearInterval(animationInterval);
    target.value = "❌ Error: " + event.error;
  };

  recognition.onend = () => {
    clearInterval(animationInterval);
  };
}