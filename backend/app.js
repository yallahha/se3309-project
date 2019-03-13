//app.js

//Call Express, HTTP, SQL, BodyParser, 
var express    = require("express");
var http = require('http');
var mysql = require("mysql");
var bodyParser = require("body-parser");

//Define our app using express and port
var app = express();                 
var port = 8081;

//Set up body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database connection
app.use(function(req, res, next){
  res.locals.connection = mysql.createConnection({
    host: 'localhost',
    user: 'yallahha',
    password: '',
    database: 'c9',
    dbport:3306
  });
  res.locals.connection.connect();
  next();
});

//Set up Access-Control-Allow-Origin access control header
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    // Pass to next layer of middleware
    next();
});

//Set up router
var router = express.Router();
app.use("/api", router);   

//Handle Logout
router.route('/logout').get(function (req, res) {
  res.locals.connection.end();
  res.send("Logged Out");
})

//Test route to make sure everything is working (accessed at GET http://localhost:8081/api)
router.get("/", function(req, res) {
    res.json({ message: "API Accessed Successfully"});   
});

//Get cheapest tutor for given subject
router.route('/tutor/:sub_id')
  .get(function(req, res) {
      res.locals.connection.query("SELECT * FROM Tutor JOIN User ON Tutor.idUser=User.idUser WHERE CourseCode='"+req.params.sub_id+"' AND Salary = (SELECT MIN(Salary) from Tutor WHERE CourseCode='"+req.params.sub_id+"')", function (error, results, fields) {
      //Handle Error and send results
      if (error) throw error;
		  res.send(results);
	    });
    });

//Get student info for those who took the same course and tutor
router.route('/students/:sub_id')
  .get(function(req, res) {
      res.locals.connection.query("SELECT * FROM StudentAppointment "+
                                  "JOIN User ON StudentAppointment.idStudent=User.idUser "+
                                  "JOIN Student ON StudentAppointment.idStudent=Student.idUser "+
                                  "JOIN TutorAvailability ON StudentAppointment.idAppt=TutorAvailability.idAppt "+
                                  "JOIN Tutor ON TutorAvailability.idTutor = Tutor.idUser "+
                                  "WHERE StudentAppointment.CourseCode='"+req.params.sub_id+"'AND Tutor.idUser='"+(req.query.tutor_id)+"';", function (error, results, fields) {
      //Handle Error and send results
      if (error) throw error;
		  res.send(results);
	    });
    });
    

router.route('/subjects/:sub_id')
  //Get all the items (accessed at GET http://localhost:8081/api/subjects/:sub_ID
  .get(function(req, res) {
      res.locals.connection.query("SELECT * FROM User JOIN Tutor ON User.idUser=Tutor.idUser WHERE Tutor.CourseCode='"+req.params.sub_id+"'", function (error, results, fields) {
      //Handle Error and send results
      if (error) throw error;
		  res.send(results);
	    });
    })
    //Increase salaries by value in api/subjects/:sub_id?salary=(VALUE)
  .put(function(req, res) {
      res.locals.connection.query("UPDATE Tutor SET Salary = Salary + "+(req.query.salary).toString()+" WHERE CourseCode='"+req.params.sub_id+"'", function (error, results, fields) {
		  //Handle Error and send results
		  if (error) throw error;
		  res.send(results);
	    });
    });
    
//Count of total rows to find last index    
var count=0;
//In order to post, user must POST to url api/edit
router.route('/edit')
    //Handle the post commany
    .post(function(req, res) {
      res.locals.connection.query("SELECT COUNT(*) AS count FROM User", function (error, results) {
        if (error) throw error;
        //Parse the count from results from Query
        count = parseFloat(JSON.parse(JSON.stringify(results[0].count)))+1;
        res.locals.connection.query("INSERT INTO User VALUES ('"+(count)+
                                                              "','"+req.body.password+"','"+req.body.firstName+
                                                              "','"+req.body.lastName+"','"+req.body.email+
                                                              "','"+req.body.gender+"','"+req.body.dob+
                                                              "','"+req.body.type+"','"+req.body.phoneNumber+"');", function (error, results, fields) {
          //Handle Error and send results
          if (error) throw error;
		      res.send(results);
	      });
	      /*
	     res.locals.connection.query("INSERT INTO Tutor VALUES ('"+(count)+"','"+req.body.courseCode+
	                                                            "','"+req.body.salary+"','"+req.body.rating+"');", function (error, results, fields) {
          //Handle Error and send results
          if (error) throw error;
		      res.send(results);
	      });
	      */
    });
});
// START THE SERVER
// =============================================================================
module.exports = app;
var server = http.createServer(app);
server.listen(port);