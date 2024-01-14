// Elementos del DOM
const proAlquilerObj =document.getElementById("proAlquiler")

const propiedades_Alquiler=[
    {
        nombre:'Propiedades en Arriendo',
        src:'https://http2.mlstatic.com/D_NQ_NP_652027-MLC73885375064_012024-O.webp',
        descripcion:'Apartamento de lujo en zona exclusiva',
        ubicacion:'Este apartamento de lujo está ubicado en una exclusiva zona residencial ',
        habitaciones:4,
        baños:1,
        costo:7400,
        smoke:true,
        pets:true,

    },
    {
        nombre:'Condominio Las Loicas',
        src:'https://http2.mlstatic.com/D_NQ_NP_805336-MLC73885765686_012024-O.webp',
        descripcion:'Condominio Las Loicas está ubicado cerca del Colegio Pumahue de Chicureo',
        ubicacion:'Santa Elena de Chicureo',
        habitaciones:3,
        baños:1,
        costo:8516,
        smoke:true,
        pets:false,

    },
    {
        nombre:'Condominio lo Barnechea',
        src:'https://http2.mlstatic.com/D_NQ_NP_861479-MLC73198920466_122023-O.webp',
        descripcion:'Condominio Las Loicas está ubicado cerca del Colegio Pumahue de Chicureo',
        ubicacion:'Santa Elena de Chicureo',
        habitaciones:3,
        baños:1,
        costo:8516,
        smoke:false,
        pets:false,

    },
    {
        nombre:'Condominio Las Loicas',
        src:'https://http2.mlstatic.com/D_NQ_NP_643566-MLC73968892989_012024-O.webp',
        descripcion:'Condominio Las Loicas está ubicado cerca del Colegio Pumahue de Chicureo',
        ubicacion:'Santa Elena de Chicureo',
        habitaciones:3,
        baños:1,
        costo:8516,
        smoke:false,
        pets:true,

    },
    
]


propiedades_Alquiler.forEach((val) => {
    
if (val.smoke==true && val.pets== true){
    proAlquilerObj.innerHTML +=       
`     
<div class="col-md-4 mb-4">
    <div class="card">
    <img
        src="${val.src}"
        class="card-img-top"
        alt="Imagen del departamento"
    />
    <div class="card-body">
        <h5 class="card-title">${val.nombre}</h5>
        <p class="card-text">
        ${val.descripcion}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i>${val.ubicacion}
        </p>
        <p>
        <i class="fas fa-bed"></i><spam> ${val.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i><spam> ${val.baños} Baños</spam> 
        </p>
        <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
        <p class="text-success">
        <i class="fas fa-smoking"></i><span> Permitido fumar</span> 
        </p>
        <p class="text-success">
        <i class="fas fa-paw"></i><span> Mascotas permitidas</span>  
        </p>
    </div>
    </div>
</div>
`
}else if(val.smoke==true && val.pets== false){
    proAlquilerObj.innerHTML +=
    `     
<div class="col-md-4 mb-4">
    <div class="card">
    <img
        src="${val.src}"
        class="card-img-top"
        alt="Imagen del departamento"
    />
    <div class="card-body">
        <h5 class="card-title">${val.nombre}</h5>
        <p class="card-text">
        ${val.descripcion}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i>${val.ubicacion}
        </p>
        <p>
        <i class="fas fa-bed"></i><spam> ${val.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i><spam> ${val.baños} Baños</spam> 
        </p>
        <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
        <p class="text-success">
        <i class="fas fa-smoking"></i><spam> Permitido Fumar </spam> 
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i><spam> No se permiten Mascotas </spam>
        </p>
    </div>
    </div>
</div>
`
}else if(val.smoke==false && val.pets== false){
    proAlquilerObj.innerHTML +=
    `     
<div class="col-md-4 mb-4">
    <div class="card">
    <img
        src="${val.src}"
        class="card-img-top"
        alt="Imagen del departamento"
    />
    <div class="card-body">
        <h5 class="card-title">${val.nombre}</h5>
        <p class="card-text">
        ${val.descripcion}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i>${val.ubicacion}
        </p>
        <p>
        <i class="fas fa-bed"></i><spam> ${val.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i><spam> ${val.baños} Baños</spam> 
        </p>
        <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
        <p class="text-danger">
        <i class="fas fa-ban"></i> <spam> No se permite fumar</spam>  
        </p>
        <p class="text-danger">
        <i class="fas fa-ban"></i><spam> No se permiten Mascotas</spam>  
        </p>
    </div>
    </div>
</div>
`
}else if(val.smoke==false && val.pets== true){
    proAlquilerObj.innerHTML +=
    `     
<div class="col-md-4 mb-4">
    <div class="card">
    <img
        src="${val.src}"
        class="card-img-top"
        alt="Imagen del departamento"
    />
    <div class="card-body">
        <h5 class="card-title">${val.nombre}</h5>
        <p class="card-text">
        ${val.descripcion}
        </p>
        <p>
        <i class="fas fa-map-marker-alt"></i>${val.ubicacion}
        </p>
        <p>
        <i class="fas fa-bed"></i><spam> ${val.habitaciones} Habitaciones |
        <i class="fas fa-bath"></i><spam> ${val.baños} Baños</spam> 
        </p>
        <p><i class="fas fa-dollar-sign"></i>${val.costo}</p>
        <p class="text-danger">
        <i class="fas fa-ban"></i><spam> No se permite fumar</spam> 
        </p>
        <p class="text-success">
        <i class="fas fa-paw"></i><span> Mascotas permitidas</spam>
        </p>
    </div>
    </div>
</div>
`
}
});