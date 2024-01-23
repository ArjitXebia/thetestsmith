document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // TODO: Add logic to send data to the server or handle it as required
    console.log('Title:', title);
    console.log('Content:', content);

    // Clear the form (optional)
    this.reset();
});

// Initialize Quill
var quill = new Quill('#content', {
    theme: 'snow',
    modules: {
        toolbar: [
            // ... other toolbar options ...
            ['code-block'] // Add this line to enable code block formatting
        ]
    }
});

function updatePreview() {
    const title = document.getElementById('title').value;
    const content = quill.root.innerHTML;
    const excerpt = document.getElementById('excerpt').value;

    let previewHtml = `<h3>${title}</h3>`;
    previewHtml += `<div>${content}</div>`;
    previewHtml += `<p><em>${excerpt}</em></p>`;

    const previewArea = document.getElementById('blogPreview');
    previewArea.innerHTML = previewHtml;
    document.getElementById('previewArea').classList.remove('hidden');

    // Apply Prism syntax highlighting
    Prism.highlightAllUnder(previewArea);
}

document.querySelector('.preview-btn').addEventListener('click', updatePreview);