// const searchValueInput = document.getElementById('search-Value');
// const loader = document.getElementById('loading');
// const showAll = document.getElementById('show-all');
// const showAllButton = document.getElementById('show-all-btn');
// const loadPhones = async (searchText, datalimmit) => {
//     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
//     const res = await fetch(url);
//     const data = await res.json();
//     displayPhone(data.data, datalimmit);
// };



// const displayPhone = (phones, datalimmit) => {

//     const phoneContainer = document.getElementById('phone-container');
//     phoneContainer.innerHTML = '';
//     if (datalimmit && phones.length > 10) {
//         phones = phones.slice(0, 10);
//         showAll.classList.remove('d-none')

//     } else {
//         showAll.classList.add('d-none')
//     }

//     const noPhone = document.getElementById('noPhone');
//     if (phones.length === 0) {
//         noPhone.classList.remove('d-none')
//         searchValueInput.value = '';

//     } else {

//         noPhone.classList.add('d-none')
//         searchValueInput.value = '';
//     }


//     for (const phone of phones) {
//         const phoneDiv = document.createElement('div');
//         phoneDiv.classList.add('col');
//         phoneDiv.innerHTML = `

//             <div class="card bg-danger-subtile">
//             <img src="${phone.image}" class="card-img-top p-4 w-50 mx-auto" alt="phone Image">
//             <div class="card-body">
//             <h5 class="card-title">${phone.phone_name}</h5>
//             <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//              <button type="button" class="btn btn-danger" onClick="details('${phone.slug}' data-bs-toggle="modal" data-bs-target="#exampleModal">
//              Details
//             </button>
//             </div>
//             </div>

//             `;
//         phoneContainer.appendChild(phoneDiv);
//     }

//     toggleloader(false)

// };

// const toggleloader = isloading => {
//     if (isloading) {
//         loader.classList.remove('d-none');
//     } else {
//         loader.classList.add('d-none')
//     }

// };
// const processSeacrch = (datalimmit) => {
//     const searchValueInput = document.getElementById              ('search-Value'); 
//     const searchValue = searchValueInput.value;
//     searchValueInput.value = '';
//     loadPhones(searchValue, datalimmit);
// }
// showAllButton.addEventListener('click', () => {
//     processSeacrch();
// });

// const searchByPhone = () => {
//     toggleloader(true);
//     processSeacrch(10);
// };

// const details = async (details) => {

//     const url = `https://openapi.programming-hero.com/api/phone/${details}`;
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data.data);



// };

// loadPhones('phone', 10);
const showAllBtn = document.getElementById('showAll-btn');
const showAll = document.getElementById('showAll');
const insertCard = document.getElementById('insert-card');
const spinner = document.getElementById('spinner')
const searchButton = document.getElementById('search-btn');
const noFoundPhone = document.getElementById('no-found');

const loadPhones = async (searchText, dataLimit) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displayPhone(data.data, dataLimit);
};

const displayPhone = (phones, dataLimit) => {
    insertCard.innerHTML = '';
    // * Here Use     no found 
    if ( phones.length === 0) {
        noFoundPhone.classList.remove('hidden')

    } else {
        noFoundPhone.classList.add('hidden')

    }
    // * Here Use     no found phones  end 
    // * Here Use     no found phones  end 

    if (dataLimit && phones.length > 10) {
        phones = phones.slice(0, 10)
        showAll.classList.remove('hidden');

    } else {
        showAll.classList.add('hidden');

    }


    // * Here Use     no found phones  end 
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img class="rounded-t-lg mx-auto" src="${phone.image}" alt="" />
                    </a>
                    <div class="p-5">
                        <a href="#">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${phone.phone_name}</h5>
                        </a>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        
                        <button data-modal-target="modalOne" data-modal-toggle="modalOne" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                        More Details
                      </button>
                      
                    </div>
                </div>
                    
                    `;
        insertCard.appendChild(div);

    });
    loader(false)

};

// ? spinner 
function loader(isLoading) {
    if (isLoading) {
        spinner.classList.remove('hidden');

    } else {

        spinner.classList.add('hidden');
    }

}

// ? spinner 
// ? here show button function
const processSearch = (dataLimit) => {
    loader(true)
    const searchInput = document.getElementById('search-input');
    searchValue = searchInput.value;
    loadPhones(searchValue, dataLimit)
  
   
}
showAllBtn.addEventListener('click', function () {
    processSearch();


});

// ? here show button function


searchButton.addEventListener('click', function () {
    processSearch(10)
    
});

loadPhones('apple')