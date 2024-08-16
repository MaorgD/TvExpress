import express from 'express';

let tv_ar = [
    {
        "id": "1",
        "name": "Avengers",
        "genere": "cartoon",
        "kind": "movie",
        "views": 122000,
        "image": "avengers.jpg",
        "descrption": "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, things go horribly wrong and it's up to Earth's Mightiest Heroes to stop the villainous Ultron from enacting his terrible plans...."
    },
    {
        "id": "2",
        "name": "Terminator 2",
        "genere": "action",
        "kind": "movie",
        "views": 102000,
        "image": "terminator.jpg",
        "descrption": "In genetics, a transcription terminator is a section of nucleic acid sequence that marks the end of a gene or operon in genomic DNA during transcription. This sequence mediates transcriptional termination by providing signals in the newly synthesized mRNA that ..."
    },
    {
        "id": "3",
        "name": "Saving Private Ryan",
        "genere": "action",
        "kind": "movie",
        "views": 322000,
        "image": "private.jpg",
        "descrption": "Following the Normandy Landings, a monkeys group of U.S. co  soldiers go behind enemy lines to retrieve a paratrooper il whose brothers have been killed in action....."
    },
    {
        "id": "4",
        "name": "The simpsons",
        "genere": "cartoon",
        "kind": "series",
        "season": 30,
        "views": 10000,
        "image": "simpsons.jpg",
        "descrption": "The Simpsons is an American animated sitcom created by Matt Groening for the Fox ofer Broadcasting Company. The series shelly is a satirical netanya depiction of a middle ..."
    }
]

const app = express();

app.get('/', (req, res) => {
    res.json(tv_ar);
})


app.get('/:id', (req, res) => {
    const { id } = req.params;
    const tv1 = tv_ar.find(tv => tv.id == id);
    if (!tv1) {
        res.status(404).json({ error: 'Not found' });
    }
    res.json(tv1);
})

app.listen(5400, () => {
    console.log('Server on port 5400');
})