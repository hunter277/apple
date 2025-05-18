document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Connect button functionality
    const connectButtons = document.querySelectorAll('.connect-btn');
    const verificationModal = new bootstrap.Modal(document.getElementById('verificationModal'));
    
    connectButtons.forEach(button => {
        button.addEventListener('click', function() {
            verificationModal.show();
        });
    });

    // Form submission
    const connectForm = document.getElementById('connect-form');
    if (connectForm) {
        connectForm.addEventListener('submit', function(e) {
            e.preventDefault();
            verificationModal.hide();
            
            // Redirect to verification page after a short delay
            setTimeout(() => {
                window.location.href = 'verify.html';
            }, 500);
        });
    }
    
    // Simulate loading profiles (in a real app, this would be an API call)
    setTimeout(() => {
        // This would be where you process actual profile data
        console.log('Profiles loaded');
    }, 1000);
});