require('jquery-multifile/jquery.MultiFile.min.js');

$(function () {
    $('.load-file').MultiFile({
        max: 3,
        accept: 'gif|jpg|png|svg|pdf|txt'
    });
    $(".upload-file__label").on('click', function(){
        $(".upload-file__label").next(".MultiFile-wrap").find("input:nth-last-child(2)").click();
    });
});