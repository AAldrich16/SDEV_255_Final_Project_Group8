const fs = require('fs').promises;

module.exports = function getAllCourses() {
  return new Promise((resolve) => {
    fs.readFile('./models/Courses.JSON')
    .then((data) => {
      resolve(data);
    })
  })
  .catch( err => console.log(err) );
}
