// Handle dropdown toggle
const topicBtns = document.querySelectorAll('.dropdown-btn');
const dropdownContents = document.querySelectorAll('.dropdown-content');

topicBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        // Close other dropdowns
        dropdownContents.forEach((content, i) => {
            if (i !== index) {
                content.style.display = 'none';
            }
        });

        // Toggle the current dropdown
        const currentDropdown = dropdownContents[index];
        currentDropdown.style.display = currentDropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Handle sub-topic video change
const subTopicBtns = document.querySelectorAll('.sub-dropdown-btn');
const videoPlayer = document.getElementById('videoPlayer');

subTopicBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Update the iframe src based on the sub-topic clicked
        let videoUrl = 'https://www.youtube.com/embed/5OxxxK4NOYw?si=5wZFmkmt6YILyQtW';

        if (btn.textContent === 'vector-Sub-topic 1') {
            videoUrl = 'https://www.youtube.com/embed/Izxoms9Us14?si=T35HVTaPwh0GuS7H'; // Fixed extra quote
        } else if (btn.textContent === 'vector-Sub-topic 2') {
            videoUrl = 'https://www.youtube.com/embed/KH3v4nwGtLE?si=V8h7mSO_t6RiA4Sa'; // Fixed extra quote
        } else if (btn.textContent === 'current-Sub-topic 1') {
            videoUrl = 'https://www.youtube.com/embed/tWSM4o0dAcU?si=49wl3kuU-9S-bzQa'; // Fixed extra quote
        } else if (btn.textContent === 'current-Sub-topic 2') {
            videoUrl = 'https://www.youtube.com/embed/yxPhi8uquTs?si=ecjOzgZQ74xXRmJ5'; // Fixed extra quote
        } else if (btn.textContent === 'current-Sub-topic 3') {
            videoUrl = 'https://www.youtube.com/embed/DI9ojANT55M?si=9leKCUhdwehYWA_J'; // Fixed extra quote
        }

        // Update the iframe source
        videoPlayer.src = videoUrl;
    });
});
