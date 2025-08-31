function showLoading() {
    document.getElementById("loading-message").style.display = "block";
}

function displayUploadedImage(event) {
    const imageContainer = document.getElementById('uploaded-image');
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imageContainer.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
        };
        reader.readAsDataURL(file);
    } else {
        imageContainer.innerHTML = "";
    }
}

// Placeholder for export functionality
document.getElementById("export-btn")?.addEventListener("click", function () {
    alert("Export to PDF/CSV coming soon! 🚀");
});
