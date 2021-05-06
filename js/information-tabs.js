$(function () {

    $('.tab-body').toggle();

    $('#tabmenu').on('click', '.tablink', function (e) {

        let activetab = e.target.id.replace("-tab", "");
        showTab(e, activetab);
    });

    function showTab(event, tabID) {
        $('.tab-body').attr('style', 'display: none');
        $('.tablink-active').attr('class', 'tablink');

        event.target.className += "-active";
        $(`#${tabID}`).attr('style', 'display: block');
    }
});