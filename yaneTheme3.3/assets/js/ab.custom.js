$( function() {


    var $clockSection = $(".clockSection"),
    $gameLink = $(".gameLink"),
    $iframeSection = $(".iframeSection"),
    $appsbutton = $("#appsbutton"),
    $sharebutton = $("#sharebutton"),
    $supportbutton = $("#supportbutton"),
    $appitem = $(".appitem"),
    $shaerItem = $(".shaerItem"),
    $supportitem = $(".supportitem");

    $('#textbox').focus();
    

    
    $gameLink.click(function(){
        $iframeSection.toggle();
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
        width: 30,
        height: 13,
        button_width: 15
    });

    

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





    //share window opening
    $('.fbsharelink').click( function() 
    {
        var shareurl = $(this).data('shareurl');
        window.open('https://www.facebook.com/sharer/sharer.php?u='+escape(shareurl)+'&t='+document.title, '', 
        'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
        return false;
    });

    // var twitterShare = document.querySelector('[data-js="twitter-share"]');
    
    // twitterShare.onclick = function(e) {
    //     var twitterUll = $(this).attr('href');
    //     e.preventDefault();
    //     var twitterWindow = window.open('https://twitter.com/share?url=' + twitterUll, 'twitter-popup', 'height=350,width=600');
    //     if(twitterWindow.focus) { twitterWindow.focus(); }
    //     return false;
    // }

    $("#twittershare").click(function(){
        var shareurl = $(this).attr('href');
        
        window.open("https://twitter.com/share?url="+escape(shareurl)+"&text="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;
        
        
    });





});