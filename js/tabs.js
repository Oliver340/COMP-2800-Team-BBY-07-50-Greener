$(function () {

    $('.tab-body').toggle();

    $('#tabmenu').on('click', '.tablink-active > span', function (e) {
        udpateIcon(e);
        let activetab = e.target.parentNode.id.replace("-tab", "");
        closeTab(e, activetab);
    });

    $('#tabmenu').on('click', '.tablink > span', function (e) {
        udpateIcon(e);
        let activetab = e.target.parentNode.id.replace("-tab", "");
        showTab(e, activetab);
    });

    function showTab(e, tabID) {
        let bodyid = document.querySelector('div').id;
        if (bodyid == 'informationTabs') {
            $('.tablink-active').attr('class', 'tablink');
            $('.tab-body').attr('style', 'display: none');
        }
        e.target.parentNode.className += "-active";
        $(`#${tabID}`).attr('style', 'display: block');
    }

    function closeTab(e, tabID) {
        e.target.parentNode.className = "tablink";
        $(`#${tabID}`).attr('style', 'display: none');
    }

    function udpateIcon(e) {
        let iconName = e.target.innerHTML;

        if (iconName == 'expand_less') {
            e.target.innerHTML = 'expand_more';
        }
        if (iconName == 'expand_more') {
            e.target.innerHTML = 'expand_less';
        }
    }
});
