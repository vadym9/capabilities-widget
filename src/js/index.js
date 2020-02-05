$(document).ready(
  function () {
    init();
    $('.links li').click(onClick);
  }
)

function init() {
  setIdAllLinks();
  setIdAllDataBlocks();
  hideAllAndShowFirstSlide();
}

function setIdAllLinks() {
  $('.links li').each(function (index) {
    $(this).attr("id", "link" + index)
  })
}

function setIdAllDataBlocks() {
  $('.slides li').each(function (index) {
    $(this).attr("id", "link" + index + "-slide")
  })
}

function onClick() {
  var linkId = $(this).prop('id');
  $('.selected-link').removeAttr('class');
  $(this).children().addClass('selected-link')
  $(".slides li").slideUp()
  $("#" + linkId + "-slide").slideDown(1000);
}

function hideAllAndShowFirstSlide() {
  $('.slides li').hide();
  $('.links li h2').first().addClass('selected-link');
  $('.slides li').first().slideToggle(1000);
}
