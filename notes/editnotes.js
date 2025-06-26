window.onload = function() {
  console.log("editnotes.js loaded");
  
  const params = new URLSearchParams(window.location.search);
  const noteId = params.get('id');
  console.log("Note ID from URL:", noteId);

  if (noteId) {
    const noteData = localStorage.getItem(`notes ${noteId}`);
    console.log("Raw noteData:", noteData);

    if (noteData) {
      const note = JSON.parse(noteData);
      console.log("Parsed note object:", note);
      
      const titleInput = document.querySelector('.titleInput');
      const noteInput = document.querySelector('.noteInput');
      
      if (titleInput && noteInput) {
        titleInput.value = note.title;
        noteInput.value = note.note;
        console.log("Filled inputs successfully");
      } else {
        console.error("ERROR: Inputs not found");
      }
    } else {
      console.error("ERROR: No note data found for this ID");
    }
  } else {
    console.warn("No noteId parameter in URL");
  }
};

function saveNote() {
  const title = document.querySelector('.titleInput').value.trim();
  const note = document.querySelector('.noteInput').value.trim();

  if (!title && !note) {
    alert("Cannot save empty note!");
    return;
  }

  let number = parseInt(localStorage.getItem('notes.number')) || 0;

  const params = new URLSearchParams(window.location.search);
  let idToSave = params.get('id');

  if (!idToSave) {
    number++;
    idToSave = number;
    localStorage.setItem('notes.number', number.toString());
  }

  const noteData = {
    number: parseInt(idToSave),
    title,
    note
  };

  localStorage.setItem(`notes ${idToSave}`, JSON.stringify(noteData));

  window.location.href = 'notes.html';
}

function deleteNote() {
  const params = new URLSearchParams(window.location.search);
  const noteId = params.get('id');

  if (!noteId) {
    alert("No note to delete!");
    return;
  }

  // Confirm deletion
  const confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) return;

  // Remove the note from localStorage
  localStorage.removeItem(`notes ${noteId}`);

  // Optional: update the notes.number counter or leave as is.
  // (Usually better to keep it so IDs don't clash)

  // Redirect back to notes list
  window.location.href = 'notes.html';
}