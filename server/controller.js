module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);

      
    }

    // getFortune: (req, res) => {
    //     const fortunes = ["A faithful friend is a strong defense.", "Any decision you have to make tomorrow is a good decision.",
    //      "Believe it can be done.", "Living with a commitment to excellence shall take you far.", "Self-knowledge is a life long process."]
    //     let randomIndex = Math.floor(Math.random() * fortunes.length);
    //     let randomFortune = fortunes[randomIndex];
         
    //      res.status(200).send(randomFortune)
    // }
}

