$(window).on("load", function(){
    $(".loader-wrapper").fadeOut(2000);
});

function openpage(){
    var x = document.getElementById("search").value;
    let weblink;

    if (x.toLowerCase() === "Mashiro Shiina".toLowerCase() || x.toLowerCase() === "Mashiro".toLowerCase() || x.toLowerCase() === "Shiina".toLowerCase()){
        window.open("/Detail/detail.html");
    }
    else if (x.toLowerCase() === "Ai Hinatsuru".toLowerCase() || x.toLowerCase() === "Hiantsuru".toLowerCase()){
        window.open("/Detail/detail2.html");
    }
    else if (x.toLowerCase() === "Hana Shirosaki".toLowerCase() || x.toLowerCase() === "Shirosaki".toLowerCase()){
        window.open("/Detail/detail3.html");
    }
    else if (x.toLowerCase() === "Hinata Hoshino".toLowerCase() || x.toLowerCase() === "Hoshino".toLowerCase()){
        window.open("/Detail/detail4.html");
    }
    else if (x.toLowerCase() === "Zero Two".toLowerCase()){
        window.open("/Detail/detail5.html");
    }
    else if (x.toLowerCase() === "Yuuki Asuna".toLowerCase() || x.toLowerCase() === "Asuna".toLowerCase()){
        window.open("/Detail/detail6.html");
    }
    else if (x.toLowerCase() === "Nezuko Kamado".toLowerCase() || x.toLowerCase() === "Nezuko".toLowerCase()){
        window.open("/Detail/detail7.html");
    }
    else if (x.toLowerCase() === "Miku Nakano".toLowerCase() || x.toLowerCase() === "Miku".toLowerCase()){
        window.open("/Detail/detail8.html");
    }
    else if (x.toLowerCase() === "Emilia".toLowerCase()){
        window.open("/Detail/detail9.html");
    }
    else if (x.toLowerCase() === "Rem".toLowerCase()){
        window.open("/Detail/detail10.html");
    }else{
        weblink = "https://www.google.com/search?q=" + x;
        window.open(weblink);
    }
}