$(document).ready(function(){
    $('#searchsubmit').on('click', function(){
        myFunction(1)
    });
  });
$('#search').keypress(function(e){
    if(e.which == 13){//Enter key pressed
      myFunction(1)
    }
});

function myFunction(page_number) { 
    search_text = $('#search').val();
    window.location.href =  (window.location.href).split('?')[0] +
    '?page='+ page_number + '&search=' + search_text
}











// // $(function() {

// //     $('#search').keyup(function() {

// //         $.ajax({
// //             type: "GET",
// //             url: "/manage_staff/",
// //             data: {
// //                 'search_text' : $('#search').val()
// //             },
// //             success: searchSuccess,
// //             dataType: 'html'
// //         });
// //     });
// // });

// // function searchSuccess(data, textStatus, jqXHR)
// // {
// //     debugger
// //     $('#search-results').html(data)
// // }
// const user_input = $("#user-input")
// const search_icon = $('#search-icon')
// const artists_div = $('#replaceable-content')
// const endpoint = '/manage_staff/'
// const delay_by_in_ms = 700
// let scheduled_function = false

// let ajax_call = function (endpoint, request_parameters) {
//     $.getJSON(endpoint, request_parameters)
//         .done(response => {
//             // fade out the artists_div, then:
//             artists_div.fadeTo('slow', 0).promise().then(() => {
//                 // replace the HTML contents
//                 artists_div.html(response['html_from_view'])
//                 // fade-in the div with new contents
//                 artists_div.fadeTo('slow', 1)
//                 // stop animating search icon
//                 search_icon.removeClass('blink')
//             })
//         })
// }


// user_input.on('keyup', function () {

//     const request_parameters = {
//         q: $(this).val() // value of user_input: the HTML element with ID user-input
//     }

//     // start animating the search icon with the CSS class
//     search_icon.addClass('blink')

//     // if scheduled_function is NOT false, cancel the execution of the function
//     if (scheduled_function) {
//         clearTimeout(scheduled_function)
//     }

//     // setTimeout returns the ID of the function to be executed
//     scheduled_function = setTimeout(ajax_call, delay_by_in_ms, endpoint, request_parameters)
// })