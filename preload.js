        // JavaScript code to show loading overlay
        document.getElementById("aboutLink").addEventListener("click", function () {
            document.getElementById("loadingOverlay").style.display = "block";
            setTimeout(function () {
            document.getElementById("loadingOverlay").style.display = "none";
        }, 3000); // Menunda penghilangan selama 3 detik
        });

        // You can use AJAX or other techniques to load "about.html" content here.
        // Once the content is loaded, you can hide the loading overlay.