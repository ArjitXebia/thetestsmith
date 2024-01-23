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
            // Add array elements for each group of formatting options
            ['bold', 'italic', 'underline', 'strike'], // toggled buttons
            ['blockquote', 'code-block'], // blocks
    
            [{ 'header': 1 }, { 'header': 2 }], // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            [{ 'script': 'sub'}, { 'script': 'super' }], // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }], // outdent/indent
            [{ 'direction': 'rtl' }], // text direction
    
            [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
            [{ 'color': [] }, { 'background': [] }], // dropdown with defaults
            [{ 'font': [] }],
            [{ 'align': [] }],
    
            ['clean'], // remove formatting
            ['link', 'image', 'video'] // link and image, video
        ]
    }
    
});

document.addEventListener('DOMContentLoaded', function() {
    var categoriesInput = document.getElementById('categoriesInput');
    var suggestionsList = document.getElementById('suggestionsList');
    var selectedCategories = document.getElementById('selectedCategories');

    var allCategories = ["Technology", "Lifestyle", "Business", "Entertainment", "Health", "Sports", "Science", "Education", "Travel", "Food", "Fashion", "Finance", "Politics", "Personal", "Environment", "Arts", "News", "Culture", "History", "Other"]; // Add all categories here

    function addCategoryTag(category) {
        var tag = document.createElement('span');
        tag.className = 'selected-category-tag';
        tag.textContent = category;
        selectedCategories.appendChild(tag);
    }

    categoriesInput.addEventListener('input', function() {
        var input = this.value;
        suggestionsList.innerHTML = '';
        if (input) {
            var filteredCategories = allCategories.filter(function(category) {
                return category.toLowerCase().startsWith(input.toLowerCase());
            });

            filteredCategories.forEach(function(category) {
                var li = document.createElement('li');
                li.textContent = category;
                li.addEventListener('click', function() {
                    addCategoryTag(category);
                    categoriesInput.value = '';
                    suggestionsList.innerHTML = '';
                });
                suggestionsList.appendChild(li);
            });
        }
    });
});



function updatePreview() {
    const title = document.getElementById('title').value;
    const content = quill.root.innerHTML;
    const summary = document.getElementById('summary').value;
    const selectedCategoriesDiv = document.getElementById('selectedCategories');
    const categories = Array.from(selectedCategoriesDiv.children).map(tag => tag.textContent).join(', ');
    const author = document.getElementById('author').value;

    let previewHtml = `<h3>${title}</h3>`;
    previewHtml += `<div>${content}</div>`;
    previewHtml += `<p><strong>Summary:</strong><em>${summary}</em></p>`;
    previewHtml += `<p><strong>Categories:</strong> ${categories}</p>`; 
    previewHtml += `<p><strong>Author:</strong> ${author}</p>`;
    const previewArea = document.getElementById('blogPreview');
    previewArea.innerHTML = previewHtml;
    document.getElementById('previewArea').classList.remove('hidden');

    Prism.highlightAllUnder(previewArea);
}

document.querySelector('.preview-btn').addEventListener('click', updatePreview);
