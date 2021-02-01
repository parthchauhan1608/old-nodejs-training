
const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());
const courses = [
    { id: 1, name: 'Java'},
    { id: 2, name: 'HTML'},
    { id: 3, name: 'CSS'},
    { id: 4, name: 'JS'},
    { id: 5, name: 'AJS'}
];
app.get('/',(req, res)=>{
    res.send('Hello Parth');
});
app.get('/api/courses', (req, res)=>{
    res.send(courses);
});
app.get('/api/courses/:id',(req, res)=>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given id not found');
    res.send(course);
}); 
app.post('/api/courses',(req, res)=>{
    const { error } =validaate(req.body);
    if(error)  return res.status(400).send(result.error.details[0].message);

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});
app.put('/api/courses/:id', (req, res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given id not found');
    
    const { error } =validaate(req.body);
    if(error) return res.status(400).send(result.error.details[0].message)

    course.name = req.body.name;
    res.send(course);
});
app.delete('/api/courses/:id', (req,res) =>{
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given id not found');

    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(courses);
});
function validaate(course){
    const schema = {
        name: Joi.string().min(2).required()
    };
    return Joi.validate(req.body, schema);
}

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log(`Listening on ${port}.....`));