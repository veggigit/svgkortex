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
            // var ellipses = document.getElementsByTagName('ellipse');
            // var lines = document.getElementsByTagName('line');
            // var polygons = document.getElementsByTagName('polygon');
            this.svgRectsHandle();
            this.svgCirclesHandle();
            this.svgPathHandle();
        };

        reader.onerror = () => {
            console.log(reader.error);
        };
    }

    svgPolygonHandle() {
        let polygonElements = document.getElementsByTagName('polygon');
        // let getPerímetro = (w,h) => (2*w)+(2*h);

        if (polygonElements.length != 0) {
            // Obj
            let sheetPolygons = new Object();
            sheetPolygons.qty = polygonElements.length;
            sheetPolygons.long = 0;
            // New dom
            var domPolygonSheet = document.createElement('div');
            domPolygonSheet.setAttribute('class', 'polygon-sheet');
            // Proce data
            let arrPolygons = Array.from(polygonElements);
            arrPolygons.map(function (e) {

            });
            // Expose data
            this.domResultados.appendChild(domPolygonSheet);
            domPolygonSheet.innerHTML = '<h3>Info poligonos</h3><ul><li>Cantidad: ' + sheetPolygons.qty + '</li><li>Total lineal (perímetro): ' + sheetPolygons.long + '</li></ul>';
        }
        else {
            console.log('svg no tiene poligons');
        }
    }

    svgRectsHandle() {
        let rectElements = document.getElementsByTagName('rect');
        let getPerímetro = (w,h) => (2*w)+(2*h);

        if (rectElements.length != 0) {
            // Obj
            let sheetRects = new Object();
            sheetRects.qty = rectElements.length;
            sheetRects.long = 0;
            // New dom
            var domRectSheet = document.createElement('div');
            domRectSheet.setAttribute('class', 'rect-sheet');
            // Proce data
            let arrRects = Array.from(rectElements);
            arrRects.map(function (e) {
                let w = e.getAttribute('width');
                let h = e.getAttribute('height');
                sheetRects.long += getPerímetro(w,h);
            });
            // Expose data
            this.domResultados.appendChild(domRectSheet);
            domRectSheet.innerHTML = '<h3>Info rectangulos</h3><ul><li>Cantidad: ' + sheetRects.qty + '</li><li>Total lineal (perímetro): ' + sheetRects.long + '</li></ul>';
        }
        else {
            console.log('svg no tiene rects');
        }
    }

    svgPathHandle() {
        let pathElements = document.getElementsByTagName('path');

        if (pathElements.length != 0) {
            // Obj
            let sheetPaths = new Object();
            sheetPaths.qty = pathElements.length;
            sheetPaths.long = 0;
            // New dom
            var domPathSheet = document.createElement('div');
            domPathSheet.setAttribute('class', 'path-sheet');
            // Proce data
            let arrPaths = Array.from(pathElements);
            arrPaths.map(function (path) {
                sheetPaths.long += path.getTotalLength();
            });
            // Expose data
            this.domResultados.appendChild(domPathSheet);
            domPathSheet.innerHTML = '<h3>Info paths</h3><ul><li>Cantidad: ' + sheetPaths.qty + '</li><li>Total lineal (perímetro): ' + sheetPaths.long + '</li></ul>';
        } else {
            console.log('svg no tiene paths');
        }


    }

    svgCirclesHandle() {
        let circleElements = document.getElementsByTagName('circle');
        let getcircunferencia = r => 2 * Math.PI * r;

        if (circleElements.length != 0) {
            // Obj
            let sheetCircles = new Object();
            sheetCircles.qty = circleElements.length;
            sheetCircles.long = 0;
            // New dom
            var domCircSheet = document.createElement('div');
            domCircSheet.setAttribute('class', 'circ-sheet');
            // Proce data
            let arrCircles = Array.from(circleElements);
            arrCircles.map(function (e) {
                let r = e.getAttribute('r');
                sheetCircles.long += getcircunferencia(r);
            });
            // Expose data
            this.domResultados.appendChild(domCircSheet);
            domCircSheet.innerHTML = '<h3>Info circulos</h3><ul><li>Cantidad: ' + sheetCircles.qty + '</li><li>Total lineal (perímetro): ' + sheetCircles.long + '</li></ul>';
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