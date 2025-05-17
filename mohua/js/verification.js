// Verification Page Script
document.addEventListener('DOMContentLoaded', function() {
    // Initialize verification
    function initVerification() {
        const checkbox = document.getElementById('_checkbox-26');
        const verifyBtn = document.querySelector('.submit-btn');
        
        // Enhanced verification function
        function handleVerification() {
            // Show loading spinner
            document.querySelector('.loader').style.display = 'flex';
            
            // Simulate verification delay
            setTimeout(function() {
                // Complete verification
                if (typeof _om === 'function') {
                    _om();
                } else {
                    // Fallback if _om is not defined
                    window.location.href = 'https://partner-offer.com/convert';
                }
            }, 1500);
        }
        
        // Add event listeners
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                verifyBtn.disabled = false;
            }
        });
        
        verifyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (checkbox.checked) {
                handleVerification();
            } else {
                alert('Please confirm you are not a robot');
            }
        });
    }
    
    // Start countdown timer (2 minutes)
    function startCountdown() {
        let timeLeft = 120;
        const countdownElement = document.createElement('div');
        countdownElement.className = 'countdown';
        countdownElement.innerHTML = `Time remaining: <span>02:00</span>`;
        document.querySelector('section').prepend(countdownElement);
        
        const timer = setInterval(function() {
            timeLeft--;
            const minutes = Math.floor(timeLeft / 60);
            const seconds = timeLeft % 60;
            
            countdownElement.innerHTML = `Time remaining: <span>${
                minutes.toString().padStart(2, '0')}:${
                seconds.toString().padStart(2, '0')}</span>`;
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                countdownElement.innerHTML = 'Time expired! Please refresh the page';
            }
        }, 1000);
    }
    
    // Initialize both
    initVerification();
    startCountdown();
    
    // Track verification page view
    if (typeof window.tracker !== 'undefined') {
        window.tracker.logPageView('verification');
    }
});