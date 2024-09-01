document.addEventListener('DOMContentLoaded', function() {
    const publicites = document.querySelectorAll('.publicite');

    publicites.forEach(pub => {
        pub.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
        });

        pub.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
        });
    });
});
