import { SpaceLocation } from './SpaceLocation';

// Part 1: Declare (5) Variables With Type
// const spacecraftName: string = 'Determination';
// const speedMph: number = 17500;
// const milesPerKilometer: number = 0.621;

const kilometersToMars: number = 225000000;
const kilometersToTheMoon: number = 384400;

// Part 2: Print Days to Mars
// const milesToMars: number = kilometersToMars * milesPerKilometer;
// const hoursToMars: number = milesToMars / speedMph;
// const daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):
// console.log(`${spacecraftName} would take ${daysToMars} days to get to Mars.`);

// Part 3: Create a Function ("getDaysToLocation")
// function getDaysToLocation(kilometersAway: number): number {
//     const milesToLocation = kilometersAway * milesPerKilometer;
//     const days = (milesToLocation / speedMph) / 24;
//     return days;
// }

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spacecraftName} would take ${getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// Part 4: Create a Spacecraft Class
class Spacecraft {
    private readonly milesPerKilometer: number = 0.621;
    private _name: string;
    private _speedMph: number;

    constructor(name: string, speedMph: number) {
        this._name = name;
        this._speedMph = speedMph;
    }

    getDaysToLocation(kilometersAway: number): number {
        const milesToLocation = kilometersAway * this.milesPerKilometer;
        const days = (milesToLocation / this._speedMph) / 24;
        return days;
    }

    printDaysToLocation(location: SpaceLocation): void {
        console.log(`${this._name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
    }

    get name(): string {
        return this._name;
    }

}

// Create an instance of the class here:
let spaceShuttle = new Spacecraft('Determination', 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToMars)} days to get to Mars.`);
// console.log(`${spaceShuttle.name} would take ${spaceShuttle.getDaysToLocation(kilometersToTheMoon)} days to get to the Moon.`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.

// Add the printDaysToLocation function to the Spacecraft class.

// Use the class instance to print out the days to Mars and the Moon here:
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));

