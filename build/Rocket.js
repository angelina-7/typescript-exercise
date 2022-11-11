export class Rocket {
    name;
    totalCapacityKg;
    cargoItems = new Array;
    astronauts = new Array;
    constructor(name, totalCapacityKg) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items) {
        return items.reduce((acc, curr) => acc += curr.massKg, 0);
    }
    currentMassKg() {
        let mass = 0;
        if (this.cargoItems.length != 0)
            mass = this.sumMass(this.cargoItems);
        if (this.astronauts.length != 0)
            mass += this.sumMass(this.astronauts);
        return mass;
    }
    canAdd(item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
    }
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    }
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Rocket.js.map