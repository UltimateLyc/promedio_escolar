/** 
 * 
 * 
 * 
 * */
let getCantidadAlumnos;
let getNotasPorAlumno;

//Variables Globales de "function encabezado()"
let getColums = document.getElementById('columns');
let average = document.getElementById('average');

//Variables Visibles table
let tableControl;

//Variables Globales de "createRows()"
let rows = document.getElementById('rows')
let alumnosHijo;
let alumnosPadre;
let inputElement;
let idInput;
let idPromedio;
let idNumber;
let typeText;

function getPlantilla()//Se ejecuta la funcion cuando se preciona el boton
{
    getCantidadAlumnos = Number(document.getElementById('cantidadAlumnos').value); // Almacenamos la cantidad de alumnos
    

    getNotasPorAlumno = Number(document.getElementById('notasPorAlumno').value); //Almacenamos la cantidad de notas
    
    //crear el encabezado
    visibleTable();
    encabezado();
    createRows();

}

function visibleTable()
{
    tableControl = document.getElementById('main_container')

    tableControl.classList.remove('invisible');
    tableControl.classList.add('visible');
}


function encabezado()
{
    for(let i = 0; i < getNotasPorAlumno; i++)
    {
        let notas = document.createElement('th');//Creamos la etiqueta "th" en la variable notas
        notas.textContent = `Nota ${i+1}`;  //A la etiqueta "th" le escribimos <th>Notas #</th>
        getColums.insertBefore(notas,average); //Insertamos notas antes del id="average" 

    } 
}

function createRows()
{

    let aux = 3 + getNotasPorAlumno; //Para saber la posicion del promedio 
    

    for(let i = 1; i <= getCantidadAlumnos; i++ ) //Creamos las filas
    {
        
        alumnosPadre = document.createElement('tr'); 
        let idContainerTR = document.createAttribute('id');
        idContainerTR.value = `columns${i}`;
        alumnosPadre.setAttributeNode(idContainerTR);
        rows.appendChild(alumnosPadre);
        /* Creamos la etiqueta dentro de:
        <tbody>
            <tr> </tr>
        </tbody>
        */

        for(let j = 1; j <= aux; j++) //creamos las columnas 
        {
            alumnosHijo = document.createElement('td');/*Creamos la etiqueta 
            <tbody>
                <tr> 
                    <td> </td>
                </tr>
            </tbody>
            */
            alumnosPadre.appendChild(alumnosHijo);  
            if(j === 1)
            {
                idNumber = document.createAttribute('id'); //id=""
                idNumber.value =`number`;//id="number"
                alumnosHijo.setAttributeNode(idNumber);//<td id="number"></td>
                alumnosHijo.textContent = `${i}`;//<td id="number">#i</td> 
                /* 
                <tbody>
                    <tr> 
                        <td id = "number"> #i </td>
                    </tr>
                </tbody>
                */
                
            }
            else if (j === (aux))
            {
                idPromedio = document.createAttribute('id');
                idPromedio.value =`promedio${i}`;
                alumnosHijo.setAttributeNode(idPromedio);
                /* 
                <tbody>
                    <tr> 
                        <td id = "number"> #i </td>
                        .
                        .
                        .
                        <td id = "promedio(i)"> #i </td>
                    </tr>
                </tbody>
                */
            }
            else if (j === 2)
            {
                student();   
            }
            else
            {
                
                inputElement = document.createElement('input');
                
                typeText = document.createAttribute('type')
                typeText.value =`number` /* `number` */;
                inputElement.setAttributeNode(typeText);

                idInput = document.createAttribute('class');
                idInput.value = `input${j-2}${i}`; // se crea la clase de esta manera para que cada valor pueda ser identificado como unico y al leerlo podelor sumarlo como un array [][] de dos posiciones
                inputElement.setAttributeNode (idInput);

                alumnosHijo.appendChild(inputElement);
            }
        }
    }
}

function student()
{
    let inputStudent;
    let idStudent;
    
    inputStudent = document.createElement('input');//Creamos etiqueta <input>

    typeText = document.createAttribute('type')
    typeText.value = `text`;
    inputStudent.setAttributeNode(typeText);

    idStudent = document.createAttribute('id');
    idStudent.value = `student`;
    inputStudent.setAttributeNode(idStudent);

    alumnosHijo.appendChild(inputStudent);
}



function getTotalAverage()
{
    let contenedorNotas;
    let auxiliar = 0;
    let escribirPromedio;

    let test = 0;
    let test2;
    

    for (let i = 1; i <= getCantidadAlumnos; i++) 
    {
        auxiliar=0;
        for (let j = 1; j <= getNotasPorAlumno; j++) 
        {
            contenedorNotas = Number(document.querySelector(`.input${j}${i}`).value)
            auxiliar += contenedorNotas;
        }

        escribirPromedio = document.getElementById(`promedio${i}`).innerHTML = auxiliar/getNotasPorAlumno;
        
        test += escribirPromedio;
        
        escribirPromedio = 0;
        
    }
    //alert(test);
    //alert(test/getCantidadAlumnos)
    test2 = document.getElementById('generalAverage').innerHTML = `Promedio general: ${test/getCantidadAlumnos}`;

}

