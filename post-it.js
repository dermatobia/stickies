$(document).ready(function(){
  board = new Board('#board');
});

// ------- BOARD OBJECT ---------

function Board(selector){
  this.el = $(selector);
  // console.log(this.el)
  this.pId = 0;
  this.postIts = [];
  this.events();
};

Board.prototype.events = function(){
  that = this;
  this.el.click(function(e){
    // debugger
    console.log(e.target.id);
    if ((e.target.id) == 'board'){
      that.createPostIt(e);
      // debugger;
    } else if ( (e.target.parentElement.className) == 'post-it'){
      console.log('in post it')
    };
  });
};

Board.prototype.createPostIt = function(e){
  this.postIts.push( new PostIt(this.pId, e.offsetX, e.offsetY, this.el));
  this.pId++;
}

// ------ POST-IT OBJECT -------

function PostIt(id, x, y, board){
  this.id = id;
  this.x = x;
  this.y = y;
  this.board = board;
  // console.log(board);
  // console.log(this.board);
  this.html =  "<div class='post-it' id='pid" + this.id + "' >"
    this.html +=  "<div class='header'><span id='delete'>X</span></div>"
    this.html +=  "<div class='content' contenteditable='true'></div>"
    this.html += "</div>"
  this.render();
};

PostIt.prototype.render = function(){
  // console.log(this.board)
  this.board.append(this.html).css({  "position": "fixed",
                                      "left": this.x,
                                      "top": this.y})
  // debugger;
  console.log('done rendering')
};



// var Board = function( selector ) {
//   var $elem = $( selector );
//   var postId = 0;
//   $elem.on("click", function(e){
//     if ((e.target.id) == 'board'){
//       post = new PostIt($(this), e.offsetX, e.offsetY, postId);
//       postId += 1;
//     } else if ( (e.target.id) == 'delete'){
//       var postSelected = $('#' + e.target.offsetParent.id)[0];
//       postSelected.remove();
//     } else {
//       var postSelected = $('#' + e.target.offsetParent.id)[0];
//       $(postSelected).draggable({handle: '.header'});
//     };
//   });
// };

// var PostIt = function(board, x, y, postId) {
//   this.board = board;
//   this.postId = postId;
//   this.x = x;
//   this.y = y;
//   this.html =  "<div class='post-it' id='post_id" + postId + "' >"
//     this.html +=  "<div class='header'><span id='delete'>X</span></div>"
//     this.html +=  "<div class='content' contenteditable='true'></div>"
//     this.html += "</div>"

//   this.create();
//   this.offset();
// };

// PostIt.prototype.create = function(){
//   this.board.append(this.html);
// }

// PostIt.prototype.offset = function(){
//   var post_el = "#post_id" + this.postId;
//   $(post_el).css("left", this.x);
//   $(post_el).css("top", this.y);
// };

// $(function() {
//   board = new Board('#board');
// });

