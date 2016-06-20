function getSipAccount(){
    $.ajax({
        url: "softPhone_vtiger.php",
        dataType: 'json',
        cache: false,
        success: function(json){
            server_ip = json.server_ip;
            server_port = json.server_port;
            sip_number = json.sip_number;
            sip_password = json.sip_password;
            console.log("server info: " + server_ip + ":" + server_port + " // " + sip_number + " " + sip_password);
        }
    });
}