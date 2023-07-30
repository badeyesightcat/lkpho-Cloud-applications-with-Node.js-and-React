const express = require('express');
const app = new express();

let loginDetails = [];

const monthList = [{
    id: 1,
    label: 'January'
}, {
    id: 2,
    label: 'February'
}, {
    id: 3,
    label: 'March'
}, {
    id: 4,
    label: 'April'
}, {
    id: 5,
    label: 'May'
}, {
    id: 6,
    label: 'June'
}, {
    id: 7,
    label: 'July'
}, {
    id: 8,
    label: 'August'
}, {
    id: 9,
    label: 'September'
}, {
    id: 10,
    label: 'October'
}, {
    id: 11,
    label: 'November'
}, {
    id: 12,
    label: 'December'
}
];

app.get("/fetchMonth/:num", (req, res) => {
    const number = req.params.num + 0;

    if (typeof number !== 'number' || number < 1 || number > 12) {
        res.send({ error: 'request number is wrong.'});
    } else {
        const target = monthList.filter(month => month.id === number);
        res.status(200).send(target[0]);
    }
});

app.get("/",(req,res)=>{
    res.send("Welcome to the express server")
})

app.get("/loginDetails",(req,res)=>{
    res.send(JSON.stringify(loginDetails));
})

app.post("/login/:name",(req,res)=>{
    loginDetails.push({"name":req.params.name,"login_time":new Date()});
    res.send(req.params.name + ", You are logged in!")
})

app.get("/:name",(req,res)=>{
    res.send("Hello "+req.params.name)
})

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

