/**
 * EJERCICIO 18 - Sistema de notificaciones
 * ---------------------------------------------------------------------------
 * `enviarNotificaciones` debe funcionar con cualquier tipo de notificación,
 * sin importarle cuál es el tipo concreto.
 */
export abstract class Notificacion {
    abstract enviar(mensaje: string): void;
}

export class NotificacionEmail extends Notificacion {
    enviar(mensaje: string): void {
        console.log("eMail enviado: ", mensaje);
    }
}

export class NotificacionSMS extends Notificacion {
    enviar(mensaje: string): void {
        console.log("SMS enviado: ", mensaje);    
    }
}

export class NotificacionPush extends Notificacion {
    enviar(mensaje: string): void {
        console.log("Push enviado: ", mensaje);    
    }
}

export function enviarNotificaciones(
    notificaciones: Notificacion[],
    mensaje: string
): void {
    notificaciones.forEach(notificacion => {
        notificacion.enviar(mensaje);
    });
}
