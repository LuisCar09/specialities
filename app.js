// ## Ejercicio de Express - Listado de Usuarios por Especialidad

// Este ejercicio tiene como objetivo practicar el uso de Express para crear un servidor web que gestiona y muestra información de usuarios en diferentes rutas. Utilizaremos un conjunto de datos en formato JSON que representa usuarios con diversas características, como nombre, edad y especialidad.

// Lee el ejercicio completamente antes de empezar para poder entenderlo.

// Una vez clonado el ejercico deberás hacer `npm install` en terminal para instalar las dependencias que están en `package.json`  LISTO

// ## Objetivo del Ejercicio

// 1. Ejecución del Ejercicio:
//   - Crea un archivo llamado `app.js` donde irá tu código. LISTO

// 2. Creación del Servidor:
//   - Configura un servidor Express. //LISTO
//   - Crea rutas para la página principal (/) y diferentes especialidades como marketing (/marketing), developers (/developers), etc... listo
//   - Implementa el manejo de errores 404 para rutas no definidas. //listo
//   - Las rutas serán las mismas de las `specialty` (abajo hay un objeto con datos que usarás para crear lo qiue pide el ejercicio) liso

// 3. Filtrado de Usuarios por Especialidad:
//   - Crea una función para filtrar usuarios por su especialidad. //listo

// 4. Generación de Páginas HTML:
//   - Utiliza literal string para construir páginas HTML directamente en el código.. listo
//   - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario. listo

// 5. Prueba de la Aplicación:
//   - Abre tu navegador y visita las diferentes rutas, por ejemplo:
// http://localhost:3000/marketing listo
// http://localhost:3000/developers listo

//   - Intenta acceder a una ruta no definida para verificar el manejo de errores 404. listo
//   - En la ruta "/" puedes crear una navegación que vaya a cada una de las páginas y en cada página puedes repetir esa navegación o solo un volver a home "/". listo

// Estos serán los usuarios a los que hay que acceder y en cada una de las páginas solo saldrán los que tengas las mismas especialidades:
// * Conjunto de Datos de Usuarios

const express = require('express')
const app = express()
const port = 3000

const filteredBySpeciality = (specialty) => {
    return usersData.filter(user => user.specialty.toLowerCase() === specialty)
}

app.get('/',(req,res) =>{
    console.log(req);
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/qas">Qa's</a>
        </nav>
    </header>
    <h1>Titulo para una super pagina</h1> 
    <h2>Subtitulo de la paginita</h2>
    
    `
    res.send(template)
})
app.get('/marketing',(req,res) =>{
    const path = req.url.split('/').join('')
    const specialtyData = filteredBySpeciality(path)
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/qas">Qa's</a>
        </nav>
    </header>
    <h1><h1>${path.toUpperCase()}</h1></h1> 
    <h2>Number of people: ${specialtyData.length}</h2>
    
    `
    let datatemplate = specialtyData.map(user => {
        const {id,name,age,specialty} = user
        return `<div>
                    <p>ID: ${id}</p>
                    <p>Name: ${name}</p>
                    <p>Age: ${age}</p>
                    <p>Speciality: ${specialty}</p>
                </div>`
    }).join('')
    
    res.send(`${template} ${datatemplate}`)
})

app.get('/developers',(req,res) =>{
    const path = req.url.split('/').join('')
    const specialtyData = filteredBySpeciality(path)
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/qas">Qa's</a>
        </nav>
    </header>
    <h1><h1>${path.toUpperCase()}</h1></h1> 
    <h2>Number of people: ${specialtyData.length}</h2>
    
    `
    let datatemplate = specialtyData.map(user => {
        const {id,name,age,specialty} = user
        return `<div>
                    <p>ID: ${id}</p>
                    <p>Name: ${name}</p>
                    <p>Age: ${age}</p>
                    <p>Speciality: ${specialty}</p>
                </div>`
    }).join('')
    
    res.send(`${template} ${datatemplate}`)
})
app.get('/ventas',(req,res) =>{
    const path = req.url.split('/').join('')
    const specialtyData = filteredBySpeciality(path)
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/qas">Qa's</a>
        </nav>
    </header>
    <h1><h1>${path.toUpperCase()}</h1></h1> 
    <h2>Number of people: ${specialtyData.length}</h2>
    
    `
    let datatemplate = specialtyData.map(user => {
        const {id,name,age,specialty} = user
        return `<div>
                    <p>ID: ${id}</p>
                    <p>Name: ${name}</p>
                    <p>Age: ${age}</p>
                    <p>Speciality: ${specialty}</p>
                </div>`
    }).join('')
    
    res.send(`${template} ${datatemplate}`)
})
app.get('/qas',(req,res) =>{
    const path = req.url.split('/').join('')
    const specialtyData = filteredBySpeciality(path)
    const template = `
    <header>
        <nav>
            <a href="/developers">Developers</a>
            <a href="/marketing">Marketing</a>
            <a href="/ventas">Ventas</a>
            <a href="/qas">Qa's</a>
        </nav>
    </header>
    <h1><h1>${path.toUpperCase()}</h1></h1> 
    <h2>Number of people: ${specialtyData.length}</h2>
    
    `
    let datatemplate = specialtyData.map(user => {
        const {id,name,age,specialty} = user
        return `<div>
                    <p>ID: ${id}</p>
                    <p>Name: ${name}</p>
                    <p>Age: ${age}</p>
                    <p>Speciality: ${specialty}</p>
                </div>`
    }).join('')
    
    res.send(`${template} ${datatemplate}`)
})
app.use((req,res) => {
    res.status(404).send('<h1>Page not found</h1> ')
})

app.listen(port,(req,res)=>{
    console.log(`Server listening on port ${port}`);
    
})

const usersData = [
    { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
    { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
    { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
    { id: 4, name: 'David', age: 25, specialty: 'QAs' },
    { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
    { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
    { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
    { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
    { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
    { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
    { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
    { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
    { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
    { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
    { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
    { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
    { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
    { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
    { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
    { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
    { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
    { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
    { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
    { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
    { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
    { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
    { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
    { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
    { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
    { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
  ];