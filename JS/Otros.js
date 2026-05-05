    // LA CONTRASEÑA SERIA admin123 y el Usuario seria Admin, esto es solo para fines de prueba
    let isOn=false;
        const loginForm=document.getElementById("loginForm");
        const lampGroup=document.getElementById("lampGroup");
        const body=document.getElementById("body");
        const root=document.documentElement;
    function toggleLamp(){
        isOn=!isOn;
        lampGroup.setAttribute("data-on",isOn);
            root.style.setProperty("--on",isOn?1:0);
            gsap.to("#string",{y:10,duration:.1,yoyo:true,repeat:1});
        if(isOn){
            loginForm.classList.add("active");
            gsap.to(body,{backgroundColor:"#1c1f24",duration:.6});
        }
        else{
            loginForm.classList.remove("active");
            gsap.to(body,{backgroundColor:"#121417",duration:.6});  
        }
    }
    function validarLogin(){
        const usu= document.getElementById("usuario").value;
        const pass= document.getElementById("contraseña").value.trim();
        if(usu === "admin" && pass === "admin123"){
            alert("Bienvenido admin!");
            window.location.href = "Mantenimiento_clasificaciones.html";
        }
        else{
            alert("Usuario o contraseña incorrectos. Inténtalo de nuevo.");
        }
        };
    