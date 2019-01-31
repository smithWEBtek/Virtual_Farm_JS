 var id = 0 ;
 var idString = '';

// function getComment(){
//  let commentValue = $('#yourComment').val()
//
//  let data = {comment_text: commentValue} ;
//  // console.log(data)
//
// ++id;
//
//  var url='/comments/' + id.toString()
// // console.log(url)
// $.post('/comments' , data).then(resp => console.log(resp));
//
// }




function getComment(){
 let commentValue = $('#yourComment').val()
 let data = {comment_text: commentValue} ;
 // console.log(data)

//++id;

 // var url='/comments/'+ id.toString()
 var url='/comments'

 fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.

        headers: {
            "Content-Type": "application/json",
            // "Content-Type": "application/x-www-form-urlencoded",
        },

        body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    .then(response => console.log(response))
    // .then(json => {
    //   console.log(json)}
    // )


}
