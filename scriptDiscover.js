
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve all story-item elements
    var storyItems = document.querySelectorAll(".story-item");

    // Data for buttons
    var buttonsData = [
        { label: " \n DESIGN", link: "discover-1.html" },
        { label: " \n MARKETING", link: "discover-2.html" },
        { label: " \n CONSULTANT", link: "discover-3.html" },
        { label: " \n HUMAN RESOURCE", link: "discover-4.html" },
        { label: " \n EDUCATION", link: "discover-5.html" },
        { label: " \n TEAM SPIRIT", link: "discover-6.html" }
    ];

    // Loop through each story-item element
    storyItems.forEach(function (item, index) {
        // Retrieve the corresponding data from buttonsData
        var buttonInfo = buttonsData[index];

        // Add click event listener to each story-item
        item.addEventListener("click", function () {
            // Navigate to the specified link
            window.location.href = buttonInfo.link;
        });

        // Add button label to story-item
        var h3 = item.querySelector("h3");
        h3.textContent = buttonInfo.label;
    });
});












// discover-1-1.html logic
document.addEventListener("DOMContentLoaded", function () {

    var displayedImage = document.getElementById("displayedImage");
    var zoomLevel = 1; // Initial zoom level
    var maxZoom = 3; // Maximum zoom level
    var minZoom = 0.5; // Minimum zoom level

    var offsetX = 0; // Variable to store X-coordinate of mouse pointer when dragging starts
    var offsetY = 0; // Variable to store Y-coordinate of mouse pointer when dragging starts
    var lastX = 0;
    var lastY = 0;
    var isDragging = false; // Flag to indicate whether dragging is in progress

    function zoomIn() {
        if (zoomLevel < maxZoom) {
            zoomLevel += 0.1; // Increase zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function zoomOut() {
        if (zoomLevel > minZoom) {
            zoomLevel -= 0.1; // Decrease zoom level by a small increment
            updateZoomAndTranslate();
        }
    }

    function updateZoomAndTranslate() {
        displayedImage.style.transform = `scale(${zoomLevel}) translate(${offsetX}px, ${offsetY}px)`;
    }

    function startDragging(e) {
        isDragging = true;
        offsetX = e.clientX - lastX;
        offsetY = e.clientY - lastY;
    }

    function stopDragging() {
        isDragging = false;
    }


    function dragImage(e) {
        if (isDragging) {
            lastX = e.clientX - offsetX;
            lastY = e.clientY - offsetY;

            displayedImage.style.transform = `scale(${zoomLevel}) translate(${lastX}px, ${lastY}px)`;
        }
    }
    
    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mousemove", dragImage);
    document.addEventListener("mouseup", stopDragging);




    // Function to navigate back to page1.html
    function goBack() {
        window.location.href = "discover.html";
    }

    // Attach event listeners to buttons
    //var zoomInButton = document.getElementById("zoomInButton");
    //var zoomOutButton = document.getElementById("zoomOutButton");
    var backButton = document.querySelector(".backButton");

    //zoomInButton.addEventListener("click", zoomIn);
    //zoomOutButton.addEventListener("click", zoomOut);
    backButton.addEventListener("click", goBack);
    //backButton.addEventListener("click", function () {
    //    window.location.href = "page1.html";
    //});


    displayedImage.addEventListener("mousedown", startDragging);
    document.addEventListener("mouseup", stopDragging);
    document.addEventListener("mousemove", dragImage);


    // Retrieve the stored image link from localStorage
    var imageLink = localStorage.getItem("imageLink");

    // Set the displayed image source
    var displayedImage = document.getElementById("displayedImage");
    displayedImage.src = imageLink;

});




// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}









