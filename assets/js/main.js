$(function(){
    //Cache the window object
    let $window = $(window);

    //Parallax background effect
    $('section[data-type="background"]').each(function(){
        let $bgobj = $(this); //Assigning the object

        $(window).scroll(function () {
            //Scroll the background at speed
            let yPos = -($window.scrollTop() / $bgobj.data('speed'));
            let coords = '50%'+ yPos + 'px';
            $bgobj.css({backgroundPosition: coords})
        })
    });
});