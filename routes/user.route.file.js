const express = require("express");
const fs = require('fs')
const router = express.Router();
const { promisify } = require('util')
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

// router.post("/login",(req, res) => {
//     console.log(req);   
//     let msg="Username or password is incorrect. Please try again!";
//     const username=req.body.username;
//     const password=req.body.password;
//     console.log("Input: "+username + "\t"+password);
//     fs.readFile('./users.json', function (err, data) {
//          if(data.length !==0) 
//          {
//              credentials = JSON.parse(data);
//              for(var i = 0; i < credentials.length; i++)
//              {
//                 var obj = credentials[i];
//                 console.log(obj.username + "\t"+ obj.password);
//                 if(obj.username===username&&obj.password===password)
//                 {
//                     msg="You logged in successfully!";
//                     console.log("inside:"+msg);
//                     break;
//                 }
//              }
//          }   
//         console.log("outside:"+ msg);
//         return res.send(msg);
//     });
// });

// router.post("/login", async (req, res) => {
//     console.log(req);
//     let msg = "Username or password is incorrect. Please try again!";
//     const username = req.body.username;
//     const password = req.body.password;
//     console.log("Input: " + username + "\t" + password);
//     const readFile = promisify(fs.readFile);
//     try {
//         const data = await readFile('./users.json');
//         if (data.length !== 0) {
//             credentials = JSON.parse(data);
//             for (var i = 0; i < credentials.length; i++) {
//                 var obj = credentials[i];
//                 console.log(obj.username + "\t" + obj.password);
//                 if (obj.username === username && obj.password === password) {
//                     msg = "You logged in successfully!";
//                     console.log("inside:" + msg);
//                     break;
//                 }
//             }
//         }
//         console.log("outside:" + msg);
//     }
//     catch (err) {
//         console.log(err);
//         return res.send(msg);
//     }
//     return res.send(msg);
// });


// router.post("/register", (req, res) => {
//     fs.readFile('./users.json', function (err, data) {
//         var user = null;
//         if (data.length !== 0) {
//             credentials = JSON.parse(data);
//             console.log("type of credentials: " + typeof (credentials));
//             credentials.push(req.body);
//             user = JSON.stringify(credentials);
//         }
//         else {
//             var credentials = new Array();
//             credentials.push(req.body);
//             user = JSON.stringify(credentials);
//         }
//         fs.writeFile('./users.json', user, 'utf8', (err) => {
//             if (err) {
//                 console.log(`Error writing file: ${err}`);
//             } else {
//                 console.log(`File is written successfully!`);
//             }
//         });

//     });
//     return res.send("Hi " + req.body.username + ", you are registered scuccessfully!");

// });

router.post("/login", async (req, res) => {
    console.log(req);
    let msg = "Username or password is incorrect. Please try again!";
    const username = req.body.username;
    const password = req.body.password;
    console.log("Input: " + username + "\t" + password);
    try {
        const data = await readFile('./users.json');
        if (data.length !== 0) {
            credentials = JSON.parse(data);
            for (var i = 0; i < credentials.length; i++) {
                var obj = credentials[i];
                console.log(obj.username + "\t" + obj.password);
                if (obj.username === username && obj.password === password) {
                    msg = "You logged in successfully!";
                    console.log("inside:" + msg);
                    break;
                }
            }
        }
        console.log("outside:" + msg);
    }
    catch (err) {
        console.log(err);
        return res.send(msg);
    }
    return res.send(msg);
});


router.post("/register", async(req, res) => {
    try {
        const data = await readFile('./users.json');
        var user = null;
        if (data.length !== 0) {
            credentials = JSON.parse(data);
            console.log("type of credentials: " + typeof (credentials));
            credentials.push(req.body);
            user = JSON.stringify(credentials);
        }
        else {
            var credentials = new Array();
            credentials.push(req.body);
            user = JSON.stringify(credentials);
        }
        await writeFile('./users.json',user,"utf8");
    }
    catch (err) {
        console.log(err);
        return res.send("Not able to register, Please try again");
    }

    return res.send("Hi " + req.body.username + ", you are registered scuccessfully!");

});

module.exports = router;