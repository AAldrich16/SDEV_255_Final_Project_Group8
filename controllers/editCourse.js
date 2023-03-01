const Course = require('../models/course');


function addCourse(course) {
    return  new Promise( (resolve, reject) => {
        const newCourse = new Course(course);
        newCourse.save()
            .then(() => {
                resolve('New course created');
            })
            .catch(err => {
                reject(err);
            });
    })
}

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
}

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
}

module.exports = {
    addCourse,
    deleteCourse,
    updateCourse
};