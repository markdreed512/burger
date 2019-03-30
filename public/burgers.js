$("#submitBtn").on('click', function (event) {
    event.preventDefault();
   //capture value in input field
   var userInput = {
       name: $('#userInput').val().trim()
   }
   
   console.log("user input: ", userInput);
   //send to controller
   $.ajax("/api/burger" , {
       type: "POST",
       data: userInput
   }).then(
       function () {
           console.log("created new burger");
           // Reload the page to get the updated list
           location.reload();
       }
   );
});