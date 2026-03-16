import { Car } from '../../domain/entities/Car';
import { ICarRepository } from '../../domain/ports/ICarRepository';
import { IModifyCarDTO } from '../dto/ModifyCarDTO';

export class ModifyCarUseCase {
    constructor(private carRepository: ICarRepository) {}

    async execute(dto: IModifyCarDTO): Promise<Car> {
        const updatedCar = new Car(dto.id, dto.model || '', dto.year || 0, dto.price || 0);
        return updatedCar;
    }
}