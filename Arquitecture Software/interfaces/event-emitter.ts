export interface IEventEmitter {
    emit: ( item: any ) => any;
    on: ( event: string, listener: (...args: any[]) => void) => void
}
