$( function() {


    var $clockSection = $(".clockSection"),
    $gameLink = $(".gameLink"),
    $iframeSection = $(".iframeSection"),
    $appsbutton = $("#appsbutton"),
    $sharebutton = $("#sharebutton"),
    $supportbutton = $("#supportbutton"),
    $appitem = $(".appitem"),
    $shaerItem = $(".shaerItem"),
    $supportitem = $(".supportitem"),
    $uninstallbtn = $("#uninstallbtn");
    $ratebutton = $("#ratebutton");

    $('#textbox').focus();
    

    
    $gameLink.click(function(){
        $iframeSection.toggle();
        document.getElementById('game-iframe').src = document.getElementById('game-iframe').src;
        return false;
    });


    //-------------------------------------
    //          clock button function
    //____________________________________
    $("#clock").switchButton().change(function () {
        // console.log(this.checked)
        Cookies.set('clock', this.checked, { expires: 7 });
        
        if( this.checked == true ){
            $clockSection.show();
        }else{
            $clockSection.hide();
        }
    })
    var $clockCookie = Cookies.get('clock');
    if( $clockCookie == 'true' ){
        $clockSection.show();
        $("#clock").switchButton({checked: true})
    }else{
        $clockSection.hide();
    }



    $("#clock").switchButton({
        show_labels: false,
        width: 75,
        height: 24,
        button_width: 30
    });
    // width: 60px;
    // height: 24px;
    

    //app item
    $appsbutton.click(function(){
        if( $appitem.css("display") == "none"){
            $appitem.css("display","block")

            $supportitem.css("display","none")
            $shaerItem.css("display","none")
        }else{
            $appitem.css("display","none")
            
        }
        
        return false;
    });

    //share item
    $sharebutton.click(function(){
        if( $shaerItem.css("display") == "none"){
            $shaerItem.css("display","block")

            $supportitem.css("display","none")
            $appitem.css("display","none")
        }else{
            $shaerItem.css("display","none")
        }
        
        return false;
    });

    //support item
    $supportbutton.click(function(){
        if( $supportitem.css("display") == "none"){
            $supportitem.css("display","block")

            $appitem.css("display","none")
            $shaerItem.css("display","none")
        }else{
            $supportitem.css("display","none")
        }
        
        return false;
    });

    //uninstall
    $uninstallbtn.click(function () {
        return false;
    });
    //rete button
    $ratebutton.click(function(){
        return false;
    });



    //share window opening
    $('#fbsharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');
        var image = "https://pbs.twimg.com/profile_images/1025291049382473728/esYzBBZF_400x400.jpg"
        window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURIComponent(shareurl)+'&t='+encodeURIComponent(image)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        
        return false;
    });

    //twitter
    $('#twittersharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');

        window.open('http://www.twitter.com/share?url='+encodeURIComponent(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

        return false;
    });

    //plus.google
    $('#gloogleplussharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');

        window.open('https://plus.google.com/share?url='+encodeURIComponent(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

        return false;
    });

    //pinterest
    $('#pinterestsharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');

        window.open('https://pinterest.com/pin/create/bookmarklet/?url='+encodeURIComponent(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

        return false;
    });
    
    //tumbler
    $('#tumblersharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');

        window.open('https://www.tumblr.com/widgets/share/tool?canonicalUrl='+encodeURIComponent(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

        return false;
    });

    //vks
    $('#vksharebtn').click( function() 
    {
        var shareurl = $(this).data('shareurl');

        window.open('http://vk.com/share.php?url='+encodeURIComponent(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');

        return false;
    });



});