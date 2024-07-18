export default class Cl_datos {
    constructor(){
        this.contPersonas =0;
        this.contPersonasMujeres =0;
        this.contPersonasHombres =0;

    }
    procesarPersona(persona){
        this.contPersonas++;
        if (persona.sexo == 'F') {
            this.contPersonasMujeres++;
        } else {
            this.contPersonasHombres++;
        }
    }
    porcentaje(){
        return this.contPersonasMujeres/this.contPersonas*100;
    }
    sexoMayor(){
        if (this.contPersonasMujeres == this.contPersonasHombres) 
            return 'Ambos por igual ';
            else
            if (this.contPersonasMujeres > this.contPersonasHombres) 
                return ' Hay más mujeres ';
             else 
                return 'Hay más hombres ';
            
    }
}