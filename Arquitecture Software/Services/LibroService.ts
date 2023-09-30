import { Libro } from "../Entities/Libro";
import { LibroRepository } from "../Repositories/LibroRepository";
import { ILibroService } from "../interfaces/libro-service";
import { EventEmitter } from "../utils/EventEmitter";
import { AutorService } from "./AutorService";



export class LibroService implements ILibroService {
    constructor(
        private libroRepository: LibroRepository, 
        private autorService: AutorService,
        private eventEmitter: EventEmitter,
    ) {}

    agregarLibro(titulo: string, autorId: number): Libro {
        const autor = this.autorService.obtenerAutor(autorId);
        if (!autor) throw new Error("Autor no encontrado.");

        const libro = new Libro(Date.now(), titulo, autor);
        this.libroRepository.agregar(libro);
        this.eventEmitter.emit(libro)
        return libro;
    }

    obtenerLibro(id: number): Libro | undefined {
        this.eventEmitter.on('Obtener Libro', this.obtenerLibro)
        return this.libroRepository.obtenerPorId(id);
    }
    
}
