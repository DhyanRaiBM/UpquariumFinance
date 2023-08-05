const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://DhyanRAi:bR3WtYVXpG0jIjWX@upquarium.9p5xefa.mongodb.net/UpQuarium', { useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDb server');
}).catch(err => console.log(err));

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    image: {
        data: Buffer, // Store the image data as Buffer type
        contentType: String, // Store the content type of the image
    },
});
const Blog = mongoose.model("Blog", blogSchema);
const fetchBlogs = async () => {
    const blogs = await Blog.find();
    return blogs;
}
module.exports = { Blog, fetchBlogs };