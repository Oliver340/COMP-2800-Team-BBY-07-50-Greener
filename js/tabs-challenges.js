$(function () {

    $('.tab-body').toggle();

    let activetab;

    $('#info, #progress').attr('style', 'display: block');

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

    var line = new ProgressBar.Line('#progress', {
        color: '#FCB03C',
        strokeWidth: 1,
        trailColor: '#d73242',
        trailWidth: 1,
        duration: 2000,
        easing: 'easeInOut'
    });

    line.animate(0.6);

});