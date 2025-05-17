// Initialize profile connection buttons
document.addEventListener('DOMContentLoaded', function() {
    const geneBtns = document.querySelectorAll('.gene-btn');
    const generatorA = document.querySelector('.generatorA');
    
    // Show registration form when connect button is clicked
    geneBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            generatorA.classList.add('on');
        });
    });
    
    // Close registration form when clicking outside
    generatorA.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('on');
        }
    });
    
    // Form submission
    const connectForm = document.getElementById('connect-form');
    if (connectForm) {
        connectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Validate form
            const phone = document.getElementById('email').value;
            const region = document.getElementById('region').value;
            const ageRange = document.getElementById('ageRange').value;
            
            if (!phone || !region || !ageRange) {
                alert('Please fill in all fields');
                return;
            }
            
            // In a real implementation, you would submit the form here
            // For now, we'll just proceed to verification
            window.location.href = 'verify.html';
        });
    }
    
    // Track clicks for analytics
    document.querySelectorAll('a, button').forEach(element => {
        element.addEventListener('click', function() {
            if (typeof window.tracker !== 'undefined') {
                window.tracker.logClick(this.textContent.trim());
            }
        });
    });
});

