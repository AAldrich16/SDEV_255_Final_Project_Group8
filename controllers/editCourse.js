const Course = require('../models/course');


function createCourse(course) {
  return  new Promise( (resolve, reject) => {
    // Check if document already exists
    Course.exists({ name: course.name })
    .then( data => {
      // If document exists, send code 204 and exit function
      if (data !== null) {
        res.status(204).end()
        return;
      }
      else {
        const newCourse = new Course(course);
        newCourse.save()
        .then(() => {
          resolve(newCourse);
        })
        .catch(err => {
          reject(err.message);
        })
      }
    })
    .catch(err => {
      reject(err.message);
    });
  })
};


function deleteCourse(courseID) {
  return new Promise( (resolve, reject) => {
    Course.findByIdAndDelete(courseID)
    .then(() => {
      resolve(`Course with id ${courseID} removed`);
    })
    .catch(err => {
      reject(err);
    });
  })
};


// courseID is the course's _id key
// updates is an object like { name: "SDEV 255" }
function updateCourse(courseID, updates) {
  return new Promise( (resolve, reject) => {
    Course.findByIdAndUpdate(courseID, updates)
    .then( () => {
      resolve(`Updated document with id ${courseID}`)
    })
    .catch(err => {
      reject(err);
    })
  });
};

module.exports = {
  createCourse,
  deleteCourse,
  updateCourse
};