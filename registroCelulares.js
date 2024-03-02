let celularesTodos = [];

function envioFormulario(event) {
    event.preventDefault();
    
    const precio = document.getElementById('precio').value;
    const marca = document.getElementById('marca').value;
    const garantia = document.getElementById('garantia').checked;
    const color = document.getElementById('color').value;
    const almacenamiento = document.getElementById('almacenamiento').value;
    const camaraFrontal = document.getElementById('camaraFrontal'). checked; 
    const resolucionCamaraFrontal = document.getElementById('resolucion').value;

const nuevoCelular =
  {
     marca : marca,
     precio:precio,
     garantia:garantia,
      color:color,
     almacenamiento:almacenamiento,
     camaraFrontal:camaraFrontal,
     resolucionCamaraFrontal:resolucionCamaraFrontal,
  }
  celularesTodos.push(nuevoCelular);

  document.getElementById('marca').value = '' ;
  document.getElementById('precio').value = '' ;
  document.getElementById('garantia').checked = false ;
  document.getElementById('color').selectIndex = 0 ;
  document.getElementById('almacenamiento').value = '' ;
  document.getElementById('camaraFrontal').value = '' ;
  document.getElementById('resolucion').value = '' ;
  //mostramos el array de celulares
  console.table(celularesTodos)
 }

 document.getElementById('formulariodeingreso').addEventListener('submit',envioFormulario);


  