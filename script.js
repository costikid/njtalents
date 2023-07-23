


// ES6 Class
class TypeWriter {
    constructor(txtElement, words, wait = 2000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.isDeleting = false;
      this.typeSpeed = 50; // Adjust typing speed here
      this.deleteSpeed = 50; // Adjust deleting speed here
      this.type();
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if (this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        this.typeSpeed = this.deleteSpeed;
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        this.typeSpeed = this.typeSpeed;
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // If word is complete
      if (!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        this.typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        this.typeSpeed = this.typeSpeed;
      }
  
      setTimeout(() => this.type(), this.typeSpeed);
    }
  }
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }


    function openModal(imageUrl) {
      const modal = document.getElementById('myModal');
      const modalImg = document.getElementById('modalImage');
      modal.style.display = 'block';
      modalImg.src = imageUrl;
    }
  
    function closeModal() {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
    }
  
    // Close the modal when the user clicks outside of it
    window.onclick = function(event) {
      const modal = document.getElementById('myModal');
      if (event.target === modal) {
        closeModal();
      }
    };

    // Images that change automatically in the are you in Kigali section

  const carousel = document.querySelector('.carousel');
  const images = carousel.getElementsByTagName('img');
  let currentIndex = 0;

  function showImage(index) {
    for (let i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    images[index].style.display = 'block';
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Show the first image
  showImage(currentIndex);

  // Automatically change images every 4 seconds
  setInterval(nextSlide, 4000);

  