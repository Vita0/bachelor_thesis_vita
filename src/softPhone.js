var server_ip;
var server_port;
var sip_number;
var sip_password;

$.ajax({
    url: "softPhone.html",cache: false,success: function(html){
        $( "body" ).append( html );
        
        getSipAccount();
    }
});
