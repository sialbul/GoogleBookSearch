const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/api/books")
  .get(booksController.findAll)
  .post(function(req,res){
    console.log("middleware post to /api/books");
    booksController.create(req,res)
  });

// Matches with "/api/books/:id"
router.route("/api/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
