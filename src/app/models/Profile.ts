export interface IChangePassword {
    oldPassword: string,
    newPassword: string
}

export interface IUser {
    id: number
    email: string
    firstName: string
    lastName: string
    avatarImageUrl: string
}

export interface IProfile {
    id: number,
    backgroundImageUrl: string,
    
    currentCity: string,
    currentCountry: string,

    bornCity: string,
    bornCountry: string,

    dob: string,
    gender: string,
    martialStatus: string,
    schoolName: string,

    jobTitle: string,
    companyName: string,
    companyUrl: string,


    owner: IUser
}

export interface IProfileHeroBanner {
    avatarImageUrl: string,
    backgroundImageUrl: string,
    firstName: string,
    lastName: string,
    currentCity: string,
    currentCountry: string
}

export interface IProfilePersonalInfo {
    bornCity: string,
    bornCountry: string,

    martialStatus: string,

    jobTitle: string,

    companyName: string,
    companyUrl: string,

    schoolName: string
}