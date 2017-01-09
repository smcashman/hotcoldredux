var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = express.Router();



app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json());

	app.post('/fewest-guesses', function(req,res){

			book = new Novel({title: req.body.title,
							  author: req.body.author,
                              readBook: req.body.readName,
                              review: req.body.infoForm,
                              tags: req.body.tagsName
                });

 			book.save(function(err) {
            if (err)
                res.send(err);
            console.log(req.body.review)
            console.log(req.body.tags)
            //console.log(book)
            // res.json({ message: 'Book added!' });
            res.redirect('/');
        });   
    });

    app.get('/fewest-guesses', function(req, res) {
    	Novel.find(function(err, books) {
      if (err)
        res.send(err);
      res.json(books);
    });
  });

    

exports.app = app;

app.listen(process.env.PORT || 8080)

