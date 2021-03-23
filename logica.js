function Enviar (){
    
    let Ciudad = document.getElementById('ciudad').value;
    let Habitantes = document.getElementById('habitantes').value;
    let Continente = document.getElementById('continente').value;
    
    let td1 = document.createElement('td');
    td1.textContent = Ciudad;
    let td2 = document.createElement('td');
    td2.textContent = Habitantes;
    let td3 = document.createElement('td');
    td3.textContent = Continente;

    let Tr = document.createElement('tr');

    Tr.appendChild(td1);
    Tr.appendChild(td2);
    Tr.appendChild(td3);

    let TablaPresentacion = document.getElementById('cabecera');
    TablaPresentacion.appendChild(Tr);

    
    alert('Agregado con Exito');

}

function Borrar() {

    alert("usted esta apunto de borrar los últimos Registros")

    let varBorrar = document.getElementById('row')
    row.remove ();

}