import { Autor } from "../Entities/Autor";
import { AutorRepository } from "../Repositories/AutorRepository";
import { IAutorService } from "../interfaces/autor-service";
import { EventEmitter } from '../utils/EventEmitter';



export class AutorService implements IAutorService {
    constructor(
        private autorRepository: AutorRepository,
        private eventEmitter: EventEmitter
    ) {}

    agregarAutor(nombre: string, fechaNacimiento: Date): Autor {
        const autor = new Autor(Date.now(), nombre, fechaNacimiento);

        this.autorRepository.agregar(autor);
        this.eventEmitter.emit(autor)
        return autor;
    }

    obtenerAutor(id: number): Autor | undefined {
        this.eventEmitter.on('Obtener Libro', this.obtenerAutor)
        return this.autorRepository.obtenerPorId(id);
    }
}
