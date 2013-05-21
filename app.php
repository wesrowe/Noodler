<?php

/* Simple query parser

This will take a url of the form
 <baseurl>/compare?car1=xxx&car2=xxx&car3=xxx&car4=xxx
and define variables $car1 thru $car4 with values that are the parameter values.
[parse_str() does all that work.]

sample url:  http://localhost/dynamic-url-exp/app.php?car1=Accord&car2=Camry

*/


// SQL parameters
$dbhost = 'localhost';
$dbname = 'style_ids';
$dbtable = 'styles';
$dbuser = 'root';
$dbpassword = '';
// table columns are model_name and style_id

mysql_connect( $dbhost, $dbuser, $dbpassword ) or die(mysql_error()); 

mysql_select_db( $dbname ) or die(mysql_error()); 


$url_current = "http://" . $_SERVER['SERVER_NAME'] . "/dynamic-url-exp/app.html?" . $_SERVER['QUERY_STRING'];

parse_str( $_SERVER['QUERY_STRING'] );

// query var names have to be unique, & have to exist or it will SCREAM
function lookup_style_id( $table, $car_name ) {
	// if lookup succeeds
	$query = "SELECT * FROM " . $table . " WHERE model_name='" . $car_name . "'";
	//echo $query;
	$resource = mysql_query($query); // returning false. hmmmmm.
	if ( !$resource ) { echo "<br/>query resource is false<br/>"; }
	// puts the resource into the $info array 
	$info = mysql_fetch_array( $resource ); 
	return( $info['style_id'] );
	
}
// "VS" string that will be used to customize tags.
$vs_string = "";
$list_string = "";

if ( isset( $car1 ) ) { // param exists
	$id1 = lookup_style_id( $dbtable, $car1 );
	$url_current .= "&id1=" . $id1;
	$vs_string .= $car1;
	$list_string .= $car1;
}
if ( isset( $car2 ) ) { // param exists
	$id2 = lookup_style_id( $dbtable, $car2 );
	$url_current .= "&id2=" . $id2;
	$vs_string .= " <span class='vs_txt'>vs.</span> " . $car2;
	$list_string .= ", " . $car2;
}
if ( isset( $car3 ) ) { // param exists
	$id3 = lookup_style_id( $dbtable, $car3 );
	$url_current .= "&id3=" . $id3;
	$vs_string .= " <span class='vs_txt'>vs.</span><br/>" . $car3;
	$list_string .= ", " . $car3;
}
if ( isset( $car4 ) ) { // param exists
	$id4 = lookup_style_id( $dbtable, $car4 );
	$url_current .= "&id4=" . $id4;
	$vs_string .= " <span class='vs_txt'>vs.</span> " . $car4;
	$list_string .= ", " . $car4;
}
// array of ids:
$ids_array = "";
if ( isset( $car1 ) ) {
	if ( $id1 !== '' ) { $ids_array .= $id1; } 
}
if ( isset( $car2 ) ) {
	if ( $id2 !== '' ) { $ids_array .= ", " . $id2; } 
}
if ( isset( $car3 ) ) {
	if ( $id3 !== '' ) { $ids_array .= ", " . $id3; } 
}
if ( isset( $car4 ) ) {
	if ( $id4 !== '' ) { $ids_array .= ", " . $id4; } 
}

// replace '-' with spaces for display of model_names
$vs_string_pretty = str_replace ( "-", " ", $vs_string ); // using hyphens for spaces in url params
$list_string_pretty = str_replace ( "-", " ", $list_string );

//echo $url_current; // original url plus params holding style_ids.
//header("Location: " . $url_current ); // changes (redirects) the address bar url


/* Okay, now output the markup */
?>
<!doctype html>

<html lang="en">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# 
                  website: http://ogp.me/ns/website#">

	<title><?php 
		$s = ( $vs_string_pretty !== "" ) ? $vs_string_pretty : "Compare Cars Visually";
		echo $s .= "&ndash; Noodler Compare" ;
	?> &ndash; Noodler Compare</title>
	
	<meta property="fb:admins" content="1034261419" />
	<meta property="og:title" content="Compare Cars with Noodler"/>
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="http://www.noodlercompare.com"/>
    <meta property="og:image" content="http://www.noodlercompare.com/images/NoodlerClose-up_sq.png"/>
    <meta property="og:site_name" content="Noodler Car Compare"/>
    <meta property="og:description"
          content="Noodler makes vehicle comparison fun! See similarities and differences at a glance. Data from Edmunds.com, the highly reputable research site."/>
	
	<meta charset="utf-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=2, user-scalable=no"/>

	<!--[if lt IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
	<meta name="description" content="Noodler Compare lets you see the key differences YOU care about, between the <?php 
		if ( $list_string_pretty != "" ) { 
			echo $list_string_pretty; 
		} else { 
			echo "cars you care about";
		}
	?>. Specs and pricing data by Edmunds.com.">
		
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
	<script src="common-js/raphael-min.js" type="text/javascript" charset="utf-8"></script>
	
	<!-- <script type="text/javascript" src="chooser_objects/easyload_menu_object.js"></script> -->
	
	<script type="text/javascript" src="chooser_objects/makeQuery_newandusedmakes_noYearOption.js"></script>
	
	<script type="text/javascript" src="common-js/interaction.js"></script>
	
	<script src="common-js/carviz.js"></script>
	
	<link rel="stylesheet" href="css/style_app.css">
	
	<script>
		var dynamic_ids = [	<?php echo $ids_array ?> ];
	</script>
	
</head>
<body>
		
		<section id="header">
			<h1 id="versus_title"><?php 
				$vs_string_pretty .= " <span class='vs_txt'>vs.</span> <span id='anything'>Anything</span>";
				echo $vs_string_pretty 
			?></h1>
			<a href="http://www.noodlercompare.com/index.html" alt="Noodler Compare Home" title="Noodler Compare logo"><img id="main_logo" src="images/NoodlerLogo_new-black.png" alt="Noodler Compares Cars" Title="Noodler Compare Home"></a>
			<ul id="tabs">
				<li id="discover_btn" onclick="_gaq.push(['_trackEvent', 'Interaction', 'DiscoverTab', 'Clicked', '0', false]); console.log('clicked discover');">POPULAR</li>
				<li id="hints_btn" onclick="_gaq.push(['_trackEvent', 'Interaction', 'KeyTiles', 'Clicked', '0', false]); console.log('clicked hints');">HINTS</li>
			</ul>
			<div id="demo_announcement">
				<h1>A Demo has loaded for you.</h1>
				<h2>Customize your comparison at left by <span class="add_car_color">adding new cars</span> and deleting ones you don't want.</h2>
			</div>
				
			<div class="clear"></div>
		</section>
			<!-- <div id="fb_share">
					<div id="sharer">Share on <img src="images/facebook.png" alt="Share on Facebook"/></div>
						<script>
						document.getElementById('sharer').onclick = function () {
						  var url = 'https://www.facebook.com/sharer/sharer.php?u=';
						  url += encodeURIComponent(location.href);
						  window.open(url, 'fbshare', 'width=640,height=320');
						};
						</script>
			</div> -->
		<div id="outside_left_mask"></div>
		<section id="left_bar">
			<div id="demo_x_flasher">X</div>
		
			<div id="dynamic_picker">
				<!-- <p class="close_handle">&lt; &lt; &lt; CLOSE &lt; &lt; &lt;</p> --> 
				<div class="picker_title" onclick="_gaq.push(['_trackEvent', 'Interaction', 'SliderMenuTitle', 'AddCar', '0', true]); console.log('opened/closed');">
					<span class="picker_close_arrows"></span>
					<span class="title_span">Add a Vehicle</span>
					<!-- <span class="picker_x">X</span> -->
					
				</div>
				<div id="options_list">
					<select id="make_select" name="make">
						<option  onclick="console.log('make dropdown');" value>Select Make</option>  <!-- empty "value" required for one-choice select lists -->
					</select>
					<select disabled="disabled" id="model_select" name="model" disabled="disabled">
						<option value>Select Model</option> 
					</select>
					<select disabled="disabled" id="year_select" name="year" disabled="disabled">
						<option value>Select Year</option>  
					</select>
					<select disabled="disabled" id="trim_select" name="trim" disabled="disabled">
						<option value>Select Trim</option>
					</select>
					<button id="add_car_btn" disabled="disabled">Add Vehicle</button>
					<div class="loading_mask"></div>
				</div>
			</div>
			<div id="remembered_cars_container">
					<div class="picker_title" onclick="_gaq.push(['_trackEvent', 'Interaction', 'SliderMenuTitle', 'RememberedCars', '0', true]); console.log('opened/closed');">
						<span class="picker_close_arrows"></span>
						<span class="title_span">My Rides</span>
						<!-- <span class="picker_x">X</span> -->
					</div>
					<ul id="remembered_cars_list">
						<li class="template remembered_car" style="display:none">
							<button class="add_remembered_car_btn" onclick="_gaq.push(['_trackEvent', 'Interaction', 'Remembered car', 'Added', '1', false]);">Add to Compare</button>
							<span class="car_name_rem"></span><br/><span class="trim_level_rem"></span>
						</li>
					</ul>
					<div class="clear"></div>
					<div class="loading_mask"></div>
			</div>
			<div id="low_left_mask"></div>
			<div id="lower_left_bar">
				<ul id="dynamic_car_display"> <!-- the color-keyed boxes identifying cars -->
					<li class="template car_info_box" style="display:none" onclick="_gaq.push(['_trackEvent', 'Interaction', 'KeyTiles', 'Clicked', '0', false]); console.log('clicked key tile');">
						<h3 class="car_name"></h3>
						<p class="trim_level"><a class="edmunds_link"  target="_blank"></a></p>
						<div class="delete_btn">X</div>
					</li>
				</ul>
				<!-- <a href="http://www.jdoqocy.com/click-7024258-10364260" target="_blank" onmouseover="window.status='http://www.edmunds.com';return true;" onmouseout="window.status=' ';return true;">
					<img src="http://www.tqlkg.com/image-7024258-10364260" width="125" height="125" alt="Search for your next car or truck at Edmunds.com" border="0"/>
				</a> -->
				<!-- <a href="http://www.edmunds.com/" target="_new"><img id="edmunds_credit" src="images/edmunds_api150x30vb.png" title="Data provided by Edmunds.com" alt="Data via the Edmunds API"></a>
				<p class="copyright">Code and design <br/>&copy;2013 Wesley Rowe</p> -->
			<!-- <p>Lots of products can be Noodled. Have an idea? Get in touch!<br/>wes [at] wesrowe [dot] net</p> -->
			</div>
		</section>
			
		<div id="content_area">
		
			<div id="helpful_hints_container">
				<div id="hints">
					<p class="close_x">CLOSE X</p>
					<h3>Helpful hints:</h3>
					<ol>
						<li>You can <span class="blue">compare any car or truck, new or used</span>, that can be found at Edmunds.com. Compare minivans, pickups, SUVs, hybrids, luxury cars. Just click "Add a Vehicle" at left. Pro tip: Pick a vehicle you know well as a baseline, to compare others against.</li>
						<li><span class="blue">Demos</span> will help you see how easy it is to compare the vehicle specs you care about with Noodler. Pick one from the list in the Discover menu.</li>
						<li><span class="blue">You <em>can</em> take it with you</span> &ndash; Noodler is the only vehicle comparison that's useful on a mobile screen.</li>
						<li><span class="blue">Your device will remember</span> cars you've noodled before, look for them under "My Rides" next time. <span id="want_more_devices"><i>(Do you want to send your custom vehicle comparison to another device?)</i></span> <br/>
						<span id="working_on_it">We're working on it!</span></li>
						<li>Click or tap the brightly colored stuff. You'll be glad you did!</li>
					</ol>
				</div>
			</div>
			
			<div style="display: none;" id="discover_area">
				
				<h1>Popular...</h1>
				<p class="close_x">CLOSE X</p>
				<select id="load_demo_btn">
					<option value>Choose a demo</option>
					<option value="minivans">Minivans</option>
					<option value="crossovers">Crossovers</option>
					<option value="hatchbacks">Hatchbacks</option>
				</select>
			
			</div> <!-- /discover -->
			
			<div id="main_paper_container">
				
					
				<section class="template section_container" style="display:none">
					<div class="paper" ></div>
					
					<div class="button_area">
						<p class="expander" onclick="_gaq.push(['_trackEvent', 'Interaction', 'Expander', 'Clicked', '0', false]); console.log('clicked expander');"><span class="expand_indicator">+</span>&nbsp;&nbsp;<span class="section_title"></span></p>
							
					</div>
				
					<div class="spread_adjust_container">
						<img class="smaller" src="images/arrow-up.png" alt="Increase spread" title="Increase space between expanded axes">
						<span class="spreader_text">axis spacing</span>
						<img class="bigger" src="images/arrow-up.png" alt="Decrease spread" title="Decrease space between expanded axes">
					</div>
					<div class="clear"></div>
				
					
					<!-- <div class="spread_handle">spread handle</div> -->
					
				</section>
				
				<div class="clear"></div>
			</div>	<!-- /main_paper_container -->
			<a href="http://www.edmunds.com/" target="_new"><img id="edmunds_credit" src="images/edmunds_api150x30vb.png" title="Data provided by Edmunds.com" alt="Data via the Edmunds API" onclick="_gaq.push(['_trackEvent', 'OutboundLink', 'EdmundsCredit', 'Clicked', '0', false]);"></a>
			<p class="copyright">Code and design <br/>&copy;2013 Wesley Rowe</p>
			<div id="privacy_policy">
				<div><span id="pp_bright_text">Privacy Policy:</span> This website's server does not store information of any kind regarding you or your vehicle interests. Noodler does utilize your computer's hard drive, if your browser allows it, to remember a few facts about cars you've compared so that you can find them again easily. Your use of this web application confirms that you are okay with that.</div>
			</div>
		</div> <!-- content_area -->  

			
		<div class="clear"></div>

<!-- GA -->
<script type="text/javascript">

  var _gaq = _gaq || [];
  var pluginUrl = '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
  _gaq.push(['_require', 'inpage_linkid', pluginUrl]);
  _gaq.push(['_setAccount', 'UA-38228914-1']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>	
</body>
</html>		
		
		
