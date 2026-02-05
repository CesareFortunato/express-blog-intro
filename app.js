const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Server del mio blog')
    
})

app.get('/bacheca', (req, res) => {
    const posts = [
        {
            title: ("Ciambellone"),
            content: ("ricetta ciambellone"),
            image: ("/images/ciambellone.jpeg"),
            tags: ["dolce"]
        },
        {
            title: ("Cracker alla barbabietola"),
            content: ("ricetta cracker alla barbabietola"),
            image: ("/images/cracker_barbietola.jpeg"),
            tags: ["pane", "verdura"]
        },
        {
            title: ("Pane fritto dolce"),
            content: ("ricetta pane fritto dolce"),
            image: ("/images/pane_fritto_dolce.jpeg"),
            tags: ["pane", "dolce"]
        },
        {
            title: ("Pasta con barbabietole"),
            content: ("ricetta pasta con barbabietole"),
            image: ("/images/pasta_barbabietola.jpeg"),
            tags: ["pasta", "verdura"]
        },
        {
            title: ("Torta paesana"),
            content: ("ricetta torta paesana"),
            image: ("/images/torta_paesana.jpeg"),
            tags: ["dolce"]
        }
    ]

    res.send(posts)
})

app.listen(port, () => {
    console.log(`Esempio ${port}`)
})