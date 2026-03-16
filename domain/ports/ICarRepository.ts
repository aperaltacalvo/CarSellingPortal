export interface ICarRepository {
    create(car: Car): Promise<void>;
    modify(car: Car): Promise<void>;
    delete(carId: string): Promise<void>;
    getById(carId: string): Promise<Car | null>;
}