var HTML_FLAG = false; // false builds xml sitemap

if ( !HTML_FLAG ) {
	var output = "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n xsi:schemaLocation='http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'\n xmlns='http://www.sitemaps.org/schemas/sitemap/0.9;>"
} else {
	var output = '<div id="comparisons>\n';
}

// var in file is called easyload_menu_object
var menus_object = easyload_menu_object;

var current_group = menus_object[0].vehicle_type; // initialize vehicle make at first one (object is "sorted" by vehicle type, then alpha by make, then by model.

// FIRST, build an array of smaller arrays, each being a vehicle_type
var cars_by_type = [];
cars_by_type[ 0 ] = [];
var type_index = 0;
var car_within_type_index = 0;
for ( var i = 0; i < menus_object.length; i++ ) { // OUTSIDE LOOP: Car #1
	// if current object IS NOT same vehicle_type as previous one, create a <select> element
	if ( menus_object[i].vehicle_type !== current_group ) {
		type_index++;
		cars_by_type[ type_index ] = [];
		car_within_type_index = 0;
		current_group = menus_object[i].vehicle_type;
	}
	cars_by_type[ type_index ].push( menus_object[i] );
	//console.log( i + ":  " + type_index);
}

// NOW you can loop thru the array levels, test i != j, that sort of thing.
var counter = 0;
for ( var i = 0 ; i < cars_by_type.length; i++ ) { // vehicle-type loop
	output += '<h2 class="veh_type_heading">' + cars_by_type[ i ][ 0 ].vehicle_type + '</h2>\n';
	// Match every vehicle against all its type-peers
	for ( var vs1 = 0 ; vs1 < cars_by_type[ i ].length; vs1++ ) { // j ~= index within type
		var type_array = cars_by_type[ i ];
		for ( vs2 = 0; vs2 < type_array.length; vs2++ ) {
			if ( vs2 !== vs1 ) { // first two cars good to go
				for ( vs3 = 0; vs3 < type_array.length; vs3++ ) {
					// model names
					var model1 = type_array[ vs1 ].model;
					var model2 = type_array[ vs2 ].model;
					var model3 = type_array[ vs3 ].model;
					// make names
					var make1 = type_array[ vs1 ].make;
					var make2 = type_array[ vs2 ].make;
					var make3 = type_array[ vs3 ].make;
					// mini-outputs 
					var single_url = '';
					if ( HTML_FLAG ) { 
						var vs_str = ''; 
					}
					if ( !HTML_FLAG ) {
						single_url += '<url>\n' + '<loc>';
					} else {
						single_url += '<a href="';
					}
					single_url += 'http://www.noodlercompare.com/app.php?';
					// at the vs3 level, we are always going to output 2 cars	
					single_url += 'car1=' +
						model1 +
						'&amp;car2=' + 
						model2;
					if ( HTML_FLAG ) { 
						vs_str += make1 + ' ' + model1 + ' vs ' + make2 + ' ' + model2;
					}
					// if it's a 3-banger
					if ( vs3 !== vs1 && vs3 !== vs2 ) {
						// add the 3rd car
						single_url += '&amp;car3=' + model3;
						if ( HTML_FLAG ) { 
							vs_str += " vs " + make3 + ' ' + model3;
						}
					}
					// put the closing tags onto single_url
					if ( !HTML_FLAG ) {
						single_url += '</loc>\n</url>\n';
					} else {
						single_url += '" title="Compare ' + vs_str + ' with Noodler Compare">' + vs_str + '</a>\n<br/>';
					}
					// if it's one of the two cases where vs3 matches vs1 or vs2, discard it.
					if ( vs3 == vs1 ) {
						single_url = "";
					}
					// add single_url to output
					output += single_url;
				}
			}
		}
	}
}
if ( !HTML_FLAG ) { 
	output += '\n</urlset>'; 
} else {
	output += '\n</div>';
}
console.log( output );




