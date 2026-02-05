const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Server del mio blog')
    const posts = [
        {
            title: ("Ciambellone"),
            content: ("ricetta ciambellone"),
            image: ("/public/images/ciambellone.jpeg"),
            tags: ["dolce"]
        },
        {
            title: ("Cracker alla barbabietola"),
            content: ("ricetta cracker alla barbabietola"),
            image: ("/public/images/cracker_barbietola.jpeg"),
            tags: ["pane", "verdura"]
        },
        {
            title: ("Pane fritto dolce"),
            content: ("ricetta pane fritto dolce"),
            image: ("/public/images/pane_fritto_dolce.jpeg"),
            tags: ["pane", "dolce"]
        },
        {
            title: ("Pasta con barbabietole"),
            content: ("ricetta pasta con barbabietole"),
            image: ("/public/images/pasta_barbabietola.jpeg"),
            tags: ["pasta", "verdura"]
        },
        {
            title: ("Torta paesana"),
            content: ("ricetta torta paesana"),
            image: ("/public/images/torta_paesana.jpeg"),
            tags: ["dolce"]
        }
    ]
})

app.get('/bacheca', (req, res) => {
    res.send('bacheca del mio blog')
})

app.listen(port, () => {
    console.log(`Esempio ${port}`)
})