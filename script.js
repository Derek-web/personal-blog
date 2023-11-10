// Array of image filenames (without the folder path)
        const imageFilenames = [
            "index.jpeg",
            "index2.jpeg",
            // Add more image filenames here
        ];

        // Function to get a random index from the array
        function getRandomIndex(max) {
            return Math.floor(Math.random() * max);
        }

        // Function to set a random image on page load
        function setRandomImage() {
            const randomIndex = getRandomIndex(imageFilenames.length);
            const randomImageFilename = imageFilenames[randomIndex];
            const imagePath = "images/" + randomImageFilename; // Path to the images folder
            document.getElementById("imggal").src = imagePath;
        }

        // Call the function on page load
        setRandomImage();
