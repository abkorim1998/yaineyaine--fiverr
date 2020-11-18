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
            <ul>
                <li class="clockManu">
                    <div class="clockbutton">
                        <div class="item-name">Clock</div>
                        <div class="demo" id="clock">
                            <input type="checkbox" value="1">
                        </div>
                    </div>
                </li>

                <li class="gameManu">
                    <div class="gameLink">
                        <a href="#">
                            <div class="icon"><i class="fas fa-gamepad"></i></div>
                            <div class="gameText">Play Game</div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>

        <!-- search Section -->
        <div class="searchSection">
            <div class="searchBox">
                <input id="textbox" type="text" placeholder="Search on Google..." onkeydown="if (event.keyCode == 13 || event.which == 13) { location='http://www.google.com/search?q=' + encodeURIComponent(document.getElementById('textbox').value);}" />
                
            </div>
        </div>


    </div>

    <!-- Slider container -->
    <div class="sliderContainer">
        <div class="closeSlider"><i class="fas fa-times"></i></div>
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
        </div>           
    </div>                


    <!-- show images -->
    <div class="showImages"><a><i class="fas fa-image"></i></div>
    
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

    <!-- iframe -->
    <div class="iframeSection">
        
        <iframe id="game-iframe" name="Framename" src="https://antiochforever.com/game/game/" width="100%" height="100%" frameborder="0" scrolling="yes" style="width: 100%;"> </iframe> 
    
    </div>
  

    <!-- footer section     -->
    <div class="footerSection">

        <div class="menuItem">
            <ul>
                <li><a id="ratebutton" href="#">Rate</a></li>
                <li><a id="appsbutton" href="#">Apps</a></li>
                <li><a id="sharebutton" href="#">Share</a></li>
                <li><a id="supportbutton" href="#">Support</a></li>
            </ul>
        </div>

        <div class="shaerItem">
            <ul>
                <li><i class="fab fa-facebook-f"></i><a id="fbsharebtn" data-shareurl="http://www.google.comg">Facebook</a></li>
                <li><i class="fab fa-twitter"></i><a id="twittersharebtn"  data-shareurl="http://www.google.com">Tweet</a></li>
                <li><i class="fab fa-google-plus-g"></i><a id="gloogleplussharebtn" data-shareurl="www.google.com">Google+</a></li>
                <li><i class="fab fa-pinterest"></i><a id="pinterestsharebtn" data-shareurl="www.google.com">Pinterest</a></li>
                <li><i class="fab fa-tumblr"></i><a id="tumblersharebtn" data-shareurl="www.google.com">Tumblr</a></li>
                <li><i class="fab fa-vk"></i><a id="vksharebtn" data-shareurl="www.google.com">Vk</a></li>
            </ul>
        </div>

        <div class="appitem">
            <ul>
            <li><img src="https://img.icons8.com/color/96/000000/facebook.png"><a href="https://www.facebook.com/">Facebook</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/gmail.png"><a href="https://mail.google.com/mail/">Gmail</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/youtube-play.png"><a href="https://www.youtube.com/">YouTube</a></li>
               <li><img src="https://img.icons8.com/color/98/000000/google-drive.png"><a href="https://drive.google.com/">Drive</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-docs.png"><a href="https://docs.google.com/document/">Docs</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-calendar.png"><a href="https://calendar.google.com/">Calendar</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-photos.png"><a href="https://photos.google.com/">Photos</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-maps.png"><a href="https://maps.google.com/">Maps</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-translate.png"><a href="https://translate.google.com/">Translate</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/google-classroom.png"><a href="https://classroom.google.com/">Classroom</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/amazon.png"><a href="https://www.amazon.com/">Amazon</a></li>
               <li><img src="https://img.icons8.com/color/96/000000/ebay.png"><a href="https://www.ebay.com/">Ebay</a></li>
               <li><img src="https://img.icons8.com/ios/100/000000/wikipedia.png"><a href="https://www.wikipedia.org/">wikipedia</a></li>
            </ul>
        </div>
        <div class="supportitem">
            <ul>
               <li><a href="#">Privacy</a></li>
               <li><a href="#">DMCA</a></li>
               <li><a href="#">EULA</a></li>
               <li><a id="uninstallbtn" href="#">Uninstall</a></li>
            </ul>
        </div>

    </div>
    

		
<?php wp_footer(); ?>
	</body>
</html>