var tabmenu = document.getElementById('tabmenu');
var tablinks = tabmenu.children;

var tabcontents = document.getElementById('tabcontents');



$('#tabmenu').on('click', '.tablink', function (e) {

    let activetab = e.target.id.replace("-tab", "");
    console.log(e.target.id);
    console.log(activetab);
    showTab(e, activetab);

});



function showTab(event, tabID) {

    console.log(event.target.className);
    console.log(event.target.className);

    $('.tab-body').attr('style', 'display: none');
    $('.tablink-active').attr('class', 'tablink');

    event.target.className += "-active";
    $(`#${tabID}`).attr('style', 'display: block');

}