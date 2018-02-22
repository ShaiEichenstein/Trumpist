export class Tramp {
    driverDetails: Driver;
    entranceAvgTime: Date;
    leavingAvgTime: Date;
    trampGrade: number;
}



export class Driver {
    driverFirstName: string;
    driverLastName: string;
    driverAddress: Address;
}


export class Address {
    city: string;
    naborhood: string;
    street: string;
    buldingNumber: number;
}