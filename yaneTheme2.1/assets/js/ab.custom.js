$( function() {


    var $closebtn = $(".closeBtn"),
    $settingSection = $(".settingSection"),
    $settingsbtn = $(".settingsbtn"),
    $clockSection = $(".clockSection"),
    $todoShowbutton = $(".todoShowbutton"),
    $todoSection = $(".todoSection"),
    $addbutton = $(".headRight a"),
    $itemCheckButton = $(".itemCheckButton"),
    $itemCloseButton = $(".itemCloseButton"),
    $todoEvent = $(".todoEvent"),
    $gameLink = $(".gameLink"),
    $iframeSection = $(".iframeSection");


    
    $closebtn.click(function(){
        $settingSection.hide("slide", { direction: "left" }, 1000);

        return false;
    });

    $settingsbtn.click(function(){
        $settingSection.show("slide", { direction: "left" }, 1000);
        return false;
    });

    $todoShowbutton.click(function(){
        $todoSection.toggle("fade", 1000);
        $('#todoContent').focus();
        

        return false;
    });
    
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



    //-------------------------------------
    //          toDo button function
    //____________________________________
    $("#todo").switchButton().change(function () {
        // console.log(this.checked)
        Cookies.set('todobutton', this.checked, { expires: 7 });
        if( this.checked == true ){
            $todoShowbutton.show();
        }else{
            $todoShowbutton.hide();
        }
    })
    var $todobuttoncookie = Cookies.get('todobutton');
    if( $todobuttoncookie == 'true' ){
        $todoShowbutton.show();
        $("#todo").switchButton({checked: true})
    }else{
        $todoShowbutton.hide();
    }

    $("#modebtn").switchButton();
    $("#autohide").switchButton();
    $("#todo").switchButton();
    $("#clock").switchButton();

    
    

    //-------------------------------------
    //          toDo item
    //____________________________________
    var data = (Cookies.get('todoList')) ? JSON.parse(Cookies.get('todoList')): {
        todo : [],
        complete: []
    }
    
    var item = $(".todoBody ul");
    var rendomID = Math.random();
    

    //add item
    $addbutton.click(function(){

        
        var $todoContent = $("#todoContent").val();

        $(item).append('<li class="list-item" id="'+rendomID+'"><div class="todoContent"><p>'+$todoContent+'</p></div><div class="todoEvent"><button class="itemCheckButton"><i class="fas fa-check"></i></button><button class="itemCloseButton"><i class="fas fa-times"></i></button></div></li>');
      
       
        


        data.todo.push($todoContent); //data adding
        datauplode() //data uploading here
        var $todoContent = $("#todoContent").val(""); //clear the input fild
        $('#todoContent').focus(); //focus on input fild
        return false;
    });



    //complete item
    $itemCheckButton.live("click", function(){
        
        $(this).closest('.list-item').find('p').css({"text-decoration": "line-through"});
        $(this).closest('.list-item').css({"background": "forestgreen"});
        
        
        data.complete.push($(this).closest('.list-item').find('p').text()); //complted data ading
        data.todo.shift($(this).closest('.list-item').find('p').text()); //cleare item from todo 
        datauplode() //data upload here
        return false;
    });



    //remove item
    $itemCloseButton.live("click",function(){
        
        


        data.complete.shift($(this).closest('.list-item').find('p').text()); //cleare item from complete
        data.todo.shift($(this).closest('.list-item').find('p').text()); //cleare item from todo

        $(this).closest('.list-item').remove();
        datauplode() //data upload here
        return false;
    });

    function datauplode(){

        Cookies.set('todoList', JSON.stringify(data), { expires: 7 });
        console.log(JSON.stringify(data));

    }

    function renduertodolist(){
        if(!data.todo.length && !data.complete.length ) return;

        for( var i = 0; i < data.todo.length; i++ ){
            var value = data.todo[i];

            $(item).append('<li class="list-item"><div class="todoContent"><p>'+value+'</p></div><div class="todoEvent"><button class="itemCheckButton"><i class="fas fa-check"></i></button><button class="itemCloseButton"><i class="fas fa-times"></i></button></div></li>');

        }

        
        for( var j = 0; j < data.complete.length; j++ ){
            
            var valueCompl = data.complete[j];
            $(item).append('<li class="list-item item-bg"><div class="todoContent"><p class="complete-item-p">'+valueCompl+'</p></div><div class="todoEvent"><button class="itemCheckButton"><i class="fas fa-check"></i></button><button class="itemCloseButton"><i class="fas fa-times"></i></button></div></li>');

        }

    }
    renduertodolist()





});