let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById("total");
let interviewCount = document.getElementById("interviewCount");
let rejectedCount = document.getElementById("rejectedCount");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("allcards");
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById("filtered-section");



function calculateCount() {
    total.innerText = allCardSection.children.length
    interviewCount.innerText = interviewList.length
    rejectedCount.innerText = rejectedList.length

}
calculateCount();

function toggleStyle(id) {
    
    const buttons = [allFilterBtn, interviewFilterBtn, rejectedFilterBtn];
    buttons.forEach(btn => {
        if(btn.id == id){
            btn.classList.add('bg-blue-500', 'text-white');
            btn.classList.remove('bg-white', 'text-gray-500');

        }
        else{
            btn.classList.add('bg-white', 'text-gray-500');
            btn.classList.remove('bg-blue-500', 'text-white')
        } 
        
    });

    
    const selected = document.getElementById(id)
    currentStatus = id;
    if(id == 'interview-filter-btn'){
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id =='rejected-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }


}

mainContainer.addEventListener('click', function(event){
    
    if(event.target.classList.contains('interview-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const statusBtn = parentNode.querySelector('.applystatus');

        statusBtn.innerText = 'INTERVIEW';
        statusBtn.className = "applystatus btn btn-outline mb-2 border-2 border-emerald-500 text-emerald-500 py-2 px-3";



    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobTitle = parentNode.querySelector('.jobTitle').innerText;
    const applystatus = parentNode.querySelector('.applystatus').innerText;
    const jobPosition = parentNode.querySelector('.jobPosition').innerText;
    const jobdescription = parentNode.querySelector('.jobdescription').innerText;

    parentNode.querySelector('.applystatus').innerText = 'INTERVIEW'

    const cardInfo = {
        companyName, 
        jobTitle, 
        applystatus: 'INTERVIEW', 
        jobPosition, 
        jobdescription
    }
const interviewExist = interviewList.find(item => item.companyName == cardInfo.companyName)


if(!interviewExist){
    interviewList.push(cardInfo);
}

rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

if(currentStatus == "rejected-filter-btn"){
  renderRejected();
}
calculateCount()

    }
    else if(event.target.classList.contains('rejected-btn')){
        const parentNode = event.target.parentNode.parentNode;
        const statusBtn = parentNode.querySelector('.applystatus');

        statusBtn.innerText = 'REJECTED';
        statusBtn.className = "applystatus btn btn-outline mb-2 border-2 border-red-500 text-red-500 py-2 px-3";



    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobTitle = parentNode.querySelector('.jobTitle').innerText;
    const applystatus = parentNode.querySelector('.applystatus').innerText;
    const jobPosition = parentNode.querySelector('.jobPosition').innerText;
    const jobdescription = parentNode.querySelector('.jobdescription').innerText;

    parentNode.querySelector('.applystatus').innerText = 'REJECTED'

    const cardInfo = {
        companyName, 
        jobTitle, 
        applystatus: 'REJECTED', 
        jobPosition, 
        jobdescription
    }
const interviewExist = rejectedList.find(item => item.companyName == cardInfo.companyName)


if(!interviewExist){
    rejectedList.push(cardInfo);
}

interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

if(currentStatus == "interview-filter-btn"){
  renderInterview();
}

calculateCount()


    }

    // delete 
    const deleteBtn = event.target.closest('.delete-btn');
    if(deleteBtn){
        const parentNode = deleteBtn.closest('.card');
        const companyName = parentNode.querySelector('.companyName').innerText;

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName != companyName);

        parentNode.remove();

        calculateCount();

        if(currentStatus === 'interview-filter-btn'){
            renderInterview();
        }
        if(currentStatus === 'rejected-filter-btn'){
            renderRejected();
        }
    }

})

function getEmptyState() {
    return `
    <div class="card bg-base-100 shadow-sm mt-4 mb-10">
  <figure class="p-4 rounded-2xl mb-4 px-10 pt-27">
    <img
      src="jobs.png"
      alt="No Jobs Theme"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h3 class="card-title text-blue-950 font-bold text-xl mb-1">No jobs available</h3>
    <p class="text-slate-500 mb-27">Check back soon for new job opportunities</p>
  </div>
</div>
    `;
}

function renderInterview() {
 filterSection.innerHTML = '';

 if(interviewList.length === 0){
    filterSection.innerHTML =getEmptyState();
    return;
 }

 for(let interview of interviewList){
    console.log(interview);

    let div = document.createElement('div');
    div.className = 'card card-container p-6 rounded border-2 border-gray-100 mt-4 shadow-sm'
    div.innerHTML = `
              <!-- main part 1  -->
                 <div class="flex justify-between items-start">
                    <div class="">
                        <h3 class="companyName text-blue-950 font-bold mb-1">${interview.companyName}</h3>
                        <p class="jobTitle text-slate-500 mb-5">${interview.jobTitle}</p>
                        
                            

                    </div>
                    <button class="delete-btn btn btn-soft btn-circle bg-white"><i class="fa-regular fa-trash-can"></i></button>

             </div>
             <!-- main part 2  -->
             <div>
                <p class="jobPosition text-slate-500 mb-5">${interview.jobPosition}</p>
 <br>
 <button id="not-applied-btn" class="applystatus btn btn-outline mb-2 border-2 border-emerald-500 text-emerald-500 py-2 px-3">${interview.applystatus}</button>
 <br>
 <p class="jobdescription text-slate-800 mb-5">${interview.jobdescription}</p>

             </div>
             <!-- main part 3  -->
              <div class="card-btn flex gap-2">
                <button class="interview-btn btn btn-outline border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-200">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200">REJECTED</button>
              </div>`

              filterSection.appendChild(div)
 }
}

function renderRejected() {
 filterSection.innerHTML = '';

 if(rejectedList.length === 0){
    filterSection.innerHTML = getEmptyState();
    return;
 }

 for(let rejected of rejectedList){
    console.log(rejected);

    let div = document.createElement('div');
    div.className = 'card card-container p-6 rounded border-2 border-gray-100 mt-4 shadow-sm'
    div.innerHTML = `
              <!-- main part 1  -->
                 <div class="flex justify-between items-start">
                    <div class="">
                        <h3 class="companyName text-blue-950 font-bold mb-1">${rejected.companyName}</h3>
                        <p class="jobTitle text-slate-500 mb-5">${rejected.jobTitle}</p>
                        
                            

                    </div>
                    <button class="delete-btn btn btn-soft btn-circle bg-white"><i class="fa-regular fa-trash-can"></i></button>

             </div>
             <!-- main part 2  -->
             <div>
                <p class="jobPosition text-slate-500 mb-5">${rejected.jobPosition}</p>
 <br>
 <button id="not-applied-btn" class="applystatus btn btn-outline mb-2 border-2 border-red-500 text-red-500 py-2 px-3">${rejected.applystatus}</button>
 <br>
 <p class="jobdescription text-slate-800 mb-5">${rejected.jobdescription}</p>

             </div>
             <!-- main part 3  -->
              <div class="card-btn flex gap-2">
                <button class="interview-btn btn btn-outline border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors duration-200">INTERVIEW</button>
                <button class="rejected-btn btn btn-outline border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-colors duration-200">REJECTED</button>
              </div>`

              filterSection.appendChild(div)
 }
}
