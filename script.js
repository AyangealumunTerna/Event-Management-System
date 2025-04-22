document.addEventListener("DOMContentLoaded", function () {
    const dashBoard = document.getElementById("dashboard");
    const month = document.getElementById("month");
    const year = document.getElementById("year");
    const day = document.getElementById("day");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");
    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    let currentDay = new Date();
    let today = currentDay.getDate();
    function renderCalendar(date){
        const currentYear = date.getFullYear();
        const currentMonth = date.getMonth();
        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();
        const currentDate= new Date(currentYear, currentMonth, today);

        month.innerHTML = `${months[currentMonth]}`;
        year.textContent = currentYear;
        day.innerHTML = "";

         // previous month and next month
         const prevMonth = new Date(currentYear, currentMonth , 0).getDate();
         for(let i = firstDay; i > 0; i--) {
             const option = document.createElement("option");
             option.textContent = prevMonth - i + 1;
             option.classList.add("fade")
             day.insertBefore(option, day.firstChild);
         }
        // current month
        for (let i = 1; i <= lastDay; i++) {
            const option = document.createElement("option");
            // option.value = i;
            option.textContent = i < 10 ? `0${i}` : i;
            if(i === today && currentMonth === currentDay.getMonth() && currentYear === currentDay.getFullYear()) {option.classList.add("today");
            }
            day.appendChild(option);
        }

        // next month
        const nextDays = 7 - (lastDay + firstDay) % 7;
        for (let i = 1; i <= nextDays; i++) {
            const option = document.createElement("option");
            option.textContent = i < 10 ? `0${i}` : i;
            option.classList.add("fade")
            day.appendChild(option);
        }
        dashBoard.addEventListener("click", function(){
            // e.preventDefault();
            dashBoard.style.backgroundColor = "gray";
        })
        prevButton.addEventListener("click", function(){
            currentDate.setMonth(currentDate.getMonth() -1);
            renderCalendar(currentDate)
        })
        nextButton.addEventListener("click", function(){
            currentDate.setMonth(currentDate.getUTCMonth() + 1);
            renderCalendar(currentDate);
        })
    }
    renderCalendar(currentDay);
});