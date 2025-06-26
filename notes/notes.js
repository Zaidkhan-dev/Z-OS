window.onload = function () {
  const notesContainer = document.querySelector('.notesList');
  const numberOfNotes = parseInt(localStorage.getItem('notes.number')) || 0;

  for (let i = 1; i <= numberOfNotes; i++) {
    const noteData = localStorage.getItem(`notes ${i}`);
    if (noteData) {
      const note = JSON.parse(noteData);

      const noteDiv = document.createElement('div');
      noteDiv.classList.add('Notes');

      const icon = document.createElement('span');
      icon.className = 'material-symbols-outlined';
      icon.textContent = 'notes';

      const title = document.createElement('p');
      title.textContent = note.title || `Untitled ${i}`;

      // Make the whole noteDiv clickable to open the editor page with the note id
      noteDiv.onclick = function () {
        window.location.href = `editnotes.html?id=${i}`;
      };

      noteDiv.appendChild(icon);
      noteDiv.appendChild(title);

      notesContainer.appendChild(noteDiv);
    }
  }
};