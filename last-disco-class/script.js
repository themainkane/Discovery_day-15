const alertsArray  = document.querySelectorAll('.alert');

alertsArray.forEach(i => {
    const attribute = i.getAttribute('data-type');
    
    if (attribute === 'error'){
        i.className = 'alert alert--error';
    } else if (attribute === 'warning') {
        i.className = 'alert alert--warning';
    } else {
        i.className = 'alert alert--success';
    }
});