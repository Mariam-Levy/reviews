const reviews = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Teacher',
        img: 'https://www.course-api.com/images/people/person-1.jpeg',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis turpis, vitae convallis sapien bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
        id: 2,
        name: 'Anna Johnson',
        job: 'firefighter',
        img: 'https://www.course-api.com/images/people/person-2.jpeg',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis turpis, vitae convallis sapien bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
        id: 3,
        name: 'bill anderson',
        job: 'doctor',
        img: 'https://www.course-api.com/images/people/person-4.jpeg',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis turpis, vitae convallis sapien bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    {
        id: 4,
        name: 'peter jones',
        job: 'architect',
        img: 'https://www.course-api.com/images/people/person-3.jpeg',
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor sagittis turpis, vitae convallis sapien bibendum a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.",
    },
    
]

//--- seleccionando items ----
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');



// --- establecer elemento inicial ---
let currentItem = 0;


// --- Cargar el elemento incial ---
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
})


//Mostrar persona basada en el artículo
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}


//mostrar la siguiente persona
nextBtn.addEventListener('click', function() {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
})


//mostrar persona anterior
prevBtn.addEventListener('click', function() {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
})


//mostrar persona al azar
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})
