export interface Tramp {
    driverDetails: Driver;
    entranceAvgTime: Date;
    leavingAvgTime: Date;
    trampGrade: number;
    color: string;
    trampRequstStatus: number;
    trampRequestIcon: string;
}

export interface Driver {
    driverEmpId: number;
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
