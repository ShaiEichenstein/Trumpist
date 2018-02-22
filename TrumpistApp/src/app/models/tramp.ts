export interface Tramp {
    driverDetails: Driver;
    entranceAvgTime: Date;
    leavingAvgTime: Date;
    trampGrade: number;
}

export interface Driver {
    driverFirstName: string;
    driverLastName: string;
    driverAddress: Address;
    driverGender: string;
}


export interface Address {
    city: string;
    naborhood: string;
    street: string;
    buldingNumber: number;
}
