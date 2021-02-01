
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/celebfie-dev',{
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const Author = mongoose.model('Author', new mongoose.Schema({
  name: String,
  bio: String,
  website: String
}));

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author'
  }
}));

async function createAuthor(name, bio, website) { 
  const author = new Author({
    name, 
    bio, 
    website 
  });

  const result = await author.save();
  console.log(result);
}

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}


// const mongoose = require('mongoose');
// const { APP_CONSTANTS } = require('./modelConstant');

const NotificationSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'refModel'
    },
    refModel: {
        type: String
    },
    payload: {
        title: {
            type: String
        },
        body: {
            type: String
        }
    },
    DeviceToken: {
        deviceToken: { type: String, trim: true },
        deviceType: {
            type: String, 
            enum: [
                // APP_CONSTANTS.DATABASE.DEVICE_TYPES.IOS,
                // APP_CONSTANTS.DATABASE.DEVICE_TYPES.ANDROID
            ]
        },
    },
    notificationType:{
        type: String,
        // enum: [
        //     APP_CONSTANTS.DATABASE.NOTIFICATION_TYPE.FOLLOW,
        //     APP_CONSTANTS.DATABASE.NOTIFICATION_TYPE.SUBCRIBE,
        //     APP_CONSTANTS.DATABASE.NOTIFICATION_TYPE.LIKE,
        //     APP_CONSTANTS.DATABASE.NOTIFICATION_TYPE.OTHER
        // ],
        // default: APP_CONSTANTS.DATABASE.NOTIFICATION_TYPE.OTHER
    },
    triggerBy: {
        type: mongoose.Schema.Types.ObjectId,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isRead: {
        type: Boolean,
        default: false
    }
},
{
    timestamps: true
});

let Notification = mongoose.model('Notification',NotificationSchema);

async function listCourses() { 
  const courses = await Notification
    .find()
    .populate('userId');
  console.log(courses);
}

//createAuthor('Parth', 'My bio', 'My Website');

// createCourse('Node Course', '5df1d733ddfc6a0b345bfb7b');

listCourses();