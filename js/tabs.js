$(function () {

    $('.tab-body').toggle();

    $('#tabmenu').on('click', '.tablink-active', function (e) {
        let activetab = e.target.id.replace("-tab", "");
        $(`#${activetab}`).toggle();
    });

    $('#tabmenu').on('click', '.tablink', function (e) {

        let activetab = e.target.id.replace("-tab", "");
        showTab(e, activetab);

    });

    function showTab(e, tabID) {
        $('.tab-body').attr('style', 'display: none');
        $('.tablink-active').attr('class', 'tablink');

        e.target.className += "-active";
        $(`#${tabID}`).attr('style', 'display: block');
    }
});