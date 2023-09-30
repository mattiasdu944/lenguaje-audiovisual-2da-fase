class ValidationError extends Error {
    constructor(message: string){
        super(message);
        this.name = 'ValidationError';
    }
}

class NotFoundError extends Error {
    constructor(message: string){
        super(message);
        this.name = 'NotFoundError';
    }
}

class Errors {
    static validation(message: string): ValidationError {
        return new ValidationError(message)
    }

    static notFound(message: string): NotFoundError {
        return new NotFoundError(message)
    }
}