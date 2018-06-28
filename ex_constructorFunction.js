// constructor function exercise


// let blogPost = {
//     title: 'Hello World',
//     body: 'This is really awesome post.',
//     author: 'James Kim',
//     views: 1,
//     comments: [{
//         author: 'Christian Kim',
//         body: 'Good job, dad!'
//     },
//         {author: 'Ink Kim',
//         body: 'Good job!'}],
//     isLive: true
// };

// console.log(blogPost);


const BlogPosting = function(title, body, author){
    this.title = title;
    this.body = body;
    this.author = author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
};
let blogging = new BlogPosting('Hello World', 'This is really an awesome post!', 'James Kim');

console.log(blogging);