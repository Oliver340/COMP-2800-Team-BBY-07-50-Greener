$(function () {

    $('.tab-body').toggle();

    let bodyid = document.querySelector('div').id;
    let activetab;

    $('#tabmenu').on('click', '.tablink-active', function (e) {
        if (bodyid == 'informationTabs') {
            activetab = e.target.parentNode.id.replace('-tab', '');
            closeTab(e, activetab);
        } else {
            activetabID = $('.tablink-active').attr('id');
            activetab = activetabID.replace('-tab', '')
            closeTab(e, activetab);
        }
    });

    $('#tabmenu').on('click', '.tablink', function (e) {
        if (bodyid == 'informationTabs') {
            activetab = e.target.parentNode.id.replace('-tab', '');
            showTab(e, activetab);
        } else {
            activetab = e.target.id.replace('-tab', '');
            showTab(e, activetab);
        }
    });

    function showTab(e, tabID) {
        if (bodyid == 'informationTabs') {
            $('.tablink-active').attr('class', 'tablink');
            $('.tab-body').attr('style', 'display: none');
            e.target.parentNode.className = "tablink-active";
            $(`#${tabID}`).attr('style', 'display: block');
        } else {
            e.target.className = "tablink-active";
            $(`#${tabID}`).attr('style', 'display: block');
        }
    }

    function closeTab(e, tabID) {
        if (bodyid == 'informationTabs') {
            e.target.parentNode.className = "tablink";
            $(`#${tabID}`).attr('style', 'display: none');
        } else {
            e.target.className = "tablink";
            $(`#${tabID}`).attr('style', 'display: none');
        }
    }

});
