interface Creep {
    store: Store;
    harvest(target: Source): number;
    moveTo(target: RoomObject): number;
    transfer(target: Structure, resourceType: string): number;
    room: Room;
}
interface Store {
    getFreeCapacity(): number;
}
interface Room {
    find(type: number): Source[];
}
interface Source extends RoomObject {
    energy: number;
    energyCapacity: number;
}
interface Structure extends RoomObject {
}
interface RoomObject {
}
declare const roleHarvester: {
    run(creep: Creep): void;
};
export default roleHarvester;
