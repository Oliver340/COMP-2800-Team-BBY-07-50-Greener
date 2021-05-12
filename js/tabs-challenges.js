$(function () {

    $('.tab-body').toggle();

    let activetab;

    $('#info, #goal').attr('style', 'display: block');

    $('#tabmenu').on('click', '.tablink-active', function (e) {
        activetab = e.target.id.replace('-tab', '');
        closeTab(e, activetab);
    });

    $('#tabmenu').on('click', '.tablink', function (e) {
        activetab = e.target.id.replace('-tab', '');
        showTab(e, activetab);
    });

    function showTab(e, tabID) {
        e.target.className = "tablink-active";
        $(`#${tabID}`).attr('style', 'display: block');
    }

    function closeTab(e, tabID) {
        e.target.className = "tablink";
        $(`#${tabID}`).attr('style', 'display: none');
    }

});