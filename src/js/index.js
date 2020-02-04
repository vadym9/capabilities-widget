// console.log($('div'));


$(document).ready(
  function(){
    console.log("Document ready");
      $('.links li').each(function (index){
        console.log("index = ",index);
        $(this).attr("id", "link" + index)
        // console.log($(this));
      })

      $('.data li').each(function(index){
        $(this).attr("id","link" + index + "-content")
      })

      $('.links li').click(function(){
        console.log();
        
        var linkId = $(this).prop('id');
        console.log(linkId);
        
        $('.selected-link').removeAttr('class');
        $(this).children().addClass('selected-link')
        // $(this).addClass('selected-link')
        $(".data li").slideUp()
        $("#" + linkId + "-content").slideDown(1000);
        
        // $(".links li").not().css("display","none")
      
        
        console.log();
         
      })
      $('.data li').hide();
      // $('p').append('this is paragraph');
      $('.links li h2').first().addClass('selected-link')
      $('.data li').first().slideToggle(1000)
      // $('[class="more"]').append('all right this is a class')
  }
)


// console.log(document);
