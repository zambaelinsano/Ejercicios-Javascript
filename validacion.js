function validar(form) {
    // validar nombre
    let Cap = form.Cap.value.trim();
    let Tiem = form.Tiem.value.trim();
   

    // validar datos
    if (Cap === "" || isNaN(Cap) || Cap <= 0) {
        alert("Ingrese un valor valido");
        return false;
    }
    if (Tiem === "" || isNaN(Tiem) || Tiem <= 0) {
        alert("Mes inválido");
        return false;
    }
    if (Tiem > 12) {
        alert("Mes inválido");
        return false;
    }

    // Ecuación
    let interes = Cap * Tiem * 0.02;
    alert("Tu interés es de: " + interes);
}
function validar2(form) {
    // Problema 2:    
 let Ven1 = parseFloat(form.Ven1.value.trim());
    let Ven2 = parseFloat(form.Ven2.value.trim());
    let Ven3 = parseFloat(form.Ven3.value.trim());
    let Sal= parseFloat(form.Sal.value.trim());
    // Validación de ventas
    if (Ven1 === "" || isNaN(Ven1) || Ven1 <= 0) {
        alert("Por favor, ingresar un valor válido en Venta 1");
        return false;
    }
    if (Ven2 === "" || isNaN(Ven2) || Ven2 <= 0) {
        alert("Por favor, ingresar un valor válido en Venta 2");
        return false;
    }
    if (Ven3 === "" || isNaN(Ven3) || Ven3 <= 0) {
        alert("Por favor, ingresar un valor válido en Venta 3");
        return false;
    }
    if(Sal === "" || isNaN(Sal) || Sal <= 0){
        alert("Salario invalido");
        return false;
    }
    // Comisiones
    let comisionTotal = 0.10 * (Ven1 + Ven2 + Ven3);


    // Calcular el total que recibirá en el mes (sueldo base + comisión total)
    let totalMensual = Sal + comisionTotal;

    alert("La comision que recibiras es de:"+ comisionTotal+"El total que recibirás en el mes es: " + totalMensual);
    return true;
}
function validar3(form) {
    let art = form.art.value.trim();
    if(art === "" || isNaN(art) || art <= 0){
        alert("Precio invalido");
        return false;
    }
    let valor= art*.15;
    let Preciop= art-valor;
    alert("El valor que vas a pagar es de:"+ Preciop);
    return true;
}
function validar4(form){
    let Pp = form.Pp.value.trim();
    let Sp = form.Sp.value.trim();
    let Tp = form.Tp.value.trim();
    let Ef = form.Ef.value.trim();
    let Tf = form.Tf.value.trim();
    if(Pp === "" || isNaN(Pp) || Pp < 0){
        alert("Calificación invalida");
        return false;
    }
    if(Sp === "" || isNaN(Sp) || Sp < 0){
        alert("Calificación invalida");
        return false;
    }
    if(Tp === "" || isNaN(Tp) || Tp < 0){
        alert("Calificación invalida");
        return false;
    }
    if(Ef === "" || isNaN(Ef) || Ef < 0){
        alert("Calificación invalida");
        return false;
    }
    if(Tf === "" || isNaN(Tf) || Tf < 0){
        alert("Calificación invalida");
        return false;
    }
    let Ppar= Pp+Sp+Tp;
    let Prpar= Ppar/3;
    
    let Prp= Prpar*.55;
    let PRR= Prp/30;

    let CF = Ef*.30;
    let Ct = CF/10

    let Tm= Tf*.15;
    let Ta= Tm/10;
    let Promf= PRR+Ct+Tm;
    alert("El promedio que obtuviste es de:" + Promf);
    return true;
}
function validar5(form) {
    let an = form.an.value.trim();
    if(an === "" || isNaN(an) || an <= 0){
        alert("Año invalido");
        return false;
    }
    let Reala= 2024-an;
    alert("Tienes "+ Reala + " años");
    return true;
}
function validar6(form) {
    let num = form.num.value.trim();
    if(num === "" || isNaN(num) || num <= 0){
        alert("Número invalido");
        return false;
    }
    if(num<=40){
    alert("No tienes horas extras");
    return true;
    }
    if(num<48){
        alert("Tienes 8 horas extra, hay pago doble");
        return true;
    }
    if(num>48){
    
        let nume=num-48;
        alert("Tienes 8 horas de pago doble y " + nume + " horas de pago triple");
        return true;
    }
}
function validar8(form){
    let em = form.em.value.trim();
    switch (true) {
        case (em < 1):
            alert("porcentajeUtilidad = 0.05")
            break;
        case (em >= 1 && em < 2):
            alert("porcentajeUtilidad = 0.07") 
            break;
        case (em >= 2 && em < 5):
            alert("porcentajeUtilidad = 0.10") 
            break;
        case (em >= 5 && em < 10):
            alert("porcentajeUtilidad = 0.15") 
            break;
        case (em >= 10):
            alert("porcentajeUtilidad = 0.20") 
            break;
        default:
            porcentajeUtilidad = 0;
    }    
    
}
function validar9(form){
    let nombrec = form.nombrec.value.trim();
    
            const regex = /^[A-Za-z\s]+$/; // Solo permite letras y espacios

            if (!regex.test(nombre)) {
                alert("El nombre no debe contener números ni caracteres especiales.");
                return false; // Previene que se envíe el formulario
            }

            return true; // El nombre es válido
        }
