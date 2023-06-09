export type Request = {
    name: string,
    email: string,
    phone: string
}

export type defaultAction = {
    type: string,
    payload: any
}

export interface warningEntry {
    heading: string,
    text: string
}