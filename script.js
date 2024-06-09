
document.addEventListener("DOMContentLoaded", function () {
  if (document.querySelector('.first-section')) {
    let searchBtn = document.querySelector('.search-btn');
    let pills = document.querySelectorAll('.buttons a');
    const resultBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("eName");
    const li = document.querySelectorAll(".result-box ul li")
    const eventsPakistan = [
      {
        "name": "New Year Day",
        "day": "Monday",
        "date": "2024-01-01"
      },
      {
        "name": "Basant Punchami",
        "day": "Wednesday",
        "date": "2024-02-14"
      },
      {
        "name": "Shivaratri",
        "day": "Friday",
        "date": "2024-03-08"
      },
      {
        "name": "Father's Day",
        "day": "Sunday",
        "date": "2024-06-16"
      }
      ,
      {
        "name": "Shab-e-Meraj (27th Rajab 1445 A.H)",
        "day": "Wednesday",
        "date": "2024-02-07"
      },
      {
        "name": "Holi",
        "day": "Sunday",
        "date": "2024-03-24"
      },
      {
        "name": "Dulhandi",
        "day": "Monday",
        "date": "2024-03-25"
      },
      {
        "name": "Shab-e-Barat (15th Shaban 1445 A.H)",
        "day": "Sunday",
        "date": "2024-02-25"
      },
      {
        "name": "Good Friday",
        "day": "Friday",
        "date": "2024-03-29"
      },
      {
        "name": "Easter/ Day After Easter Sunday",
        "day": "Sunday",
        "date": "2024-03-31"
      },
      {
        "name": "Baisakhi",
        "day": "Saturday",
        "date": "2024-04-13"
      },
      {
        "name": "Eid-e-Rizwan (Baha'i Community only)",
        "day": "Sunday",
        "date": "2024-04-21"
      },
      {
        "name": "Buddha Purnima",
        "day": "Saturday",
        "date": "2024-03-23"
      },
      {
        "name": "Nauroze (Parsi's New Year Day)",
        "day": "Thursday",
        "date": "2024-08-15"
      },
      {
        "name": "Birthday of Lord Zoroaster (Khordad Sal)",
        "day": "Tuesday",
        "date": "2024-08-20"
      },
      {
        "name": "Chehlum (20th Safar 1446 A.H)",
        "day": "Wednesday",
        "date": "2024-08-27"
      },
      {
        "name": "Janam Ashtami",
        "day": "Monday",
        "date": "2024-08-26"
      },
      {
        "name": "Durga Puja",
        "day": "Friday",
        "date": "2024-10-11"
      },
      {
        "name": "Dussehra",
        "day": "Saturday",
        "date": "2024-10-12"
      },
      {
        "name": "Giyarvee Shareef (11th Rabi-us-Sani 1446 A.H)",
        "day": "Wednesday",
        "date": "2024-10-16"
      },
      {
        "name": "Birthday of Guru Valmi Sawami Ji",
        "day": "Tuesday",
        "date": "2024-10-17"
      },
      {
        "name": "Diwali",
        "day": "Friday",
        "date": "2024-11-01"
      },
      {
        "name": "Guru Nanak Dev Jee Birthday",
        "day": "Friday",
        "date": "2024-11-15"
      }
      ,
      {
        "name": "New Year's Eve",
        "day": "Tuesday",
        "date": "2024-12-31"
      }
      ,
      {
        "name": "International Men's Day",
        "day": "Tuesday",
        "date": "2024-11-19"
      }
      ,
      {
        "name": "Eid ul Azha (Eid ul Adha) (Bari Eid)",
        "day": "Monday",
        "date": "2024-06-17"
      }
    ]
    let result = [];
    const checkResult = () => {

      let input = inputBox.value;
      resultBox.innerHTML = "";
      if (input.length) {
        result = eventsPakistan.filter((keyword) => {
          return keyword.name.toLowerCase().includes(input.toLowerCase());
        });

      }

      if (input.length === 0) {
        resultBox.innerHTML = ""; // Clear the result box when input length is zero
      }
      else if (result.length === 0) {
        resultBox.innerHTML = `<ul> <li>No result found</li></ul>`;
      }
      else {

        displayResult(result);
      }
    }


    function checkForClickEvent(li) {
      li.forEach((list) => {
        list.addEventListener("click", () => {
          const selectedOption = list.textContent; // or any other action you want to perform
          let Date = result.filter((res) => res.name === selectedOption)
          generateTimer(Date[0].name, Date[0].date)
        });
      });
   
    }

    inputBox.onkeyup = function () {

      checkResult();

    }
    pills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        const eventName = e.target.id;
        const res = eventsPakistan.filter((eve) => eve.name === eventName)

        generateTimer(res[0].name, res[0].date);

      })
    })
    function displayResult(result) {
      const content = result.map((list) => {
        return "<li>" + list.name + "</li>";
      })

      resultBox.innerHTML = "<ul>" + content + "</ul>";
      const li = document.querySelectorAll(".result-box ul li")

      checkForClickEvent(li);

    }
    const generateTimer = (en,time) => {
      window.location.href = `counter.html?date=${time}&name=${encodeURIComponent(en)}`;

    }

  }
  else {
    // Variables and elements for counter.html
    let days = document.getElementById("days");
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let eN = document.getElementById("eventName");
let displayDate= document.querySelector("#eveDate span")
console.log(displayDate)
    // Function to get URL parameters
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    // Retrieve the date and name parameters from the URL
    const date = getUrlParameter('date');
    const name = getUrlParameter('name');

    console.log(date);
    console.log(name);
    eN.textContent = name;

    let targetDate = new Date(date);

    // Check if the target date has already passed
    const now = new Date();
    if (now > targetDate) {
        targetDate.setFullYear(targetDate.getFullYear() + 1);
      
    }
  displayDate.innerText= targetDate.toLocaleDateString() + " (MM/DD/YYYY) ";

    // Update the countdown every second
    const countdownInterval = setInterval(() => {
        updateCountdown(targetDate);
    }, 1000);

    // Initial call to start the countdown immediately
    updateCountdown(targetDate);

    function updateCountdown(targetDate) {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

        // Update the HTML elements to display the countdown
        days.innerHTML = daysLeft;
        hours.innerHTML = hoursLeft;
        minutes.innerHTML = minutesLeft;
        seconds.innerHTML = secondsLeft;

        // Stop the timer when it reaches zero
        if (daysLeft <= 0 && hoursLeft <= 0 && minutesLeft <= 0 && secondsLeft <= 0) {
            clearInterval(countdownInterval);
        }
    }
  }


})



































/**const url = 'https://worldwide-national-holidays.p.rapidapi.com/getholidays?country=us';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': 'c3dfd50739msh1de0b03a9d7cfa0p15fa61jsneb910671f87e',
    'x-rapidapi-host': 'worldwide-national-holidays.p.rapidapi.com'
  }
};

async function fetchData(url,option){
    try {
        const response = await fetch(url, options);
        const result = await response.text();

        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }

} */
// const Data=fetchData(url,options);