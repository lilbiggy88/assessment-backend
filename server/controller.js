module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A faithful friend is a strong defense.", "Any decision you have to make tomorrow is a good decision.",
         "Believe it can be done.", "Living with a commitment to excellence shall take you far.", "Self-knowledge is a life long process."]
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
         
         res.status(200).send(randomFortune)
    },

   getRelax: (req, res) => {
    const relax = ["Take 5 deep breaths","Stop what you are doing and go on a 10 minute walk", "Meditate for 5 minutes", "Take a break and eat something", "Write 5 positive things about yourself"]
    let randomIndex =  Math.floor(Math.random() * relax.length);
    let randomRelax = relax[randomIndex]

   res.status(200).send(randomRelax)
   },                         
 
   getBrewery: (req, res) => {
    res.body

   res.status(200).send()
   },  

   getBurger: (req, res) => {
    let burgers = ["Bacon", "Deluxe", "BBQ"]
    res.status(200).send(burgers)
},
   
}
