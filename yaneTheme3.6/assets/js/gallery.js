$( function() {
    var pictures = [],
        // $pointer = $( '#pointer' ),
        $thumbnails = $( '.sliderContainer' ),
        $title = $( '#title' ),
        $pause = $( '#pause' ),
        $flash = $( '#flash' ),
        $volume = $( '#volume' ),
        $showImage = $( '.showImages' ),
        $kbcover = $('.kbcover'),
        $settingSection = $('.settingSection'),
        $iframeSection = $(".iframeSection"),
        $closeSlider = $(".closeSlider"),
        $supportitem = $(".supportitem"),
        $shaerItem = $(".shaerItem"),
        $appitem = $(".appitem");

    

    $thumbnails.find( 'ul' ).width( function() {
        var totalWidth = 0;
        $( this ).find( 'li' ).each( function() {
            totalWidth += $( this ).outerWidth( true );
        });
        return totalWidth;
    });

    // $thumbnails.jScrollPane();

    // var jScrollPaneApi = $thumbnails.data( 'jsp' );

    // $( window ).bind( 'resize', function() {
    //     jScrollPaneApi.reinitialise();
    // });

    // Vegas Background

    $thumbnails.find( 'a' ).each( function() {
        pictures.push({
            src: $( this ).attr( 'href' ),    
            title: $( this ).find( 'img' ).attr( 'title' ),
            valign: $( this ).find( 'img' ).data( 'valign' )
        });
    })

    $.vegas( 'slideshow', { 
        backgrounds: pictures,
        delay: 20000,

    })( 'overlay' );
    
    $( 'body' ).bind( 'vegasload', function( e, img ) {
        var src = $( img ).attr( 'src' ),
            idx = $( 'a[href="' + src + '"]' ).parent( 'li' ).index();

        // focusSound.play();
    
        $title.fadeOut( function() {
            $( this ).find( 'h1' ).text( pictures[ idx ].title );
            $( this ).fadeIn();
        });

        $flash.show().fadeOut( 1000 );

        

    });

   

    $thumbnails.find( 'a' ).click( function() {
        $pause.show();
        

        var idx = $( this ).parent( 'li' ).index();
        $.vegas( 'slideshow', { step: idx } )( 'pause' );

        // rewindSound.play();
    
        return false;
    });

    $pause.click( function() {
        $pause.hide();
        // $pointer.show();
    
        $volume.animate( { top:'100px' });
        $title.animate( { bottom:'0px' });
        $thumbnails.animate( { bottom:'0px' });

        $.vegas( 'slideshow' );

        // clickSound.play();

        return false;
    });

    //my code
    $thumbnails.hide();
    $showImage.click( function(){
        $thumbnails.fadeIn("fast")
        $showImage.hide()
        // $footerSection.animate({"margin-bottom":"75px"});


        return false;
    });
    $kbcover.click(function(){
        $thumbnails.fadeOut("fast")
        // $thumbnails.hide();
        $showImage.fadeIn("fast")
        // $footerSection.animate({"margin-bottom":"0px"});
        $settingSection.hide("slide", { direction: "left" }, 1000);
        $iframeSection.hide();
        document.getElementById('game-iframe').src = document.getElementById('game-iframe').src;
        $appitem.css("display","none")
        $shaerItem.css("display","none")
        $supportitem.css("display","none")
        
    });
    $closeSlider.click(function(){
        $thumbnails.fadeOut("fast")
        $showImage.fadeIn("fast")
    });
    
   


});