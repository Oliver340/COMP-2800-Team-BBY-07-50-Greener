$(function () {

    $('.tab-body').toggle();

    let activetab;

    $('#info').attr('style', 'display: block');

    $('#tabmenu').on('click', '.tablink', function (e) {

        activetab = e.target.parentNode.id.replace('-tab', '');
        showTab(e, activetab);

    });

    function showTab(e, tabID) {

        $('.tablink-active').attr('class', 'tablink');
        $('.tab-body').attr('style', 'display: none');
        e.target.parentNode.className = "tablink-active";
        $(`#${tabID}`).attr('style', 'display: block');

    }

});