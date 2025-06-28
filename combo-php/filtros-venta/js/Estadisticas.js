var google_conversion_id
var google_custom_params;
var google_remarketing_only
var google_conversion_language;
var google_conversion_format;
var google_conversion_color
var google_conversion_label;
var google_conversion_value;

function f_googleadwords(conv_id,conv_len,conv_form,conv_color,conv_label){
	window.google_trackConversion({
	  google_conversion_id: conv_id, 
	  google_conversion_language:conv_len,
	  google_conversion_format:conv_form,
	  google_conversion_color:conv_color,
	  google_conversion_label:conv_label,
	  google_conversion_currency :"MXN",
	  google_conversion_value :1.00,
	  google_remarketing_only : false
	});
}
function f_googleadwords_2(conv_id){
	window.google_trackConversion({
	google_conversion_id: conv_id, 
	google_custom_params: window.google_tag_params,
	  google_remarketing_only : true
	});
}
function f_kenshoo(par0,par1,par2,par3,par4,par5,par6,par7,par8,par9){
   /*$('head').append('<scr'+'ipt src="'+urladwords,'" type="text/JavaScript"><\/scr'+'ipt>');*/
   //$('head').append('<script src="'+urladwords+'" type="text/JavaScript"></script>');
$.getScript(urladwords)
	.done(function() {
		var params = new Array();
	   params[0]=par0;
	   params[1]=par1;
	   params[2]=par2;
	   params[3]=par3;
	   params[4]=par4;
	   params[5]=par5;
	   params[6]=par6; //For Live Tracking only
	   params[7]=par7; //For Live Tracking only
	   params[8]=par8; //For Live Tracking only
	   k_trackevent(params,par9);
});   
}
function googleAnalytics(pag){	
	if(tipoGAnalytics=='C'){
		if(typeof _gaq != "undefined"){
		//alert('GoogleAnalytics Classic:/'+pag);
		_gaq.push(['_setAccount', idGAnalytics]);
		_gaq.push([pag]);
		}
	}
	else{
		//alert('GoogleAnalytics Universal:/'+pag);
		if(typeof ga != "undefined"){
			ga('create', idGAnalytics, domGAnalytics);
			//ga('send', pag);
			ga('send', 'pageview', pag);
		}
	}
}
function estadisticatag(){
if(tipoGAnalytics=='U' || tipoGAnalytics=='C'){
	(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer',idTagManager);
}
}
function estadisticamath(){
	if (sesion==0){
	   var nuevoscrp = document.createElement('script');
	   nuevoscrp.setAttribute('language', 'JavaScript1.1');
	   nuevoscrp.setAttribute('src', '//pixel.mathtag.com/event/js?mt_id=533368&mt_adid=127862&v1=&v2=&v3=&s1=&s2=&s3=');
	   document.getElementsByTagName('head')[0].appendChild(nuevoscrp);
	}
}
function estadisticamath_exito(){
	//TKU page
	if ( sesion == 0 )
	{
		var nuevoscrp = document.createElement('script');
		nuevoscrp.setAttribute('type', 'text/javascript');
		nuevoscrp.innerHTML = "var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://')" + 
			"+ 'clickserv.sitescout.com/conv/8724f973ddfb7111';new Image().src = ssaUrl;";
		document.getElementsByTagName('body')[0].appendChild(nuevoscrp);
	}
}
function estadisticamathResumen(){
	// Resumen
	if ( sesion == 0 )
	{
	   var nuevoscrp = document.createElement('script');
	   nuevoscrp.setAttribute('language', 'JavaScript1.1');
	   nuevoscrp.setAttribute('src',  ('https:' == document.location.protocol ? 'https://' : 'http://') + 'pixel.sitescout.com/iap/f3ffb93630353d8b');
	   document.getElementsByTagName('body')[0].appendChild(nuevoscrp);
	}
}
function estadisticamath_home(){
	// Pagos, Corridas	
	if ( sesion == 0 )
	{
		if( $('#f3ffb93630353d8b').length > 0 )
		{
			$('#f3ffb93630353d8b').remove();
		}
		var nuevoscrp = document.createElement('script');
		nuevoscrp.setAttribute('id', 'f3ffb93630353d8b');
		nuevoscrp.setAttribute('type', 'text/javascript');
		nuevoscrp.innerHTML = "var ssaUrl = ('https:' == document.location.protocol ? 'https://' : 'http://')" + 
		"+ 'pixel.sitescout.com/iap/f3ffb93630353d8b';new Image().src = ssaUrl;";
		document.getElementsByTagName('body')[0].appendChild(nuevoscrp);
	}
}
(function() {
  var _fbq = window._fbq || (window._fbq = []);
  if (!_fbq.loaded) {
    var fbds = document.createElement('script');
    fbds.async = true;
    fbds.src = '//connect.facebook.net/en_US/fbds.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(fbds, s);
    _fbq.loaded = true;
  }
})();
function FB_Conversion(track_ID) {
  	window._fbq = window._fbq || [];
	window._fbq.push(['track', track_ID, {'value':'0.01','currency':'MXN'}]);
}
function countCloud() {
	var iframe = document.createElement('iframe');
	iframe.setAttribute('src','//adsays.go2cloud.org/SL46?adv_sub=SUB_ID&amount=AMOUNT');
	iframe.setAttribute('width','1');
	iframe.setAttribute('height','1');
	iframe.setAttribute('frameborder','0');
	iframe.setAttribute('style', 'display:none');
	document.getElementsByTagName('body')[0].appendChild(iframe);
}
function estadisticamath_2() {
	var script = document.createElement('script');
	script.setAttribute('language', 'JavaScript1.1');
	script.setAttribute('src', '//pixel.mathtag.com/event/js?mt_id=745312&mt_adid=139581&v1=&v2=&v3=&s1=&s2=&s3=');
	document.getElementsByTagName('head')[0].appendChild(script);
}
function estadisticamath_3() {
	var script = document.createElement('script');
	script.setAttribute('language', 'JavaScript1.1');
	script.setAttribute('src', '//pixel.mathtag.com/event/js?mt_id=745311&mt_adid=139581&v1=&v2=&v3=&s1=&s2=&s3=');
	document.getElementsByTagName('head')[0].appendChild(script);
}
function PixelesPlacomedSegmento(){
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=cjr4mtza;ord=' + a + '?';
	document.body.appendChild(iframe);

	axel = Math.random() + "";
	a = axel * 10000000000000;
	iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=rthqww5h;ord=' + a + '?';
	document.body.appendChild(iframe);

	axel = Math.random() + "";
	a = axel * 10000000000000;
	iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=kbocprg9;ord=' + a + '?';
	document.body.appendChild(iframe);
}
function PixelesPlacomedConversion(){
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	var iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=dxbtjjtc;ord=' + a + '?';
	document.body.appendChild(iframe);
	
	axel = Math.random() + "";
	a = axel * 10000000000000;
	iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=oyufhcto;ord=' + a + '?';
	document.body.appendChild(iframe);
	
	axel = Math.random() + "";
	a = axel * 10000000000000;
	iframe = document.createElement('iframe');
	iframe.style.display = "none";
	iframe.width = "1";
	iframe.height = "1";
	iframe.frameborder="0";
	iframe.src = 'https://5095534.fls.doubleclick.net/activityi;src=5095534;type=invmedia;cat=s9ihxzqm;ord=' + a + '?';
	document.body.appendChild(iframe);
}
function ConversionYoutube(){
	window.google_trackConversion({
	google_conversion_id : 940457523,
	google_conversion_language : "en",
	google_conversion_format : "3",
	google_conversion_color : "ffffff",
	google_conversion_label : "Clr5COLmmmEQs_y4wAM",
	google_remarketing_only : false
	});
}
function Pixel_DMP() {
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	script.setAttribute('src', hostProtocol + '://tags.crwdcntrl.net/c/9333/cc_af.js');
	document.getElementsByTagName('head')[0].appendChild(script);
}
function Ecommerce_Track(object) {
	ga('create', idGAnalytics, 'auto'); 
	
	ID_TRANS = object.Transaccion.trim();
	TOT_PRICE = parseFloat(object.Total.replace(",",""));	
	ORG_DEST = object.Origen + ' ' + object.Destino;
	
	ga('require', 'ecommerce');
	// EJECUCION POR TRANSACION DE VENTA
	ga('ecommerce:addTransaction', {
		'id': ID_TRANS, //Transacción
		'affiliation': 'ETN',
		'revenue': TOT_PRICE, // Total_Transacción
		'shipping': 0,
		'tax': CalcIVA() // IVA_Transacción
	});
	
	console.log("'ecommerce:addTransaction', {'id': " + ID_TRANS + ", 'affiliation': ETN, 'revenue': " + TOT_PRICE + ", 'shipping': 0, 'tax': " + CalcIVA() + " }");
	
	$.each( object.ViajeIda, function( index, item )
	{
		// EJECUCION POR OPERACION DE VENTA
		AddOperacionCommerce(ID_TRANS, ORG_DEST, item.Operacion, object.ClaseServicio, item.Monto);
	});
	//CASO REDONDO
	if( typeof object.ViajeRegreso != "undefined" )
	{
		ORG_DEST = object.Destino + ' ' + object.Origen;
		$.each( object.ViajeRegreso, function( index, item )
		{
			AddOperacionCommerce(ID_TRANS, ORG_DEST, item.Operacion.trim(), object.ClaseServicio, item.Monto);
		});
	}
	
	ga('ecommerce:send');
	
	function AddOperacionCommerce(ID_TRANS, ORG_DEST, CODE_OPE, CLAS_SERV, U_PRICE)
	{
		U_PRICE = parseFloat(U_PRICE.replace(",",""));
		// EJECUCION POR OPERACION DE VENTA
		ga('ecommerce:addItem', {
			'id': ID_TRANS, // Transacción
			'name': ORG_DEST, //Origen y Destino
			'sku': 'SKU' + CODE_OPE, // SKU/CODE_OPE
			'category': CLAS_SERV, // Clase_Servicio
			'price': U_PRICE, // Precio_Viaje
			'quantity': 1
		});
		
		console.log("'ecommerce:addItem', {'id': " + ID_TRANS + ", 'name': " + ORG_DEST + ", 'sku': SKU" + CODE_OPE + ", 'category': " + CLAS_SERV + ", 'price': " + U_PRICE + ", 'quantity': 1 }");
	}
	function CalcIVA()
	{
		IVA = 0;
		
		$.each( object.ViajeIda, function( index, item ){
			IVA += parseFloat(item.IVA.replace(",",""));
		});
		
		if(typeof object.ViajeRegreso != "undefined")
		{
			$.each( object.ViajeRegreso, function( index, item ){
				IVA += parseFloat(item.IVA.replace(",",""));
			});			
		}
		
		return IVA;
	}
}
function Facebook_Pixel(object) {	
	fbq('track', 'Purchase', {
		value: parseFloat(object.Total.replace(",","")),
		currency: 'MXN'
	});
	console.log('fbq(\'track\', \'Purchase\', {value: ' + parseFloat(object.Total.replace(",","")) + ',currency: \'MXN\'});');
}
function insert_Code_FCBPX() {
	if ($("#FCBPX").length == 0 && IDFBPX != "")
	{
		var script = document.createElement('script');
		var scripts = "";
		script.setAttribute('id', 'FCBPX');
		script.setAttribute('type', 'text/javascript');
		scripts = "!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?" +
		"n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;" +
		"n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;" +
		"t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window," +
		"document,\'script\',\'//connect.facebook.net/en_US/fbevents.js');" +
		//"fbq(\'init\', \'251642395253605\');" +
		"fbq(\'init\', \'"+IDFBPX+"\');" +
		"fbq(\'track\', \'PageView\');" ;		
		document.getElementsByTagName('head')[0].appendChild(script);
		script.innerHTML = scripts;
		//<!-- Insert Your Facebook Pixel ID below. -->
		document.getElementsByTagName('head')[0].append('<noscript><img height="1" width="1" style="display:none"' + 
		'src="https://www.facebook.com/tr?id='+IDFBPX+'&ev=PageView&noscript=1"/></noscript>');
		//<!-- End Facebook Pixel Code -->
	}
}
function OpenGraphInsert() {
	if (IDCVFB == "")
	{
		return false;
	}
	
	cad = '';
	//<!-- OpenGraph metadata-->
	cad += '<meta property="og:locale" content="es_LA" />';
	cad += '<meta property="og:type" content="website" />';
	cad += '<meta property="og:site_name" content="ETN Turistar Lujo" />';
	//<!-- Open Graph para Facebook-->
	cad += '<meta property="og:title" content="ETN Turistar Lujo" />';
	cad += '<meta property="og:url" content="https://etn.com.mx/" />';
	cad += '<meta property="og:image" content="https://etn.com.mx/img/etn.jpg" />';
	cad += '<meta property="og:description" content="Línea de Autobuses de lujo con destinos a México, Guadalajara, Morelia, León, Querétaro, San Luis Potosí, Monterrey, Acapulco y 24 estados de la república." />';
	cad += '<meta property="og:ETN Turistar Lujo" content="ETN Turistar Lujo" />';
	
	$('head').append(cad);		
	
	window.fbAsyncInit = function() {
		FB.init({
		appId      : IDCVFB,
		xfbml      : true,
		version    : 'v2.9'
		});
		FB.AppEvents.logPageView();
	};

	(function(d, s, id){
		var js, fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {return;}
		js = d.createElement(s); js.id = id;
		js.src = "//connect.facebook.net/en_US/sdk.js";
		fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
}
function Share_Trip_FB() {
	FB.ui({
		method: 'share',
		display: 'popup',
		href: 'https://etn.com.mx',
	}, function(response){});
}
function set_info_cart() {
	//Script para obtener la información del cliente
    var event_info = new Object();
    event_info.first_name = pasajeros[0].value; //First Name
    event_info.last_name = apPaternos[0].value; //Last Name
    event_info.phone = telefono.value; //Phone
    event_info.email = correos[0].value; //Email
	
	bysideWebcare_event("set_info_cart", event_info);
}
function set_actual_step() {
	if (BYWCID == "")
	{
		console.log("NO KEY REGISTER: BYWCID");
		return;
	}
	$("#pasos-venta > div").each( function(i) {
		if(this.className == "circulo")
		{
			console.log("paso: " + (i+1) + ", desktop");
			//Script para informarnos sobre el Step del visitante:
			var event_info = new Object();
			event_info.step = i+1; //Step

			bysideWebcare_event( "actual_step", event_info);
		}
		if(i == 2 && this.className == "circulo")
		{
			console.log("set_info_cart:")
			set_info_cart();
		}
		if(i == ($("#pasos-venta > div").length-1) && this.className == "circulo")
		{
			console.log("set_checkout: " + i)
			set_checkout();
		}
	});
}
function set_checkout() {
	//Evento de Checkout
    var event_info = new Object();
    event_info.state = "Evento"; //State
	
	bysideWebcare_event( "checkout", event_info);
}
function Pixel_DataXpand() {
	if (CNDTPX != "")
	{
		var img = document.createElement('img');
		img.setAttribute('width', '1');
		img.setAttribute('height', '1');
		//img.setAttribute('src', hostProtocol + '://bcp.crwdcntrl.net/5/c=7149/b=39647723');
		img.setAttribute('src', hostProtocol + '://bcp.crwdcntrl.net/5/' + CNDTPX);
		document.getElementsByTagName('head')[0].appendChild(img);			
	}
}
function VWOAC_Script() {
	if (VWOAID == "" || sesion > 0)
	{
		return;
	}
	//Start Visual Website Optimizer Asynchronous Code
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	html = "var _vwo_code=(function(){\
		var account_id="+VWOAID+",\
		settings_tolerance=2000,\
		library_tolerance=2500,\
		use_existing_jquery=false,\
		/* DO NOT EDIT BELOW THIS LINE */\
		f=false,d=document;return{use_existing_jquery:function(){return use_existing_jquery;},library_tolerance:function(){return library_tolerance;},finish:function(){if(!f){f=true;var a=d.getElementById('_vis_opt_path_hides');if(a)a.parentNode.removeChild(a);}},finished:function(){return f;},load:function(a){var b=d.createElement('script');b.src=a;b.type='text/javascript';b.innerText;b.onerror=function(){_vwo_code.finish();};d.getElementsByTagName('head')[0].appendChild(b);},init:function(){settings_timer=setTimeout('_vwo_code.finish()',settings_tolerance);var a=d.createElement('style'),b='body{opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;}',h=d.getElementsByTagName('head')[0];a.setAttribute('id','_vis_opt_path_hides');a.setAttribute('type','text/css');if(a.styleSheet)a.styleSheet.cssText=b;else a.appendChild(d.createTextNode(b));h.appendChild(a);this.load('//dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&u='+encodeURIComponent(d.URL)+'&r='+Math.random());return settings_timer;}};}());_vwo_settings_timer=_vwo_code.init();";
	document.getElementsByTagName('head')[0].appendChild(script);
	script.innerHTML = html;
}
function Hotjar_Tracking() {
	if (HJTCID == "" || sesion > 0)
	{
		return ;
	}
	//Hotjar Tracking Code for https://etn.com.mx
	var script = document.createElement('script');
	script.setAttribute('type', 'text/javascript');
	html = "(function(h,o,t,j,a,r){\
			h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\
			h._hjSettings={hjid:"+HJTCID+",hjsv:6};\
			a=o.getElementsByTagName('head')[0];\
			r=o.createElement('script');r.async=1;\
			r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\
			a.appendChild(r);\
		})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=')";
	document.getElementsByTagName('head')[0].appendChild(script);
	script.innerHTML = html;
}