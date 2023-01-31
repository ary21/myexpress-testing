var mongoose = require('mongoose');

// Tell mongoose to use the in-built Promise object
mongoose.Promise = global.Promise;

// mongoose moves on to the following lines
// only after connecting
mongoose.connect('mongodb://testing_springmad:d6e17c73f4b11c7a405c3ab642ca1e31572fd91c@jfd.h.filess.io:27017/testing_springmad');

// mongodb+srv://arifinMongo:Oke123***@cluster0.tsthz.mongodb.net/test

// Todo - Create a model
// Mongoos will automatically pluralise and lowercase it to 'todos'
var Todo = mongoose.model('Todo', {
  text: { type: String, required: true, minlength: 1, trim: true },
  completed: { type: Boolean, default: false  },
  completedAt: { type: Number, default: null }
});

// Create a todo
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });

// var newTodo = new Todo({
//   text: 'Get better',
//   completed: true,
//   completedAt: 1500
// });

// newTodo.save().then(doc => {
//   console.log('Saved todo', doc);
// }, err => {
//   console.log('Unable to save todo');
// });


// Do the above for users
// User
var User = mongoose.model('User', {
  email: { type: String, required: true, trim: true, minlength: 1, }
});

// Create a user
var user1 = new User({
  email: 'pete@example.com'
});

user1.save().then(doc => {
  console.log('Saved user', doc);
}, err => {
  console.log('Unable to save user', err);
});


// Now run
// node testing.js