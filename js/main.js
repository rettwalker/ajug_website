
(function($) {
    $(document).ready(function(){

      if((screen.width === 768 && screen.height === 1024) || (screen.width === 1024 && screen.height === 768)
        || (screen.height === 1366 && screen.width === 1024) || (screen.height === 1024 && screen.width === 1366)){
        $('.parallax-window').attr('data-image-src','/assets/img/background/a-ipad-1.svg');
      }

      if(screen.width <= 768){
        $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner_rect.png');
      }

      $( window ).resize(function() {
        if($( window ).width() <= 768){
          $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner_rect.png');
        } else {
          $('.ajug_becomemember_banner').attr('src', '/assets/img/ajug_becomemember_banner.png');
        }


      });
      $( ".meet-team-btn" ).click(function( event ) {
        event.preventDefault();
        $('.team-modal').modal('toggle')
      });

      $('.team-info').on('hide.bs.collapse', function () {
        $('#'+this.id+'Btn.arrow-button').removeClass('oi-caret-bottom');
        $('#'+this.id+'Btn.arrow-button').addClass('oi-caret-right');
      });
      $('.team-info').on('show.bs.collapse', function () {
        $('#'+this.id+'Btn.arrow-button').removeClass('oi-caret-right');
        $('#'+this.id+'Btn.arrow-button').addClass('oi-caret-bottom');
      });
    });
})(jQuery);
