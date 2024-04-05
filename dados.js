

        const parts = ["Acariciar","Tocar","Lamer","Chupar","Morder","Besar",];
        const actions = ["Labios","Zona Intima","Nalgas","Pezones","Cuello","Muslos",];



        boton= document.getElementById('boton')
        partes = document.querySelector('#bparts');
        acciones= document.getElementById('bactions');
        var num1;
        var num2;
        

        //functions
        function tirarDados(){
            num1 = getRandomint(0,6);
            num2 = getRandomint(0,6);
            
           
            document.getElementById('bparts').innerHTML = parts[num1];
            document.getElementById('bactions').innerHTML = actions[num2];
        }
        
        function getRandomint(min,max){
            minint= Math.ceil(min);
            maxint= Math.ceil(max);
            return Math.floor(Math.random()*(maxint - minint) + minint);
        }
        

        boton.addEventListener("click", (e) => {
            tirarDados();
      
        });
    






//fin class