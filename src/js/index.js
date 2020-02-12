$(document).ready(
  function () {
    init();
    $('.links li').click(onTab);
  }
)

const init = () => {
  setIdAllLinks();
  setIdAllDataBlocks();
  hideAllAndShowFirstSlide();
}

const setIdAllLinks = () => {
  $('.links li').each(function (index) {
    $(this).attr("id", "link" + index)
  })
}

const setIdAllDataBlocks = () => {
  $('.slides li').each(function (index) {
    $(this).attr("id", "link" + index + "-slide")
  })
}

function onTab() {
  var linkId = $(this).prop('id');
  $('.selected-link').removeAttr('class');
  $(this).children().addClass('selected-link')
  $(".slides li").hide()
  $("#" + linkId + "-slide").slideToggle();
}

function hideAllAndShowFirstSlide() {
  $('.slides li').hide();
  $('.links li h2').first().addClass('selected-link');
  $('.slides li').first().slideToggle();
}
