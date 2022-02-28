const path = require("path");
let route = path.join(__dirname + "/../Models/postModel.js");

console.log(route);

const postModel = require(route);

let Post = postModel.Post;

exports.insertOne =
  function (aTitle, aPost, fn){
      const post = new Post({
        title: aTitle,
        date: Date.now(),
        post: aPost
      });

      post.save();

      fn(post);
  }

exports.findAll =
  function (fn){
    Post.find({}, function(err, posts){
      if (err){
        console.log(err);
      }else{
        fn(posts);
      }
    })
  }

  exports.findByTitle =
    function(_title, fn){
      Post.findOne({title: _title}, function(err, postedItem){
        if (err){
          console.log(err);
        }else{ console.log(postedItem);}

        fn(postedItem);
      })
    }
