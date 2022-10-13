

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const relaxBtn = document.getElementById("relaxButton")
const breweryBtn = document.getElementById("breweryButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getRelax = () => {
    axios.get("http://localhost:4000/api/relax/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

function getBurger(){
    axios.get("http://localhost:4000/api/burger")
    .then(res => {
        for(let i = 0; res.data.length > i; i++){
        const burger = document.createElement('ul')
        burger.textContent = res.data[i]
        document.body.appendChild(burger)
        }
    })
}

const getBrewery = () => {
    axios.get("https://api.openbrewerydb.org/breweries/random")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
relaxBtn.addEventListener('click', getRelax)
breweryBtn.addEventListener('click', getBrewery)
getBurger()
