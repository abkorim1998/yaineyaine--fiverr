<!DOCTYPE html>
<html lang="en">
    <head>

	  <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
      <meta name="description" content="Fullscreen Slit Slider with CSS3 and jQuery" />
      <meta name="keywords" content="slit slider, plugin, css3, transitions, jquery, fullscreen, autoplay" />
      <meta name="author" content="Codrops" />
      <link rel="shortcut icon" href="../favicon.ico"> 

      <link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Ultra">
      

		<?php wp_head();?>
    </head>
    <body <?php body_class() ?>>
    
    

    <div class="kbcover">
        
        <div class="menu">
            <div class="settingsbtn"><a href="#"><i class="fas fa-cog"></i></a></div>
            <div class="gameLink"><a href="#"><i class="fas fa-gamepad"></i><span>Play Game</span></a></div>
        </div>

        <!-- search Section -->
        <div class="searchSection">
            <div class="searchBox">
                <input id="textbox" type="text" placeholder="Search on Google..." onkeydown="if (event.keyCode == 13 || event.which == 13) { location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('textbox').value);}" />
                
            </div>
        </div>

         <!-- todo list -->
        <div class="todoSection">
            <div class="todoBox">
                <div class="todoHead">
                    <div class="headLeft"><input placeholder="Write To Do..." type="text" name="" id="todoContent"></div>
                    <div class="headRight"><a href="#"><i class="fas fa-plus"></i></a></div>
                </div>
                <div class="todoBody">
                    <ul></ul>
                </div>
            </div>
        </div>

    </div>

   
    <div id="thumbnails">
        <ul>

        <?php

            $carousel = new WP_Query(array(
                "post_type" => "yane_abk_carousel",
                'posts_per_page' => -0,
                'orderby' => 'rand'
            ));
            while($carousel->have_posts()) : $carousel->the_post();
            
        ?>

            
            <li>
                <a href="<?php echo get_the_post_thumbnail_url() ?>">
                    <img src="<?php echo get_the_post_thumbnail_url() ?>" title="New York moving" data-valign="top">
                </a>
            </li>
            
       
        <?php endwhile ?>
        </ul>
    	<!-- <div id="pointer"></div> -->
    </div>
    <!-- show images -->
    <div class="showImages"><a href="#"><i class="fas fa-image"></i></div>
    <div class="todoShowbutton"><a href="#"><i class="fas fa-clipboard-list"></i></a></div>
    
    

    <!-- clock section -->
    <div class="clockSection">
        <div class="clockBox">
            <ul>
                <li id="hours"> </li>
                <li id="point">:</li>
                <li id="min"> </li>
                <li id="point">:</li>
                <li id="sec"> </li>
            </ul>
            <div id="Date"></div>
        </div>
    </div>

   

    <!-- setting Section -->
    <div class="settingSection">
        <div class="settingBox">
            <div class="closeBtn"><a href="#"><i class="fas fa-times"></i></a></div>
            <div class="settingFunc">
                <ul>
                    <li>
                        <div class="item-name">Shuffle Mode</div>
                        <div class="demo" id="modebtn">
                            <input type="checkbox" value="1" checked>
                        </div>
                    </li>
                    <li>
                        <div class="item-name">Auto Hide</div>
                        <div class="demo" id="autohide">
                            <input type="checkbox" value="1" checked>
                        </div>
                    </li>
                    <li>
                        <div class="item-name">Todo</div>
                        <div class="demo" id="todo">
                            <input type="checkbox" value="1" checked>
                        </div>
                    </li>
                    <li>
                        <div class="item-name">Clock</div>
                        <div class="demo" id="clock">
                            <input type="checkbox" value="1">
                        </div>
                    </li>
                </ul>
            </div>


            <div class="settingFoo">
                <ul>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">DMC</a></li>
                    <li><a href="#">AEULA</a></li>
                    <li><a href="#">Uninstall</a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- iframe -->
    <!-- <iframe src="https://www.google.com" frameborder="0"></iframe> -->
    <div class="iframeSection">
        <iframe name="Framename" src="https://gamedistribution.com/games" width="100%" height="100%" frameborder="0" scrolling="yes" style="width: 100%;"> </iframe> 
    </div>
   
   
   
		
<?php wp_footer(); ?>
	</body>
</html>