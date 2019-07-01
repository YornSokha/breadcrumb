$(document).ready(function(){
    let currentStep = 0;
    $('#btn').click(function(){
        console.log($('#breadcrumb').children().length)
        $('#breadcrumb').children().eq(++currentStep).addClass('breadcrumb__step--active');
    })
})