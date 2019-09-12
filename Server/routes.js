const express = require('express');
const pool = require('./pg-connection-pool');
const router = express.Router();


router

//get player info w/ api = true
    .get("/players", (req,res)=> {
         
        const statement = "select * from player";

        pool.query(statement).then((response) => {
            if(response.rows.length > 0){
                res.status(200).json(response.rows);
            }
            else {
                res.status(400).send();
            }
        }).catch(err => {
            console.log(err);
            res.status(400).send();
        })

    })




//get player info w/ api = false - NO LONGER NEEDED
//    .get("/players/noapi", (req,res)=> {
         
//         const statement = "select playerid,firstname,lastname,position,playerpic,mugshotpic,av,price from player where apidataavailable = false";

//         pool.query(statement).then((response) => {
//             if(response.rows.length > 0){
//                 res.status(200).json(response.rows);
//             }
//             else {
//                 res.status(400).send();
//             }
//     }).catch(err => {
//         console.log(err);
//         res.status(400).send();
//     })

// })

// put player price in db
    .put("/player/:id", (req,res)=> {
        const putBody = req.body;
        const playerId = req.params.id;

        const statement = "UPDATE player set price=$1::int WHERE playerid=$2::int";

        pool.query(statement, [putBody.price,playerId]).then(() => {
            res.status(200).send();

        }).catch(err => {
            console.log(err);
            res.status(500).send();
        })

    })


module.exports = router;

