 // var time = date.getHours();
 // var min = date.getMinutes();
 questionFirst = $('[data-question]:first').attr('data-question');
 $('#chatlist ul').append('<li class="admin-message">' + questionFirst + '</li>');
 $('[data-question]:first').appendTo('.message-box');

 $('#send').click(function(e) {
     let date = new Date();
     let y = date.getFullYear();
     let m = date.getMonth() + 1;
     let d = date.getDay();
     let dt = date.getDate();


     var exs = $('<span class="chatbot_date">' + dt + "/" + m + "/" + y + '</span>').appendTo('#chatlist');
     if (exs) {

     } else {

         var exs = $('<span class="chatbot_date">' + dt + "/" + m + "/" + y + '</span>').appendTo('#chatlist');
     }

 })
 $('#send').click(function(e) {

     var date = new Date();

     var time = date.getHours();
     var min = date.getMinutes();
     var ampm = time >= 12 ? 'pm' : 'am';
     time = time % 12;
     time = time ? time : 12; // the hour '0' should be '12'
     min = min < 10 ? '0' + min : min;









     questionVal = $('.message-box [data-question]').val();

     $('#chatlist ul').append('<li class="client-message">' + questionVal + '</li>');
     $('#chatlist ul').append('<span class="client_time">' + time + " : " + min + ' ' + ampm + '</span>');
     dataName = $('.admin-client-message-wrap [data-name]').attr('data-question')
     if ($('.message-box [name]').attr('name') == "name") {
         nameval = $('.message-box [name]').val();
         $('.admin-client-message-wrap [data-name]').attr('data-question', "Hi" + "   " + nameval + ",</br>" + dataName)
     }
     $('.message-box [data-question]').appendTo('.submit_info')

     if ($('.admin-client-message-wrap').children().lenght != 0) {
         questionFirst = $('[data-question]:first').attr('data-question');
         $('#chatlist ul').append('<li class="admin-message">' + questionFirst + '</li>');
         $('#chatlist ul').append('<span class="admin_time">' + time + " : " + min + ' ' + ampm + '</span>');
         $('[data-question]:first').appendTo('.message-box');
         $('#send').css({ "pointer-events": "none" });
         $('.message-box [data-question]').bind('click change keyup', function(e) {
             if ($(this).val() == "") {
                 $('#send').css({ "pointer-events": "none" });
             } else {
                 $('#send').css({ "pointer-events": "auto" });
             }

         });

     }
     $('#chatlist').animate({ scrollTop: 5000 })
 });
 $("#confrim").click(function(e) {

     $('#submit').trigger('click')
     location.reload();
 });
 $("#notconfrim").click(function(e) {

     location.reload();
 });
 $('.chat-icon').click(function(e) {
     $('.chatbot-box').toggleClass('active')

 });