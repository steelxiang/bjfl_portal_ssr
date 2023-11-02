

export interface Page<T>{
    pageNo: number,
    pageSize: number,
    count: number,
    list: T[]
}

export interface BasicModel<T>{
    id: string,
    page: Page<T>,
    lang: string,
}

export interface BasicParams{
    lang: string;
}