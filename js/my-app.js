// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'Coffee Shop',
	dialog: {
		title: 'Coffee Shop',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		
		{
		path: '/productos/',
    	url: 'productos_coffee_app.html',
    	name: 'productos',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;

var notificationOrden = myApp.notification.create({

icon: '<span class="material-icons">shopping_backet</span>',
title: 'Orden de Compra',
titleRightText: '',
subtitle:'',
text:'Su solicitud ha sido aceptada',
closeTimeout: 5000,	
});

$$(document).on('click','#btnComprar', function (e) {
	myApp.dialog.alert('Tu compra fue realizada correctamente !');
	notificationOrden.open();
});



 

