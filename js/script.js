$(document).ready(function() {
    // When the document is ready, execute the following functions
 
    // Load external HTML content into specified elements
    $(function() {
        // Load the content of 'meta.html' into the element with id 'head'
        $("#head").load("meta.html");
        
        // Load the content of 'header.html' into the element with id 'header'
        $("#header").load("header.html", function() {
            $('#megamenu svg').click(function() {
                $('#map input').prop("checked", false);
            });
        });
        
        // Load the content of 'footer.html' into the element with class 'footer-section'
        $(".footer-section").load("footer.html");
    });



});
$(document).ready(function() {
    // Detect the current page
    const currentPage = window.location.pathname.endsWith('/') ? 'index.html' : window.location.pathname.split("/").pop();
    const headercontainer = $("#headcontainer");
    const header = $("#header");
    const logo = $("#img-header");
    const links = $("#map > a");
    const box = $("#list-Container>li>input");

    
    // Apply white header style for product pages
    if (currentPage !== "index.html") {
        headercontainer.css({
            "height": "110px",
        })
        header.css({
            "background-color": "white",
            "transition": "background-color 0.3s ease",

        });
        box.css({
            "border": "1px solid white", 
            "box-shadow": ".1px .1px 5px red",
        });
        links.css({
            "color": "black",
        });
        logo.attr("src", "./img/bata_logo_black.png").css({
            "transform": "scale(1.45) translateY(3px)",
        });
        document.querySelectorAll('.product-list-filter input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const sectionId = this.id.replace('-checkbox', ''); // Extract section ID
                const section = document.getElementById(sectionId);
                const label = this.parentElement; // Get the parent label element
                
                if (this.checked) {
                    section.style.display = 'flex'; // Set fixed height when section is shown
                    label.style.color = 'white';
                    label.style.backgroundColor = 'black'; // Change background color when checked
                } else {
                    section.style.display = 'none';
                    label.style.backgroundColor = ''; // Reset background color when unchecked
                    label.style.color = 'black';
                }
            });
        });
        
        
    }

    // Scroll behavior for index.html
    if (currentPage === "index.html") {
        $(window).on("scroll", function() {
            const scrollY = $(this).scrollTop();
            if (scrollY > 600) {
                header.css({"background-color": "white"});
                box.css({"box-shadow": ".1px .1px 5px red"});
                links.css({"color": "black"});
                logo.attr("src", "./img/logo-header-removebg-preview.png").css({
                    "transform": "scale(1.45) translateY(3px)",
                });
            } else {
                header.css({"background-color": "transparent"});
                logo.attr("src", "./img/bata_logo_black.png").css({"transform": ""});
                links.css({"color": "white"});
                box.css({"box-shadow": ".1px .1px 2px black"});
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".collections-carousel");
    const items = document.querySelectorAll(".collection-item"); // All slides/items
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let currentIndex = 0; // Track the current index

    // Scroll to the specified index
    function scrollToIndex(index) {
        const itemWidth = items[0].offsetWidth; // Width of a single slide/item
        const scrollPosition = itemWidth * index; // Calculate scroll position
        carousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }

    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % items.length; // Move to the next slide, wrap around
        scrollToIndex(currentIndex);
    });

    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + items.length) % items.length; // Move to the previous slide, wrap around
        scrollToIndex(currentIndex);
    });
   
});
