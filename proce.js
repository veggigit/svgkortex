class svgProce {

    domResultados;
    domSVGloaded;
    // dom para cargar data. Plz usar ids
    constructor(domMainID){
        this.domMain = document.getElementById(domMainID);
        this.mount();
    }

    svgRead (file)
    {
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = ()=> {
            this.domSVGloaded.innerHTML = reader.result;
            // var paths = document.getElementsByTagName('path');
            // var circles = document.getElementsByTagName('circle');
            // var rects = document.getElementsByTagName('rect');
            // var ellipses = document.getElementsByTagName('ellipse');
            // var lines = document.getElementsByTagName('line');
            // var polygons = document.getElementsByTagName('polygon');
            this.svgCirclesHandle();
        };

        reader.onerror = () => {
            console.log(reader.error);
          };
    }

    svgCirclesHandle(){
        let circles = document.getElementsByTagName('circle');
        let getcircunferencia = r => 2 * 3.14 * r;

        if(circles.length != 0)
        {
            // obj
            let sheetCircles = new Object();
            sheetCircles.qty = circles.length;
            sheetCircles.long = 0;
            // dom
            var domCircSheet = document.createElement('div');
            domCircSheet.setAttribute('class', 'circ-sheet');
        
            let arrCircles = Array.from(circles);
            arrCircles.map(function(e){
                let r = e.getAttribute('r');
                sheetCircles.long+=getcircunferencia(r);
            });

            this.domResultados.appendChild(domCircSheet);
            domCircSheet.innerHTML = '<h3>Info circulos</h3><ul><li>Cantidad: '+sheetCircles.qty+'</li><li>Total lineal: '+sheetCircles.long+'</li></ul>';
        }
        else
        {
            console.log('svg no tiene circles');
        }

    }

    mount(){
        if(this.domMain.length != 0)
        {
            console.log('dom encontrado. Montando');
            this.domMain.innerHTML = "<div id='resultado'></div><div id='svgloaded'></div>";
            this.domResultados = document.getElementById('resultado');
            this.domSVGloaded = document.getElementById('svgloaded');
        }
        else
        {
            console.log('no se pudo montar');
        }
    }


}

var svgproce = new svgProce('wrap');