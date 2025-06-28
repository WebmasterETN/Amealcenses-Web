<!DOCTYPE html>
<html lang="es-mx" class="no-js">
<!--<![endif]-->
<html lang="es-mx" xml:lang="es-mx">
<head>
    <title>TLU Cuadro de Venta </title>
    <meta http-equiv="content-type|default-style|refresh" />
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
    <link rel="shortcut icon" type="image/x-icon" href="./img/icons/favicon.ico" />
    <!-- Estilos CSS -->
    <noscript>
    <link rel="stylesheet" href="./css/gijgo.min.css?v1.2" type="text/css" />
	<link rel="stylesheet" href="./css/all.css" type="text/css" />
    </noscript>
    <!-- Resources JS -->
   <script src="./plugins/jquery-3.3.1.min.js"></script>
   <script src="./plugins/gijgo.min.js" type="text/javascript"></script>
    <script src="./plugins/messages.es-es.js" type="text/javascript"></script>
   <script src="./plugins/bootstrap-notify.min.js" type="text/javascript"></script>
    <script src="./plugins/loadCSS.min.js"></script>
    <!--<link rel="stylesheet" rel="preload" href="./css/bootstrap-4.1.1.css?v1" type="text/css">-->
    <link rel="stylesheet" href="./css/bootstrap.min.css?v1.1" type="text/css">
    <link rel="stylesheet" href="./css/style_filtro.css?v1.7" type="text/css">
    <script src="./js/idiomaES.js" type="text/javascript"></script>
    <script src="./js/idiomaIN.js" type="text/javascript"></script>
    <script src="./js/idioma.js" type="text/javascript"></script>
    <script src="./js/Estadisticas.js" type="text/javascript"></script>
    <style rel="preload" type="text/css" as="style">
        .a {cursor: pointer}
    </style>
	
	<!--<link rel="preload" href="styles.css" as="style">-->

    <script type="text/javascript">

        var PAFEAJS = function () {
            var date = today;
            date = date.split("/");
            if (date.length > 0){
                date = "?" + date[0] + date[1] + date[2];
            }
            else{
                date = "";
            }
            return date;
        };

        function form2val(elem)
        {
            var dataclave = $(elem).attr("data-clave");
            var datanombre = $(elem).attr("data-nombre");
            var dataclave= $(elem).attr("data-clave");
            event.preventDefault();
            $("#sel2").val(dataclave);
            $("#textDestino").val(datanombre.capitalize().trim() + " | " + dataclave);
            $("#destinosListaContainer").css("display","none");
            $(".lugares").slideUp();
            $("#destinosListaTodosContainer").slideUp();
            menuOpen = "";
        }
    </script>
    
    <script type="text/javascript">
        // &&JS ie-emulation-modes-warning JS
        !function () { "use strict"; function n() { var n = /MSIE ([0-9.]+)/.exec(window.navigator.userAgent); if (null === n) return null; var e = parseInt(n[1], 10), r = Math.floor(e); return r } function e() { var n = new Function("/*@cc_on return @_jscript_version; @*/")(); return void 0 === n ? 11 : 9 > n ? 8 : n } var r = window.navigator.userAgent; if (!(r.indexOf("Opera") > -1 || r.indexOf("Presto") > -1)) { var i = n(); if (null !== i) { var o = e(); i !== o && window.alert("WARNING: You appear to be using IE" + o + " in IE" + i + " emulation mode.\nIE emulation modes can behave significantly differently from ACTUAL older versions of IE.\nPLEASE DON'T FILE BOOTSTRAP BUGS based on testing in IE emulation modes!") } } }();
    </script>
    <!--&&JS ie10-viewport-bug-workaround JS-->
    <script type="text/javascript">
        !function () { "use strict"; if (navigator.userAgent.match(/IEMobile\/10\.0/)) { var e = document.createElement("style"); e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")), document.querySelector("head").appendChild(e) } }();
    </script>
    <!--&&Variables Globales && Funciones -->
    <script language="javascript">

        function fill_format_cero(value) {
            return value >= 10 ? value : "0" + value.toString();
        }

        //URL PAQUETE DE VIAJES ETN
        var URLPAQ = '<!$MG_URLPAQ>';
        var URLPVI = '<!$MG_URLPVI>';
        var URLFAH = (("<!$MG_URLFiltroAH>").indexOf("$MG") == -1 ? "<!$MG_URLFiltroAH>" : "");
        var sesion = 0;
        var forma1 = '<!$MG_modo>';
        var idioma = '<!$MG_Idioma>';
        var viajeroFreq = '<!$MG_RS_msjVF>';
        var RS_membresiaVF = '<!$MG_RS_membresiaVF>';
        var MiviajeCP = '<!$MG_MiviajeCP>'
        var MaxDistinVF = 'N';
        var ADPCDW = '<!$MG_ADPCDW>';

        setIdioma(idioma);

        var server = '<!$MG_AppName>';
        var intcrm = '<!$MG_RS_INTCRM>';
        var ID_Membresia = '<!$MG_RS_membresiaVF>';
        var VFMensaje = '<!$MG_RS_EsCorrecto>';
        var auxorigen = '';

        var fechaactual_f = new Date();
        fechaactual_fD = fill_format_cero(fechaactual_f.getDate().toString());
        fechaactual_fM = fill_format_cero((fechaactual_f.getMonth() + 1).toString());
        fechaactual_fY = fechaactual_f.getFullYear().toString();

        var finima = "<!$MG_finima>";
        var ffinma = "<!$MG_ffinma>";
        var finies = "<!$MG_finies>";
        var ffines = "<!$MG_ffines>";
        var mostrarEst = 'N';
        var mostrarProf = 'N';
        var modoMovil = '';
        var TP_OPERAC = 'CE';
        var SELL_LIMIT = '<!$MG_CD_Restriccion>';
        SELL_LIMIT = (SELL_LIMIT != '' ? SELL_LIMIT.split(',') : '');
        var CH_REST = new Array();
        var Path_Name = window.location.pathname;
        var ENVMACHINENAME = '<!$MG_ENVMACHINENAME>';
        var DESCOD = "<!$MG_DESCOD>";
        var codigoProm = "";
        var Pet_Destino;
        var hostProtocol = (("https:" == document.location.protocol) ? "https" : "http");
        //Variables para restriccion
        var redondo = 'NO';
        var paso = 0;

        var URLCVM = function () {
            var object;
            try
            {
                object = JSON.parse('<!$MG_URLCVM>');
            }
            catch (e)
            {
                object = [];
            }
            return object;
        };
        var VWOAID = (("<!$MG_VWOAID>").indexOf("$MG") == -1 ? "<!$MG_VWOAID>" : "");
        var HJTCID = (("<!$MG_HJTCID>").indexOf("$MG") == -1 ? "<!$MG_HJTCID>" : "");
        var TRSWEB = (("<!$MG_TRSWEB>").indexOf("$MG") == -1 ? "<!$MG_TRSWEB>" : "NO");
        var DIAGEN = "<!$MG_DIAGEN>";

        var ofc_ida = '';
        var ofc_reg = '';
        var fch_ida = function () { return $('#fecha_ida').val() };
        var fch_reg = function () { return $('#fecha_reg').val() };
        var fecha_idaRespaldo = '';
        var Cnt_Psj = new Object();
        Cnt_Psj.AD = function () { return 1 };
        Cnt_Psj.ME = function () { return 0 };
        Cnt_Psj.ES = function () { return 0 };
        Cnt_Psj.MA = function () { return 0 };
        Cnt_Psj.IN = function () { return 0 };
        Cnt_Psj.OD = function () { return 0 };
        Tip_Bol_AB = false;
        var Banner = '<!$MG_Banner>';
        var vjeRedondo = function () { return ($('#fecha_reg').val() === "" ? "V1" : "V2") };
        var ejecutar = true;
    </script>
</head>
<body>
  <?php
  require_once ("conexion.php");
  $conexion = conectar();
  $consulta = "SELECT TRIM(ACLAVEOFICINAORIGEN) AS ACLAVEOFICINAORIGEN, TRIM(ADESCRIPCIONIDA) AS ADESCRIPCIONIDA, TRIM(AESTADOIDA) AS AESTADOIDA, TRIM(AFAVORITAIDA) AS AFAVORITAIDA
    FROM VTOFICINASWEB_REL
    WHERE LACTIVA = 1
    AND TRIM(ACLAVEOFICINAORIGEN) != ''
    GROUP BY ACLAVEOFICINAORIGEN
    ORDER BY ADESCRIPCIONIDA";
  $resultado = mysqli_query( $conexion, $consulta ) or die ( "Algo ha ido mal en la consulta a la base de datos");
  ?>
    <section class="fondo">
        <input id='sel1' type="hidden" >
        <input id='sel2' type="hidden" >
        <div class="container-fluid">
            <div id="box-message"></div>
            <div class="row">
                <div class="col-lg-12 panel">
                    <div class="tab-content" id="v-pills-tabContent">
                        <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                            <div class="row">
                                <div class="col-lg-3 col-md-4 ofi mod">
                                    <input type="text" id="textOrigen" data-target="#origenesListaContainer" class="form-control form-control-lg" autocomplete="off" placeholder="Origen">
                                    <button class="mostrarTodos" data-target="#origenesListaTodosContainer"> + </button>
                                    <div class="lugares oculto" id="origenesListaContainer">
                                        <div class="lugares-origen">
                                            <div class="lugares-contenedor">
                                                <button class="lugares-mostrar-todos" data-target="#origenesListaTodosContainer">Ver todos</button>
                                                <ul class="lugares-lista" id="origenesLista" style="height: auto;">
                                                    <?php
                                                    foreach ($resultado as $columna) {

                                                        if($columna['AFAVORITAIDA']=="SI"){
                                                            $clase="tbold";
                                                        } else {
                                                            $clase="";
                                                        }
                                                        echo "<li><a href='#' class='$clase sel_origen'  data-estado='".$columna['AESTADOIDA']."' data-clave='".$columna['ACLAVEOFICINAORIGEN']."' data-nombre='".strtolower($columna['ADESCRIPCIONIDA'])."' data-nombrest='".$columna['AESTADOIDA']."'>".strtolower($columna['ADESCRIPCIONIDA'])." <span clase='nombre-estado'>(".$columna['AESTADOIDA'].")</span></a></li>";
                                                    }
                                                    ?>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="lugares-todos oculto" id="origenesListaTodosContainer">
                                        <ul id="origenesListaTodos" class="split-list ">
                                       
                                        <?php
                                        $num_rows=$resultado->num_rows;
                                        if($num_rows<=10){
                                            $tot_columas=1;
                                        } elseif ($num_rows>10 && $num_rows<=20) {
                                            $tot_columas=2;
                                        } elseif ($num_rows>20 && $num_rows<=40) {
                                            $tot_columas=3;
                                        } elseif ($num_rows>40 && $num_rows<=50) {
                                            $tot_columas=4;
                                        } elseif ($num_rows>50) {
                                            $tot_columas=5;
                                        }
                                        $cont_ren = 0;
                                        $cont_col = 1;
                                        $tot_elem_col = round($num_rows/$tot_columas);
                                        if($num_rows>0){

                                            echo '<ul class="sub-list">';
                                            
                                            foreach ($resultado as $columna) {

                                                if($columna['AFAVORITAIDA']=="SI"){
                                                    $clase="tbold";
                                                } else {
                                                    $clase="";
                                                }
                                                echo "<li><a href='#'  class='$clase sel_origen'  data-estado='".$columna['AESTADOIDA']."' data-clave='".$columna['ACLAVEOFICINAORIGEN']."' data-nombre='".strtolower($columna['ADESCRIPCIONIDA'])."' data-nombrest='".$columna['AESTADOIDA']."'>".strtolower($columna['ADESCRIPCIONIDA'])." <span clase='nombre-estado'>(".$columna['AESTADOIDA'].")</span></a></li>";      
                                                if(($cont_ren%$tot_elem_col)==0 && $cont_ren>0 && $cont_col<=$tot_columas-1) {
                                                    echo '</ul>';
                                                    echo '<ul class="sub-list">';
                                                    $cont_col = $cont_col + 1;
                                                }    

                                                $cont_ren = $cont_ren + 1;
                                                
                                            }
                                            echo '</ul>';
                                        }
                                        ?>
                                       
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-4 ofi mod">
                                    <input type="text" id="textDestino" data-target="#destinosListaContainer" class="form-control form-control-lg" autocomplete="off" placeholder="Destino" disabled="disabled">
                                    <button class="mostrarTodos" data-target="#destinosListaTodosContainer" id="mostrarTodosDestinos" disabled="disabled"> + </button>
                                    <div class="lugares oculto" id="destinosListaContainer">
                                        <div class="lugares-origen">
                                            <div class="lugares-contenedor">
                                                <button class="lugares-mostrar-todos" data-target="#destinosListaTodosContainer">Ver todos</button>
                                                <ul class="lugares-lista" id="destinosLista2" style="height: auto;">
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="lugares-todos oculto" id="destinosListaTodosContainer">
                                        <ul id="destinosListaTodos" class="split-list"></ul>
                                    </div>
                                    
                                </div>
                                <div class="col-lg-3 col-md-4 mod">
                                    <input id="fecha_ida" class="datepicker" width="100%" autocomplete="off" placeholder="Salida" />
                                </div>
                                <!-- <div class="col-lg-2 col-sm-4 mod">
                                    <input id="fecha_reg" class="datepicker" width="100%" autocomplete="off" placeholder="Regreso" />
                                </div> -->
                                <!-- <div class="col-lg-1 col-md-2 mod">
                                    <div class="contenedor boleto-abiertos">
                                        <div class="boleto-ida">
                                            <label class="switch">
                                                <input id="checkbox_abierto" type="checkbox" autocomplete="off">
                                                <span class="slider round"></span>
                                            </label>
                                            <br>
                                            <p class="boleto-abierto-etn">Boleto Abierto</p>
                                        </div>
                                    </div>
                                </div> -->
                                <div class="col-lg-3 col-md-4">
                                    <button class="btn btn-block btn-dark btn-consultar" onclick="action_continue();"> Consultar </button>
                                </div>
                                <div id="ejecutar_accion"></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    <script type="text/javascript">
        var ALocale = "";
        if (idioma.toLowerCase() !== "in")
        {
            ALocale = "es-es";
        }
        else
        {
            ALocale = "en-us";
        }
        var today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        var DateMax = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
        DateMax.setDate(DateMax.getDate() + parseInt(DIAGEN, 10));

        function process_date(date) {
            var parts = date.split("/");
            return new Date(parts[2], parts[1] - 1, parts[0]);
        }
        function bs_notify(message, offset_obj) {
            var _top = 100;
            var _left = 50;

            if (typeof offset_obj !== 'undefined')
            {
                offset_obj = ($(offset_obj).length > 0 ? $(offset_obj).offset() : 0);
                _top = offset_obj.top;
                _left = offset_obj.left;
            }

            $.notify({
                // options
                // icon: './img/icons/error-notify.png',
                // title: idioma == "IN" ? ' required: ' : ' requerido: ',
                message: message
            }, {
                    // settings
                    // icon_type: 'image',
                    type: 'info',
                    placement: { from: "bottom", align: "left" },
                    offset: { x: _left, y: _top }
                });
            console.log(message);
        }
        function holders_selection() {
            $.each($('.select2'), function (x, obj) {
                if (typeof obj.attributes.placeholder == "object")
                {
                    option = document.createElement("option");
                    option.value = 0;
                    option.text = obj.attributes.placeholder.value;
                    obj.add(option);
                }
            });
        }
        function action_continue() {

           // if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // Esto es un dispositivo móvil
             //   var TipoDispositivo = "ML";
           // } else {
                // Es una PC
           //     var TipoDispositivo = "";
           // }
			 var TipoDispositivo = "";

            //var elemento = $(this).attr('data-clave');
            var of_origen = $("#sel1").val();
            var of_destino = $("#sel2").val();
            var fecha_ida = $("#fecha_ida").val();
            var fecha_reg = $("#fecha_reg").val();

            if (of_origen == "") {
                bs_notify("Debe seleccionar un origen");
            } else {
                if (of_destino == "") {
                    bs_notify("Debe seleccionar un destino");
                } else {
                    // if($("#checkbox_abierto").prop('checked')===false) {
                        if(fecha_ida !== ""){
                            var f = new Date();
                            var Hoy = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
                            var fecha_aux = document.getElementById("fecha_ida").value.split("/");
                            var Fecha1 = new Date(parseInt(fecha_aux[2]),parseInt(fecha_aux[1]-1),parseInt(fecha_aux[0]));
                            if (Fecha1<Hoy) {
                                bs_notify("La fecha ida no puede ser menor al dia de hoy");
                            } 
                            // else {
                                // si tiene fecha de vuelta
                                // if (fecha_reg!="") {
                                //     var fecha_aux2 = document.getElementById("fecha_reg").value.split("/");
                                //     var Fecha2 = new Date(parseInt(fecha_aux2[2]),parseInt(fecha_aux2[1]-1),parseInt(fecha_aux2[0]));
                                //     if(Fecha2<Fecha1) {
                                //         bs_notify("La fecha regreso no puede ser menor a la fecha de ida");
                                //     } else {
                                //         var V = "V1";
                                //         if (fecha_reg!=""){
                                //             V = "V2";
                                //         }
                                //         var url = "https://venta.etn.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AMA,-A"+TipoDispositivo+",-A"+of_origen+",-A"+of_destino+",-A"+fecha_ida+",-A"+fecha_reg+",-A1,-A0,-A0,-A0,-A0,-A"+V+",-A,-A,-A,-AES,-A,-A,-A,-A,-A,-ANO,-A,-A,-A,-A,-A,-A,-ANO";
                                //         //window.location=url;
                                //         window.top.location.href=url;
                                //     }
                                // } 
                                else {
                                    var V = "V1";
                                    if (fecha_reg!=""){
                                        V = "V2";
                                    }
                                    if(of_origen!="" && of_destino!=""){
                                        var url = "https://venta.etn.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AMA,-A"+TipoDispositivo+",-A"+of_origen+",-A"+of_destino+",-A"+fecha_ida+",-A"+fecha_reg+",-A1,-A0,-A0,-A0,-A0,-A"+V+",-A,-A,-A,-AES,-A,-A,-A,-A,-A,-ANO,-A,-A,-A,-A,-A,-A,-ANO";
                                        //window.location=url;
                                        window.top.location.href=url;
                                    }
                                }
                        } 
                        else {
                            bs_notify("La fecha de salida no puede estar vacía");
                            }
                        // }
                    // } 
                    // else {
                    //     $("#fecha_ida").val("");
                    //     $("#fecha_reg").val("");
                    //     if(of_origen!="" && of_destino!=""){
                    //         var url = "https://venta.etn.com.mx/request.aspx?APPNAME=Navegante&PRGNAME=AccesoEx&ARGUMENTS=-AMA,-A,-A"+of_origen+",-A"+of_destino+",-A,-A"+TipoDispositivo+",-A1,-A0,-A0,-A0,-A0,-AV1,-A,-A,-A,-AES,-A,-A,-A,-A,-A,-ASI,-A,-A,-A,-A,-A,-A,-ANO";
                    //         //window.location=url;
                    //         window.top.location.href=url;
                    //     }
                    // }
                }
            }
        }
        function valida_Consulta() {
            var V_FechaSis = new Date();

            if (ofc_ida == "ORIGEN" || ofc_ida == undefined || ofc_ida == "")
            {
                bs_notify("Necesita seleccionar un origen", $('#oficina_origen')[0]);
                return false;
            }
            console.log(oficina_origen);
            if (ofc_reg == "DESTINO" || ofc_reg == undefined || ofc_reg == "")
            {
                bs_notify("Necesita seleccionar un destino", $('#tdDestino')[0]);
                return false;
            }
            if (ofc_ida == ofc_reg)
            {
                bs_notify(msj.ErrorOrigDestIguales);
                return false;
            }
            if (fch_ida() === "" && !Tip_Bol_AB)
            {
                bs_notify("Favor de Elegir una Fecha Valida", $("#fecha_ida")[0]);
                return false;
            }
            // valida que la fecha de viaje no sea menor al día de hoy
            if (!fechaValida(fch_ida()) && !Tip_Bol_AB)
            {
                bs_notify("Favor de Elegir una Fecha Valida", $("#fecha_ida")[0]);
                return false;
            }
            // valida que la fecha de viaje no sea menor al día de hoy
            if (!fechaValida(fch_reg()) && !Tip_Bol_AB)
            {
                bs_notify("Favor de Elegir una Fecha Valida", $("#fecha_reg")[0]);
                return false;
            }
            // valida que la fecha de regreso no sea menor a la fecha de viaje.
            if (vjeRedondo() == 'V2')
            {
                if (fch_reg().substring(6, 10) < fch_ida().substring(6, 10))
                {
                    bs_notify("La fecha de regreso no debe ser menor a la fecha de salida", $("fecha_reg")[0]);
                    return false;
                }
                if (fch_reg().substring(6, 10) == fch_ida().substring(6, 10))
                {
                    if (fch_reg().substring(3, 5) < fch_ida().substring(3, 5))
                    {
                        bs_notify(msj.FechaRegNoMenoraFechaSal);
                        return false;
                    }
                    if (fch_reg().substring(3, 5) == fch_ida().substring(3, 5))
                    {
                        if (fch_reg() < fch_ida())
                        {
                            bs_notify(msj.FechaRegNoMenoraFechaSal);
                            return false;
                        }
                    }
                }
            }
            return true;
        }
        function fechaValida(laFecha, ag) {
            var V_FechaSis = new Date();
            var diaActual = parseInt(V_FechaSis.getDate());
            mesActual = parseInt(V_FechaSis.getMonth() + 1);
            anioActual = parseInt(V_FechaSis.getFullYear());

            if (ag == 'AG')
            {
                var strdiaElegido = laFecha.substring(0, 2);
                strmesElegido = laFecha.substring(3, 5);
                stranioElegido = laFecha.substring(6, 10);
            }
            else
            {
                var strdiaElegido = laFecha.substring(0, 2);
                strmesElegido = laFecha.substring(3, 5);
                stranioElegido = laFecha.substring(6, 10);
            }

            var diaElegido;
            var mesElegido;
            var anioElegido;

            if (strdiaElegido.charAt(0) == '0')
            {
                diaElegido = parseInt(strdiaElegido.substring(1, 2));
            }
            else
            {
                diaElegido = parseInt(strdiaElegido);
            }

            if (strmesElegido.charAt(0) == '0')
            {
                mesElegido = parseInt(strmesElegido.substring(1, 2));
            }
            else
            {
                mesElegido = parseInt(strmesElegido);
            }

            anioElegido = parseInt(stranioElegido);

            if (anioElegido < anioActual)
            {
                return false;
            }
            else
            {
                if (anioElegido == anioActual && mesElegido < mesActual)
                {
                    return false;
                }
                else
                {
                    if ((anioElegido == anioActual) && (mesElegido == mesActual) && (diaElegido < diaActual))
                    {
                        return false;
                    }
                    else
                    {
                        return true;
                    }
                }
            }
        }
        function comparafechas(fecha, fecha1) {
            fecha_ida = fecha.split("/");
            fecha_vig = fecha1.split("/");

            if (fecha_ida[2] > fecha_vig[2])
            {// YEAR
                return 1;
            }
            else if (fecha_ida[2] < fecha_vig[2])
            {// YEAR
                return -1;
            }
            else
            {
                if (fecha_ida[1] > fecha_vig[1])
                {// MONTHS
                    return 1;
                }
                else if (fecha_ida[1] < fecha_vig[1])
                {// MONTHS
                    return -1;
                }
                else
                {
                    if (fecha_ida[0] > fecha_vig[0])
                    {// DAY
                        return 1;
                    }
                    else if (fecha_ida[0] < fecha_vig[0])
                    {// DAY
                        return -1;
                    }
                    else
                    {
                        if (fecha_ida[0] == fecha_vig[0])
                        {
                            return 0;
                        }
                        else
                        {
                            return 1;
                        }
                    }
                }
            }
        }
        function columnas(contenedor) {
            var num_cols = 5,
                container = contenedor,
                listItem = 'li',
                listClass = 'sub-list',
                num_items = contenedor.find("li").length;

            if (num_items <= 10)
            {
                num_cols = 1;
            } else if (num_items > 11 && num_items <= 20)
            {
                num_cols = 2;
            }
            else if (num_items > 21 && num_items <= 40)
            {
                num_cols = 3;
            }
            else if (num_items > 41 && num_items <= 50)
            {
                num_cols = 4;
            }
            else if (num_items > 51)
            {
                num_cols = 5;
            }

            container.each(function () {
                var items_per_col = new Array(),
                    items = $(this).find(listItem),
                    min_items_per_col = Math.floor(items.length / num_cols),
                    difference = items.length - (min_items_per_col * num_cols);

                for (var i = 0; i < num_cols; i++)
                {
                    if (i < difference)
                    {
                        items_per_col[i] = min_items_per_col + 1;
                    }
                    else
                    {
                        items_per_col[i] = min_items_per_col;
                    }
                }

                for (var i = 0; i < num_cols; i++)
                {
                    $(this).append($('<ul ></ul>').addClass(listClass));
                    for (var j = 0; j < items_per_col[i]; j++)
                    {
                        var pointer = 0;
                        for (var k = 0; k < i; k++)
                        {
                            pointer += items_per_col[k];
                        }
                        $(this).find('.' + listClass).last().append(items[j + pointer]);
                    }
                }
            });

            container.width(Math.round(215 * num_cols));
        }
        function ponError(id) {
            if ($("#" + id).length > 0)
            {
                $("#" + id).css({ border: '3px solid #f40000' });
                $("#" + id).focus();
            }
            else if ($("[name=" + id + "]").length > 0)
            {
                $("[name=" + id + "]").css({ border: '3px solid #f40000' });
                $("[name=" + id + "]").focus();
            }
        }
        function getDatoEmail(obj) {
            if (obj.value == "")
            {
                bs_notify(msj.ErrorenEmail);
                return false;
            }
            else if (!emailOk(obj.value, txt.correop))
            {
                return false;
            }

            query_post = '{"APPNAME":"Navegante","PRGNAME":"ObtieneDatosPersona","ARGUMENTS":"a_correo,a_filtro","a_correo":"' + obj.value.toUpperCase().trim() + '","a_filtro":"SI"}';

            $.post(Path_Name, JSON.parse(query_post), function (data) {
                data = JSON.parse(data);

                if (data.aClaveOrigen == "")
                {
                    return false;
                }
                else
                {
                    query_post = '{"APPNAME":"Navegante","PRGNAME":"AccesoEx","ARGUMENTS":"aModo, aHorizontal, aOfcIda, aOfcReg, aFchIda, aFchReg, nAD, nIN, nNI, nES, nMA, aVjeRed, aUsrAG, aClvPsw, nSesion, aIdioma, nFrmPago, aEjcDesde, aMemberVF, aVntMaxDis, nClvMiViaje, aBltAbierto, aCngBol, aClvOpe, nPsjIN, nMontoIN, nMsgErrorIN, aINAbierto, aCnsHorarios, aClvServicio, nOD, aVigencia, nConsecutivo, aURLSTOpeTou, aINMain, aCorreo", "aModo":"MA", "aHorizontal":"", "aOfcIda":"' + data.aClaveOrigen + '", "aOfcReg":"' + data.aClaveDestino + '", "aFchIda":"' + fch_ida() + '", "aFchReg":"' + fch_reg() + '", "nAD":1, "nIN":0, "nNI":0, "nES":0, "nMA":0, "aVjeRed":"' + vjeRedondo() + '", "aUsrAG":"", "aClvPsw":"", "nSesion":0, "aIdioma":"' + idioma + '", "nFrmPago":0, "aEjcDesde":"", "aMemberVF":"", "aVntMaxDis":"", "nClvMiViaje":0, "aBltAbierto":"NO", "aCngBol":"", "aClvOpe":"", "nPsjIN":0, "nMontoIN":0, "nMsgErrorIN":0, "aINAbierto":"", "aCnsHorarios":"NO", "aClvServicio":"", "nOD":0, "aVigencia":"", "nConsecutivo":"", "aURLSTOpeTou":"", "aINMain":"","aCorreo":"' + data.aCorreo + '"}';

                    var form = $('<form></form>');
                    form.attr("method", "post");
                    form.attr("action", Path_Name);

                    $.each(JSON.parse(query_post), function (key, value) {
                        var field = $('<input></input>');

                        field.attr("type", "hidden");
                        field.attr("name", key);
                        field.attr("value", value);

                        form.append(field);
                    });
                    // The form needs to be a part of the document in
                    // order for us to be able to submit it.
                    $(document.body).append(form);
                    form.submit();
                }
            });
        }
        function emailOk(cadena, muestra) {
            var patron = /^[A-Za-z\d\-\_\.+]+\@[A-Za-z\d\-\_+]+\.[A-Za-z\d\-\_\.+]+$/;
            var emailOk = patron.test(cadena, muestra);
            if (!emailOk)
            {
                bs_notify(msj.ElCampo + ' ' + muestra + ' ' + msj.NoTieneFormatoCorreo);
                return false;
            }
            return true;
        }
        function event_handler_key(e) {
            if (e.which === 9)
            {
                if (e.shiftKey)
                {
                    $.tabPrev();
                }
                else
                {
                    $.tabNext();
                }
                e.preventDefault();
            }
        }
        String.prototype.capitalize = function () {
            return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) { return p1 + p2.toUpperCase(); });
        };
        function IsOpenOriDes() {
            if ($("#origenesListaTodosContainer").css('display') == 'block')
            {
                $("#origenesListaTodosContainer").slideUp();
            }
            if ($("#destinosListaTodosContainer").css('display') == 'block')
            {
                $("#destinosListaTodosContainer").slideUp();
            }
            menuOpen = "";
        }
    </script>
    <script type="text/javascript">
        window.onload = function () {
            // holders_selection();
            $("#fecha_ida").attr("placeholder", txt.fechasalidafil);
            $("#fecha_reg").attr("placeholder", txt.fecharegresofil);
            $("#textOrigen").attr("placeholder", txt.SALIDA);
            $("#textDestino").attr("placeholder", txt.REGRESO);
            $('*[id*="ListaContainer"] button').html(txt.lblVerTodos);
            $(".boleto-abierto-etn").html(txt.BoletoAbierto)
            $(".btn-consultar").text(txt.BotonConsultar);

            $('#fecha_ida').datepicker({
                locale: ALocale,
                uiLibrary: 'bootstrap4',
                format: "dd/mm/yyyy",
                autoclose: false,
                todayHighlight: true,
                minDate: today,
                maxDate: new Date(new Date().setDate(new Date().getDate() + 60)),
                endDate: new Date(new Date().setDate(new Date().getDate() + 60))
            });

            $('#fecha_reg').datepicker({
                locale: ALocale,
                uiLibrary: 'bootstrap4',
                format: "dd/mm/yyyy",
                autoclose: false,
                todayHighlight: true,
                minDate: today,
                minDate: function () {
                    if ($("#fecha_ida").val() === "") {
                        return today;
                    }
                    var dateParts = $("#fecha_ida").val().split("/");
                    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]); // month is 0-based
                },
                maxDate: new Date(new Date().setDate(new Date().getDate() + 60)),
                endDate: new Date(new Date().setDate(new Date().getDate() + 60))
            });

            $('.datepicker').on('change', function(ev) {
                var stringToValidate = this.value;
                var rgexp = /(^(((0[1-9]|1[0-9]|2[0-8])[/](0[1-9]|1[012]))|((29|30|31)[/](0[13578]|1[02]))|((29|30)[/](0[4,6,9]|11)))[/](19|[2-9][0-9])\d\d$)|(^29[/]02[/](19|[2-9][0-9])(00|04|08|12|16|20|24|28|32|36|40|44|48|52|56|60|64|68|72|76|80|84|88|92|96)$)/;
                var isValidDate = rgexp.test(stringToValidate);
                if (!rgexp.test(stringToValidate)) {
                    this.value = "";
                    return false;
                }
                if (this.id === "fecha_ida")
                {
                    if (process_date(fch_ida()) > process_date(fch_reg()))
                    {
                        $('#fecha_reg').val(this.value);
                    }
                }
            });

            $(".gj-datepicker").on("click", function(e) {
                if (this.children[0].id === "fecha_reg" && this.children[0].value === "")
                {
                    $('#fecha_reg').datepicker().val($('#fecha_ida').datepicker().val());
                }

                $("#" + this.children[0].id).datepicker().open();
                    IsOpenOriDes();
                
                // if($("#checkbox_abierto").prop('checked')===false){
                //     $("#" + this.children[0].id).datepicker().open();
                //     IsOpenOriDes();
                // } else {
                //     $("#" + this.children[0].id).datepicker().close();
                // }
            });

            //funcion para quitar el case sensitive a las busquedas, no borrar
            $.expr[":"].contains = $.expr.createPseudo(function (arg) {
                return function (elem) {
                    return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
                };
            });

            var menuOpen = "";

            $("#textOrigen, #textDestino").focus(function() {
                $(".lugares-todos").slideUp();
                $(".mostrarTodos").text("+");
                menuOpen = "";
                let target = $(this).data("target");
                $(target).slideDown();
            }).keyup(function (e) {
                let valor = this.value.toLowerCase();
                let target = $(this).data("target");
                if (valor.length >= 1)
                {
                    $(target + " li").hide();
                    $(target + "  li:contains('" + valor + "')").show();
                }
                else
                {
                    $(target + " li").show();
                }
            }).focusout(function () {
                let target = $(this).data("target");
                $(target).slideUp();
                menuOpen = "";
            });

            $(".mostrarTodos, .lugares-mostrar-todos").click(function (e) {
                e.preventDefault();
                $(".lugares").slideUp();
                let target = $(this).data("target");
                if (menuOpen == target)
                {
                    $(target).slideUp();
                    menuOpen = "";
                }
                else
                {
                    $(menuOpen).slideUp();
                    $(target).slideDown();
                    menuOpen = target;
                    second_box = $("#origenesListaTodos");
                    // columnas(second_box);
                }
            })

            if (TRSWEB != "SI")
            {
                //Carga_Oficinas('', '#origenesLista');
                $("#origenesLista, #origenesListaTodos").on("click", "a", function (e) {
                    e.preventDefault();
                    let clave = $(this).data("clave");
                    ofc_ida = clave;
                  //  Carga_Oficinas(clave, '#destinosLista');
                    $("#origenesListaContainer").slideUp();
                    $("#origenesListaTodosContainer").slideUp();
                    //$("#textOrigen").val($(this).data("nombre").capitalize() + " | " + $(this).data("estado"));
                    $("#sel1").val($(this).data("clave"));

                    menuOpen = "";
                });
                $("#destinosLista, #destinosListaTodos").on("click", "a", function (e) {
                    e.preventDefault();
                    ofc_reg = $(this).data("clave");
                    $(".lugares").slideUp();
                    $("#destinosListaTodosContainer").slideUp();
                    $(".mostrarTodos").text("+");
                    $("#textDestino").val($(this).data("nombre").capitalize() + " | " + $(this).data("estado"));
                    menuOpen = "";
                });
            }
            else
            {
              //  Carga_Oficinas();
                $('#oficina_origen').change(function () {
                    if (ofc_ida != this.value && ofc_ida != "")
                    {
                        $('#tdDestino option[value=' + ofc_ida + ']').prop('disabled', false);
                        $('#tdDestino option[value=' + this.value + ']').prop('disabled', true);
                    }
                    else
                    {
                        $('#tdDestino option[value=' + this.value + ']').prop('disabled', true);
                    }
                    ofc_ida = this.value;
                    $('#tdDestino').select2();
                });
                $('#tdDestino').change(function () {
                    if (ofc_reg != this.value && ofc_reg != "")
                    {
                        $('#oficina_origen option[value=' + ofc_reg + ']').prop('disabled', false);
                        $('#oficina_origen option[value=' + this.value + ']').prop('disabled', true);
                    }
                    else
                    {
                        $('#oficina_origen option[value=' + this.value + ']').prop('disabled', true);
                    }
                    ofc_reg = this.value;
                    $('#oficina_origen').select2();
                });
            }
            $('#RS_promocion').change(function () {
                codigoProm = this.value;
            });
            $("#checkbox_abierto").on('change', function() {
                Tip_Bol_AB = this.checked;
                if(this.checked===true){
                  $("#fecha_ida,#fecha_reg").val('').attr('readonly','readonly');
                  $("#fecha_ida").attr('placeholder','Salida');
                  $("#fecha_reg").attr('placeholder','Regreso');
                }
                if(this.checked===false){
                  $("#fecha_ida,#fecha_reg").val('').removeAttr('readonly','readonly');
                }                
            });

        $(".sel_origen").on('click', function() {

            var elemento = $(this).attr('data-clave');
            if (elemento != '') {

            $("#textOrigen").val($(this).attr('data-nombre').capitalize().trim() + " | " + $(this).attr('data-clave'));

            $("#destinosLista2").load("valida.php", {
                elemento: elemento,
                opcion: 1
            }, function(response, status, xhr) {
                if (status == "error") {
                    var msg = "Error!, algo ha sucedido (reportar al área de sistemas): ";
                    $("#validacion").html(msg + xhr.status + " " + xhr.statusText);
                }
            });

            $("#destinosListaTodos").load("valida.php", {
                elemento: elemento,
                opcion: 1
            }, function(response, status, xhr) {
                if (status == "error") {
                    var msg = "Error!, algo ha sucedido (reportar al área de sistemas): ";
                    $("#validacion").html(msg + xhr.status + " " + xhr.statusText);
                }
            });

            $("#textDestino").val("");
            $("#sel2").val("");
            $('#textDestino').removeAttr('disabled');
            $('#mostrarTodosDestinos').removeAttr('disabled');
            $("#textDestino").attr("placeholder", "Seleccione un destino");
            $("#destinosListaContainer").css("display","block");
            $("#destinosListaTodosContainer").slideUp();
          }
        });

        $("#textOrigen").on('change', function() {
            $("#destinosLista2").html('');
            $("#textDestino").val(""); 
            $("#sel2").val("");  
        });

        $('[name="RS_correo"]').on('input', function() {
            emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
            //Se muestra un texto a modo de ejemplo, luego va a ser un icono
            if (emailRegex.test(this.value))
            {
                getDatoEmail(this);
            }
            else
            {
                return false;
            }
        });
        $("[data-target]").each(function () {
            $(this).on("click", function (e) {
                e.preventDefault();
                $(this.attributes["data-target"].value).focus();
            });
        });

        Pixel_DMP();

        if (VFMensaje == 'M')
        {
            bs_notify(viajeroFreq);
        }
        $(document).keydown(event_handler_key);

        loadCSS("./css/gijgo.min.css");
        loadCSS("./css/all.css");

        $(document).on('click', function (e) {
            if (e.target.tagName.toLowerCase() != 'input' && e.target.tagName.toLowerCase() != 'button')
            {
                IsOpenOriDes();
            }
        });
    };
    </script>
</body>
</html>
