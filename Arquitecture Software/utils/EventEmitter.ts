// Crear la logica para la escucha de eventos cuando se ejecuta alguna accion por ejemplo creacion de un libro
// Creamos una instancia de EventEmitter

import { IEventEmitter } from "../interfaces/event-emitter";


export class EventEmitter implements IEventEmitter {
    private eventEmitter: IEventEmitter;
    emit(  item: any) {
        console.log('Se creo:' + item)
        return item;
    }

    on(event: string, listener: (...args: any[]) => void) {
        this.eventEmitter.on(event, listener);
    } 
}