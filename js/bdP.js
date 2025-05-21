function datos(){
    // Crear un array de objetos: usuarios----------------------------------------------
    var usuarios = [
        { idusuario: 1, cedula: "123456", nombre: "Sergio Aquino", celular: "0976-578656", usuario: "Dani", contrasena: "Dani123", rol:"Administrador"},
        { idusuario: 2, cedula: "223344", nombre: "Alvaro Ortega", celular: "0971-901780", usuario: "Alv34", contrasena: "Alvaro7", rol:"Administrador" },
        { idusuario: 3, cedula: "556677", nombre: "Thaiel Duarte", celular: "0974-679430", usuario: "Thanos", contrasena: "12345", rol:"Cajero" },
        { idusuario: 4, cedula: "980765", nombre: "Paola Oviedo", celular: "0972-228032", usuario: "Pao", contrasena: "Pao33", rol:"Cajero" },
        { idusuario: 5, cedula: "789587", nombre: "Alan Armoa", celular: "0982-423022", usuario: "Haland", contrasena: "WWW123", rol:"Administrador" },
        { idusuario: 6, cedula: "325485", nombre: "Aron Smith", celular: "0986-768544", usuario: "Smith", contrasena: "Aron666", rol:"Administrador" },
        { idusuario: 7, cedula: "758487", nombre: "Esterlvina Oviedo", celular: "0973-446472", usuario: "Ester", contrasena: "Ester99", rol:"Cajero" },
        { idusuario: 8, cedula: "658958", nombre: "Elon Musk", celular: "0974-236522", usuario: "Elones", contrasena: "Musk44", rol:"Administrador" },
        { idusuario: 9, cedula: "145574", nombre: "Homero Ramon", celular: "0975-987655", usuario: "Homer", contrasena: "Homero39", rol:"Cajaero" },
        { idusuario: 10, cedula: "478592", nombre: "Amy Lee", celular: "0973-564321", usuario: "Amy", contrasena: "Amy22", rol:"Cajero"},
    ];
    // Guardar en localStorage como cadena JSON
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    //---------------------------------------------------------------------------------
   //----crear proveedores-----------------------------------------------------------------------------
   var proveedores = [
    { idproveedor: 1, nombre: "Horacio Cartes SA", direccion: "AV Boqueron c/ Cerro Porteño", celular: "0971-123456" },
    { idproveedor: 2, nombre: "Josefina SA", direccion: "AV Boqueron c/ Cerro Porteño", celular: "0971-001100" },
    { idproveedor: 3, nombre: "Distribuidora López", direccion: "Calle Palma 123", celular: "0981-654321" },
    { idproveedor: 4, nombre: "Comercial Martínez", direccion: "AV Mariscal López 456", celular: "0972-987654" },
    { idproveedor: 5, nombre: "Importadora Fernández", direccion: "AV España 789", celular: "0982-123987" },
    { idproveedor: 6, nombre: "Electrodomésticos Ramírez", direccion: "Calle San Martín 321", celular: "0974-321654" },
    { idproveedor: 7, nombre: "Agropecuaria Torres", direccion: "Ruta 2 KM 50", celular: "0983-789123" },
    { idproveedor: 8, nombre: "Construcciones Vera", direccion: "AV Artigas 654", celular: "0975-654987" },
    { idproveedor: 9, nombre: "Farmacia Acosta", direccion: "Calle Independencia 987", celular: "0984-987321" },
    { idproveedor: 10, nombre: "Supermercado González", direccion: "AV Eusebio Ayala 1234", celular: "0976-123654" }
];
localStorage.setItem("proveedores", JSON.stringify(proveedores));  
//----crear clientes-----------------------------------------------------------------------------


var clientes = [
    { idcliente: 1, ciruc: "5674778", nombre: "Ana", apellido: "De Armas", direccion: "Cuba", celular: "0971-123456" },
    { idcliente: 2, ciruc: "1234567", nombre: "Juan", apellido: "Pérez", direccion: "Asunción", celular: "0981-654321" },
    { idcliente: 3, ciruc: "7654321", nombre: "María", apellido: "Gómez", direccion: "Luque", celular: "0972-987654" },
    { idcliente: 4, ciruc: "2345678", nombre: "Carlos", apellido: "López", direccion: "San Lorenzo", celular: "0973-456789" },
    { idcliente: 5, ciruc: "8765432", nombre: "Lucía", apellido: "Fernández", direccion: "Fernando de la Mora", celular: "0982-123987" },
    { idcliente: 6, ciruc: "3456789", nombre: "Pedro", apellido: "Martínez", direccion: "Capiatá", celular: "0974-321654" },
    { idcliente: 7, ciruc: "9876543", nombre: "Sofía", apellido: "Ramírez", direccion: "Lambaré", celular: "0983-789123" },
    { idcliente: 8, ciruc: "4567890", nombre: "Diego", apellido: "Torres", direccion: "Ñemby", celular: "0975-654987" },
    { idcliente: 9, ciruc: "0987654", nombre: "Valeria", apellido: "Vera", direccion: "Villa Elisa", celular: "0984-987321" },
    { idcliente: 10, ciruc: "5678901", nombre: "Jorge", apellido: "Acosta", direccion: "Itauguá", celular: "0976-123654" }
];
localStorage.setItem("clientes", JSON.stringify(clientes));

//----crear bancos-----------------------------------------------------------------------------
var bancos = [
    { idbanco: 1, nombre: "Banco Itaú", telefono: "021-2485000", direccion: "Avda. España 1234" },
    { idbanco: 2, nombre: "Banco Continental", telefono: "021-4146000", direccion: "Avda. Mariscal López 5678" },
    { idbanco: 3, nombre: "Banco Nacional de Fomento", telefono: "021-4198000", direccion: "Calle Palma 345" },
    { idbanco: 4, nombre: "Ueno Bank", telefono: "021-6189000", direccion: "Avda. Artigas 789" },
    { idbanco: 5, nombre: "Banco Familiar", telefono: "021-6187000", direccion: "Avda. San Martín 456" },
    { idbanco: 6, nombre: "Banco GNB", telefono: "021-2494000", direccion: "Avda. República 123" },
    { idbanco: 7, nombre: "Banco BBVA", telefono: "021-6188000", direccion: "Avda. Eusebio Ayala 654" },
    { idbanco: 8, nombre: "Banco Sudameris", telefono: "021-2486000", direccion: "Calle Independencia 987" },
    { idbanco: 9, nombre: "Banco BASA", telefono: "021-6185000", direccion: "Avda. Boquerón 321" },
    { idbanco: 10, nombre: "Banco Vision", telefono: "021-2487000", direccion: "Avda. Defensores del Chaco 852" }
];
localStorage.setItem("bancos", JSON.stringify(bancos));



//----crear pagos a proveedores-----------------------------------------------------------------------------
var pagosProveedores = [
    { idpago: 1, idproveedor: 1, monto: 1500000, fecha: "2025-05-01", metodo: "Transferencia Bancaria", banco: "Banco Itaú", motivo: "Compra de materiales" },
    { idpago: 2, idproveedor: 2, monto: 2500000, fecha: "2025-05-02", metodo: "Cheque", banco: "Banco Continental", motivo: "Pago de servicios" },
    { idpago: 3, idproveedor: 3, monto: 1000000, fecha: "2025-05-03", metodo: "Efectivo", banco: null, motivo: "Adquisición de productos" },
    { idpago: 4, idproveedor: 4, monto: 3000000, fecha: "2025-05-04", metodo: "Transferencia Bancaria", banco: "Banco Nacional de Fomento", motivo: "Pago de deuda" },
    { idpago: 5, idproveedor: 5, monto: 2000000, fecha: "2025-05-05", metodo: "Cheque", banco: "Banco Familiar", motivo: "Compra de insumos" },
    { idpago: 6, idproveedor: 6, monto: 1800000, fecha: "2025-05-06", metodo: "Transferencia Bancaria", banco: "Banco GNB", motivo: "Pago de alquiler" },
    { idpago: 7, idproveedor: 7, monto: 2200000, fecha: "2025-05-07", metodo: "Efectivo", banco: null, motivo: "Pago de transporte" },
    { idpago: 8, idproveedor: 8, monto: 2700000, fecha: "2025-05-08", metodo: "Transferencia Bancaria", banco: "Banco BBVA", motivo: "Compra de herramientas" },
    { idpago: 9, idproveedor: 9, monto: 3200000, fecha: "2025-05-09", metodo: "Cheque", banco: "Banco Sudameris", motivo: "Pago de mantenimiento" },
    { idpago: 10, idproveedor: 10, monto: 1500000, fecha: "2025-05-10", metodo: "Transferencia Bancaria", banco: "Banco Vision", motivo: "Adquisición de equipos" }
];

// Guardar en localStorage
localStorage.setItem("pagosProveedores", JSON.stringify(pagosProveedores));

// Crear un array de objetos: compras----------------------------------------------
var compras = [
    { idcompra: 1, FechaCompra: "12/09/2023", producto: "Gaseosa", proveedor: "Fanta", unidades: "40", PrecioUnit: "12000", MontoTot:"480000" },
    { idcompra: 2, FechaCompra: "10/04/2024", producto: "Leche", proveedor: "Trébol", unidades: "35", PrecioUnit: "8000", MontoTot:"280000" },
    { idcompra: 3, FechaCompra: "07/08/2022", producto: "Servilleta", proveedor: "Anita", unidades: "29", PrecioUnit: "2000", MontoTot:"58000" },
    { idcompra: 4, FechaCompra: "22/03/2021", producto: "Gelatina", proveedor: "Gelnex", unidades: "60", PrecioUnit: "17000", MontoTot:"1020000" },
    { idcompra: 5, FechaCompra: "20/03/2019", producto: "Fideos", proveedor: "Anita", unidades: "56", PrecioUnit: "24000", MontoTot:"1344000" },
    { idcompra: 6, FechaCompra: "11/02/2019", producto: "Leche Light", proveedor: "Trébol", unidades: "30", PrecioUnit: "8000", MontoTot:"240000" },
    { idcompra: 7, FechaCompra: "15/01/2020", producto: "Jugo", proveedor: "Frugos", unidades: "43", PrecioUnit: "12000", MontoTot:"516000" },
    { idcompra: 8, FechaCompra: "25/11/2015", producto: "Tomate", proveedor: "externo", unidades: "80", PrecioUnit: "5000", MontoTot:"400000" },
    { idcompra: 9, FechaCompra: "03/10/2017", producto: "Cebolla", proveedor: "externo", unidades: "88", PrecioUnit: "7000", MontoTot:"616000" },
    { idcompra: 10, FechaCompra: "06/06/2022", producto: "Locote", proveedor: "externo", unidades: "90", PrecioUnit: "10000", MontoTot:"900000" },
];
// Guardar en localStorage
localStorage.setItem("compras", JSON.stringify(compras));
//---------------------------------------------------------------------------------

}