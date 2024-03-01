document.addEventListener('DOMContentLoaded', function() {
    const members = document.querySelectorAll('.member');

    members.forEach(member => {
        member.addEventListener('click', function(event) {
            members.forEach(m => m.classList.remove('enlarged'));
            this.classList.add('enlarged');
            event.stopPropagation();
        });
    });

    document.body.addEventListener('click', function(event) {
        if (!event.target.closest('.member')) {
            members.forEach(m => m.classList.remove('enlarged'));
        }
    });
});
