// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .
//$(document).ready(function()
//{
//    $(".star_image").mouseover(function ()
//    {
//        $(this).find('.over-img').toggle();
//    });
//
//    $(".star_image").mouseout(function ()
//    {
//        $(this).find('.over-img').toggle();
//    });
//
//});

function favorites(parent) {
    $(parent).find('.over-img').toggle();
    console.log(parent);
    var datastring = {'post_id': parent.id, 'user_id': user_id};
    console.log(datastring);
    $.ajax({
        type: "POST",
        url: "/favorites",
        data: datastring,
        success: function (data) {
            console.log(data);
            document.getElementById(parent.id + '-count').innerHTML = data.data;
        }
    });
    return false;
};
