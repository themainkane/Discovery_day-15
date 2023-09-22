
// const employee = {
//     first_name: 'Alfred',
//     last_name: 'Pennyworth',
//     age: 67,
//     occupation: 'butler',
//     place_of_residence: 'Gotham',
//     photo_url: 'https://classes.codingbootcamp.cz/assets/classes/1177/alfred.jpg'
// }

// const employeeDiv = document.querySelector('.employees');

// employeeDiv.innerHTML = `<div class="employee">
//     <div class="employee__photo">
//         <img src="${employee.photo_url}" alt="${employee.first_name} ${employee.last_name}">
//     </div>
//     <div class="employee_info">
//         <div class="employee__full-name">${employee.first_name} ${employee.last_name}</div>
//         <div class="employee__occupation">${employee.occupation}</div>
//         <div class="employee__residence">Last known place of residence:${employee.place_of_residence}</div>
//         <div class="employee__age">Age: ${employee.age} years old</div>
//     </div>
// </div>`

const alerts = [
    'Unable to access resource. User is not authorized.',
    'You are missing proper user permissions.',
    'Administrators have been notified of this action.',
    'Please remain where you are, police is on the way.'
];

const mainContainer = document.createElement('div')
mainContainer.classList.add('alerts')
document.body.appendChild(mainContainer)

const createAlert =  () => {
    alerts.forEach( i => {
    let newAlert = document.createElement('div')
    newAlert.classList.add('alert')
    newAlert.innerText = i;
    mainContainer.appendChild(newAlert)

    let closeAlert = document.createElement('div')
    closeAlert.classList.add('alert__close')
    closeAlert.innerHTML = '&times;';
    newAlert.appendChild(closeAlert)
    
    newAlert.addEventListener( 'click', (e) => {
        newAlert.className = 'green_white_alert';
    })

    closeAlert.addEventListener( 'click', (e) => {
        e.stopPropagation();
        newAlert.className = 'close__alert';
    })
})

}; 

createAlert();

// let alertChangeArray = document.querySelectorAll('div.alert');          //cannot use newAlert becasuse block scoped, should be a better solution..
// // queryselectorall returns an array, so requires a LOOP to access and effect inecies in the array


// alertChangeArray.forEach( j => {
// j.addEventListener('click',(e) => {
//     j.className = 'green_white_alert';
//         })
// })

// let alertCloseArray = document.querySelectorAll('div.alert__close')

// alertCloseArray.forEach( k => {
//     k.addEventListener('click', (e) =>
//     k.parentNode.className = 'close__alert'
//     )
// })