const express = require('express')
const cors = require('cors')
const app = express();

app.use(cors());
const instructors =
[{
    'id': 1,
    'fullName': 'Kyle Coberly',
    'Title': 'Faculty Director',
    'numberOfDogs': 0
},{
    'id': 2,
    'fullName': 'Danny Fritz',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 3,
    'fullName': 'CJ Reynolds',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 4,
    'fullName': 'Brooks Patton',
    'Title': 'Lead Instructor',
    'numberOfDogs': 0
},{
    'id': 5,
    'fullName': 'Roberto Ortega',
    'Title': 'Lead Instructor',
    'numberOfDogs': 1
},{
    'id': 6,
    'fullName': 'Chad Drummond',
    'Title': 'Instructor',
    'numberOfDogs': 0
},{
    'id': 7,
    'fullName': 'Kim Schleisinger',
    'Title': 'Instructor',
    'numberOfDogs': 0
},{
    'id': 8,
    'fullName': 'Peter Ostiguy',
    'Title': 'Associate Instructor',
    'numberOfDogs': 1
},{
    'id': 9,
    'fullName': 'Cass Torske',
    'Title': 'Resident',
    'numberOfDogs': 1
},{
    'id': 10,
    'fullName': 'Matt Winzer',
    'Title': 'Resident',
    'numberOfDogs': 2
},{
    'id': 11,
    'fullName': 'Aaron Goodman',
    'Title': 'Resident',
    'numberOfDogs': 0
},{
    'id': 12,
    'fullName': 'Michelle Bergquist',
    'Title': 'Resident',
    'numberOfDogs': 1
}]

app.use(cors());

function idQuery (array, id) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      return array[i];
    }
  }
  return null
}

app.get('/', function (req, res) {
  res.json(instructors)
})

app.get('/:id', function (req, res) {
  console.log(req);
  var record = idQuery(instructors, req.params.id);
  if (!record) {
    res.status(404).json({
        message: 'No record found!'
    });
  }
  res.json({array: record});
});

app.listen(process.env.PORT||9000);
