$(function(){

  var book = $('#archive-stand .shelf .item-list .item .detail'),
      gn_select = $('#head #g-nav .select');

  $(book).on("click",function(){
    $(this).toggleClass('look');
  });

  $([gn_select[0],book[0]]).on("click",function(){
    $("#wrapper").toggleClass('archives');
  });


  // pjax
/*  $(document).on('click', '.pjax', function(e) {
    e.preventDefault();
    $.pjax({
      container : '#pjax-test',
      fragment : '#contents',
      timeout : 1000
    });
  });
*/
  if($.support.pjax) {
    $(document).pjax('a[data-pjax]','#pjax-container')
  };
});