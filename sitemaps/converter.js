var output = "<?xml version='1.0' encoding='UTF-8'?>\n<urlset xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance'\n xsi:schemaLocation='http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd'\n xmlns='http://www.sitemaps.org/schemas/sitemap/0.9;>"

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
for ( var i = 0 ; i < 1 /* cars_by_type.length */; i++ ) { // vehicle-type loop
	
	// Match every vehicle against all its type-peers
	for ( var vs1 = 0 ; vs1 < cars_by_type[ i ].length; vs1++ ) { // j ~= index within type
		var type_array = cars_by_type[ i ];
		for ( vs2 = 0; vs2 < type_array.length; vs2++ ) {
			if ( vs2 !== vs1 ) { // first two cars good to go
				for ( vs3 = 0; vs3 < type_array.length; vs3++ ) {
					// mini-output 
					var single_url = "";
					single_url += '<url>\n' +
						'<loc>' +
						'http://www.noodlercompare.com/app.php?';
					// at the vs3 level, we are always going to output 2 cars	
					single_url += 'car1=' +
						type_array[ vs1 ].model +
						'&amp;car2=' + 
						type_array[ vs2 ].model;						
					// if it's a 3-banger
					if ( vs3 !== vs1 && vs3 !== vs2 ) {
						// add the 3rd car
						single_url += '&amp;car3=' + 
						type_array[ vs3 ].model;
					}
					// put the closing tags onto single_url
					single_url += '</loc>\n</url>\n';
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
output += '</urlset>';
console.log( output );




