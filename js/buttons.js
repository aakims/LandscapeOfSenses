$(document).ready(function() {
    $(".hiddenload").hide();
    $('.current-view').show();
});

$(".toggle-forward").click(function() {
    //Spot switcher:

    var curr_slide = $('.current-view').attr('id');
    console.log(curr_slide);
    var next_slide = parseInt(curr_slide) + 1;
    console.log(next_slide);
    var next_slide_id = '#' + next_slide + 'view';
    console.log(next_slide_id);

    $(".current-view").addClass("hiddenload");
    $(".current-view").removeClass("current-view");
    $(next_slide_id).addClass("current-view");
    $(next_slide_id).removeClass("hiddenload");

    $(".hiddenload").hide();
    $('.current-view').show();
});

$(".toggle-back").click(function() {
    //Spot switcher:

    var curr_slide = $('.current-view').attr('id');
    console.log(curr_slide);
    var next_slide = parseInt(curr_slide) - 1;
    console.log(next_slide);
    var next_slide_id = '#' + next_slide + 'view';
    console.log(next_slide_id);

    $(".current-view").addClass("hiddenload");
    $(".current-view").removeClass("current-view");
    $(next_slide_id).addClass("current-view");
    $(next_slide_id).removeClass("hiddenload");

    $(".hiddenload").hide();
    $('.current-view').show();


});