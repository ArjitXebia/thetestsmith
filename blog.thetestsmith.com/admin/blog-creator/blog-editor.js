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

    var allCategories = ["Technology", "Lifestyle", "Business", "Entertainment", "Health", "Sports", "Science", "Education", "Travel", "Food", "Fashion", "Finance", "Politics", "Personal", "Environment", "Arts", "News", "Culture", "History", "Other"];

    function addCategoryTag(category) {
        var tag = document.createElement('span');
        tag.className = 'selected-category-tag';
        tag.textContent = category;
        tag.onclick = function() {
            this.parentNode.removeChild(this);
            // Remove the category from the allCategories array if you want to keep that array up-to-date
            var index = allCategories.indexOf(category);
            if (index > -1) {
                allCategories.splice(index, 1);
            }
        };
        selectedCategories.appendChild(tag);
    }

    categoriesInput.addEventListener('input', function() {
        var input = this.value.trim();
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

    categoriesInput.addEventListener('keydown', function(event) {
        // Check if the 'Space' key was pressed
        if (event.key === ' ' || event.keyCode === 32) {
            var input = categoriesInput.value.trim();
            event.preventDefault(); // Prevent the default space key action

            // If the input is not empty and not already in the list of categories
            if (input && !allCategories.includes(input)) {
                // Add the new category to the list
                allCategories.push(input);

                // Also add it as a tag in the selected categories
                addCategoryTag(input);
            }

            // Clear the input field
            categoriesInput.value = '';
            suggestionsList.innerHTML = '';
        }
    });
});



function updatePreview() {
    // Get values from the form, providing defaults if they are empty
    const title = document.getElementById('title').value || 'Title Placeholder';
    const content = quill.root.innerHTML || '<p>Content Placeholder</p>';
    const summary = document.getElementById('summary').value || 'Summary Placeholder';
    const selectedCategoriesDiv = document.getElementById('selectedCategories');
    const categoriesTags = Array.from(selectedCategoriesDiv.children).map(tag => tag.textContent);
    const categories = categoriesTags.length > 0 ? categoriesTags.join(', ') : 'No Categories Selected';
    const author = document.getElementById('author').value || 'Author Placeholder';
    const publishDate = document.getElementById('publishDate').value || 'Publish Date Placeholder';
    const publishTime = document.getElementById('publishTime').value || 'Publish Time Placeholder';
    const metaTitle = document.getElementById('metaTitle').value || 'Meta Title Placeholder';
    const metaDescription = document.getElementById('metaDescription').value || 'Meta Description Placeholder';
    
    // Construct the HTML for the preview
    let previewHtml = `<h3>${title}</h3>`;
    previewHtml += `<div>${content}</div>`;
    previewHtml += `<p><strong>Summary:</strong> <em>${summary}</em></p>`;
    previewHtml += `<p><strong>Categories:</strong> ${categories}</p>`; 
    previewHtml += `<p><strong>Author:</strong> ${author}</p>`;
    previewHtml += `<p><strong>Publish Date:</strong> ${publishDate}</p>`;
    previewHtml += `<p><strong>Publish Time:</strong> ${publishTime}</p>`;
    previewHtml += `<p><strong>Meta Title:</strong> ${metaTitle}</p>`;
    previewHtml += `<p><strong>Meta Description:</strong> ${metaDescription}</p>`;

    // Set the inner HTML of the modal content
    const modalPreviewContent = document.getElementById('modalPreviewContent');
    modalPreviewContent.innerHTML = previewHtml;

    // Show the modal
    const modal = document.getElementById('previewModal');
    modal.style.display = "block";

    // Apply syntax highlighting to the content within the modal
    Prism.highlightAllUnder(modalPreviewContent);
}



// Attach the updatePreview function to the preview button click event
document.querySelector('.preview-btn').addEventListener('click', updatePreview);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    var modal = document.getElementById('previewModal');
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modal = document.getElementById('previewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}