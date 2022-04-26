class svgProce {

    domResultados;
    domSVGloaded;
    // dom para cargar data. Plz usar ids
    constructor(domMainID) {
        this.domMain = document.getElementById(domMainID);
        this.mount();
    }

    svgRead(file) {
        let reader = new FileReader();

        reader.readAsText(file);

        reader.onload = () => {
            this.domSVGloaded.innerHTML = reader.result;
            // var paths = document.getElementsByTagName('path');
            // var circles = document.getElementsByTagName('circle');
            // var rects = document.getElementsByTagName('rect');
            // var ellipses = document.getElementsByTagName('ellipse');
            // var lines = document.getElementsByTagName('line');
            // var polygons = document.getElementsByTagName('polygon');
            this.svgCirclesHandle();
            this.svgPathHandle();
        };

        reader.onerror = () => {
            console.log(reader.error);
        };
    }

    svgPathHandle() {
        let pathElements = document.getElementsByTagName('path');

        if (pathElements.length != 0) {
            //objt
            let sheetPaths = new Object();
            sheetPaths.qty = pathElements.length;
            sheetPaths.long = 0;
            // dom
            var domPathSheet = document.createElement('div');
            domPathSheet.setAttribute('class', 'path-sheet');
            // proce
            let arrPaths = Array.from(pathElements);
            arrPaths.map(function (path) {
                sheetPaths.long += path.getTotalLength();
            });
            //show data
            this.domResultados.appendChild(domPathSheet);
            domPathSheet.innerHTML = '<h3>Info paths</h3><ul><li>Cantidad: ' + sheetPaths.qty + '</li><li>Total lineal: ' + sheetPaths.long + '</li></ul>';
        } else {
            console.log('svg no tiene paths');
        }


    }

    svgCirclesHandle() {
        let circleElements = document.getElementsByTagName('circle');
        let getcircunferencia = r => 2 * 3.14 * r;

        if (circleElements.length != 0) {
            // obj
            let sheetCircles = new Object();
            sheetCircles.qty = circleElements.length;
            sheetCircles.long = 0;
            // dom
            var domCircSheet = document.createElement('div');
            domCircSheet.setAttribute('class', 'circ-sheet');
            // proce
            let arrCircles = Array.from(circleElements);
            arrCircles.map(function (e) {
                let r = e.getAttribute('r');
                sheetCircles.long += getcircunferencia(r);
            });
            // show data
            this.domResultados.appendChild(domCircSheet);
            domCircSheet.innerHTML = '<h3>Info circulos</h3><ul><li>Cantidad: ' + sheetCircles.qty + '</li><li>Total lineal: ' + sheetCircles.long + '</li></ul>';
        }
        else {
            console.log('svg no tiene circles');
        }
    }

    mount() {
        if (this.domMain.length != 0) {
            console.log('dom encontrado. Montando');
            this.domMain.innerHTML = "<div id='resultado'></div><div id='svgloaded'></div>";
            this.domResultados = document.getElementById('resultado');
            this.domSVGloaded = document.getElementById('svgloaded');
        }
        else {
            console.log('no se pudo montar');
        }
    }


}

var svgproce = new svgProce('wrap');