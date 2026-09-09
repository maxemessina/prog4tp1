/**
 * EJERCICIO 17 - Sistema de pagos
 * ---------------------------------------------------------------------------
 * `procesarPago` no debe saber qué tipo concreto de MetodoPago está
 * utilizando: solo le importa que cumpla la interface.
 */
export interface MetodoPago {
    pagar(monto: number): void;
}

export class TarjetaCredito implements MetodoPago {
    pagar(monto: number): void {
        // TODO: informar el pago por consola (console.log), mencionando el
        // monto. Cada método de pago debe loguear un mensaje distinto que
        // lo identifique (por ejemplo, mencionando "tarjeta").
        console.log("Pago con tarjeta de credito: " + monto);
    }
}

export class Transferencia implements MetodoPago {
    pagar(monto: number): void {
        console.log("Pago con transferencia: " + monto);
    }
}

export class MercadoPago implements MetodoPago {
    pagar(monto: number): void {
        console.log("Pago con mercado pago: " + monto);
    }
}

export class Efectivo implements MetodoPago {
    pagar(monto: number): void {
        console.log("Pago con efectivo: " + monto);
    }
}

export function procesarPago(metodo: MetodoPago, monto: number): void {
    metodo.pagar(monto);    
}
