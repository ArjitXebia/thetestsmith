document.getElementById('blogForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    console.log('Title:', title);
    console.log('Content:', content);
    this.reset();
});

function submitPost(status) {
    // Gather form data
    const title = document.getElementById('title').value || 'Title Placeholder';
    const content = quill.root.innerHTML || '<p>Content Placeholder</p>';
    const summary = document.getElementById('summary').value || 'Summary Placeholder';
    const featuredImage = document.getElementById('featuredImage').value || 'Image Placeholder';

    const selectedCategoriesDiv = document.getElementById('selectedCategories');
    const categoriesTags = Array.from(selectedCategoriesDiv.children).map(tag => tag.textContent);
    const categories = categoriesTags.length > 0 ? categoriesTags.join(', ') : 'No Categories Selected';
    const author = document.getElementById('author').value || 'Author Placeholder';
    const publishDate = document.getElementById('publishDate').value || 'Publish Date Placeholder';
    const publishTime = document.getElementById('publishTime').value || 'Publish Time Placeholder';
    const metaTitle = document.getElementById('metaTitle').value || 'Meta Title Placeholder';
    const metaDescription = document.getElementById('metaDescription').value || 'Meta Description Placeholder';
    // Gather other form values in the same way...

    // Construct the data object including the status
    const postData = {
        title,
        content,
        summary,
        featuredImage,
        categories,
        author,
        publishDate,
        publishTime,
        metaTitle,
        metaDescription,
        status
    };

    // Use fetch or another AJAX method to send the data to the server
    fetch('https://server382.iseencloud.com:5000/createPost', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
    
}

var quill = new Quill('#content', {
    theme: 'snow',
    modules: {
        toolbar: [

            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],

            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],

            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],

            ['clean'],
            ['link', 'image', 'video']
        ]
    }

});

document.addEventListener('DOMContentLoaded', function () {
    var categoriesInput = document.getElementById('categoriesInput');
    var suggestionsList = document.getElementById('suggestionsList');
    var selectedCategories = document.getElementById('selectedCategories');

    var allCategories = ["Technology", "Lifestyle", "Business", "Entertainment", "Health", "Sports", "Science", "Education", "Travel", "Food", "Fashion", "Finance", "Politics", "Personal", "Environment", "Arts", "News", "Culture", "History", "Other"];

    function addCategoryTag(category) {
        var tag = document.createElement('span');
        tag.className = 'selected-category-tag';
        tag.textContent = category;
        tag.onclick = function () {
            this.parentNode.removeChild(this);

            var index = allCategories.indexOf(category);
            if (index > -1) {
                allCategories.splice(index, 1);
            }
        };
        selectedCategories.appendChild(tag);
    }

    categoriesInput.addEventListener('input', function () {
        var input = this.value.trim();
        suggestionsList.innerHTML = '';
        if (input) {
            var filteredCategories = allCategories.filter(function (category) {
                return category.toLowerCase().startsWith(input.toLowerCase());
            });

            filteredCategories.forEach(function (category) {
                var li = document.createElement('li');
                li.textContent = category;
                li.addEventListener('click', function () {
                    addCategoryTag(category);
                    categoriesInput.value = '';
                    suggestionsList.innerHTML = '';
                });
                suggestionsList.appendChild(li);
            });
        }
    });

    categoriesInput.addEventListener('keydown', function (event) {

        if (event.key === ' ' || event.keyCode === 32) {
            var input = categoriesInput.value.trim();
            event.preventDefault();


            if (input && !allCategories.includes(input)) {

                allCategories.push(input);


                addCategoryTag(input);
            }


            categoriesInput.value = '';
            suggestionsList.innerHTML = '';
        }
    });
});



function updatePreview() {

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


    let previewHtml = `<h3>${title}</h3>`;
    previewHtml += `<div>${content}</div>`;
    previewHtml += `<p><strong>Summary:</strong> <em>${summary}</em></p>`;
    previewHtml += `<p><strong>Categories:</strong> ${categories}</p>`;
    previewHtml += `<p><strong>Author:</strong> ${author}</p>`;
    previewHtml += `<p><strong>Publish Date:</strong> ${publishDate}</p>`;
    previewHtml += `<p><strong>Publish Time:</strong> ${publishTime}</p>`;
    previewHtml += `<p><strong>Meta Title:</strong> ${metaTitle}</p>`;
    previewHtml += `<p><strong>Meta Description:</strong> ${metaDescription}</p>`;


    const modalPreviewContent = document.getElementById('modalPreviewContent');
    modalPreviewContent.innerHTML = previewHtml;


    const modal = document.getElementById('previewModal');
    modal.style.display = "block";


    Prism.highlightAllUnder(modalPreviewContent);
}




document.querySelector('.preview-btn').addEventListener('click', updatePreview);


var span = document.getElementsByClassName("close")[0];


span.onclick = function () {
    var modal = document.getElementById('previewModal');
    modal.style.display = "none";
}


window.onclick = function (event) {
    var modal = document.getElementById('previewModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}