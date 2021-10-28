// imports
const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');

const students = [{id: 1, name: "Asaad Saad", course: "CS572", picture: "1570286884.jpg", grade: 95}]

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../assets/pics'));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + '-' + Date.now() + path.extname(file.originalname)
        );
    },
});

const pic = multer({
    storage: storage,
    limits: {
        fileSize: 3 * 1000 * 1000,
    },
    fileFilter: function (req, file, cb) {
        if (
            ['.jpg', '.jpeg'].includes(
                path.extname(file.originalname).toLowerCase()
            )
        ) {
            return cb(null, true);
        }
        console.log('WRONG EXTENSION');
        cb(null, false);
    },
}).fields([{ name: 'picture', maxCount: 1 }]);


router.get('/', function (req, res) {
    res.json(students);
});

router.post('/', pic, function (req, res) {
    const newStudent = {
        id: req.body.id,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade
    }
    students.push(newStudent)
    res.json(students)
});

router.delete('/:id', function (req, res) {
    students = students.filter(s => s.id != req.params.id);
    res.json(students)
});

module.exports = router;