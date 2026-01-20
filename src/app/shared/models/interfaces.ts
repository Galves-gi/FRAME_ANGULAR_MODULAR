export interface Form {
    id?: number;
    hashtag: string;
    description: string;
    image: string;
    created_at?: string;
    updated_at?: string;
    comments?:[{
        text: string; username: string;
    }]
}

export interface Comment{
    id?: string;
    text: string;
    username: string;
    momentId:number;
    created_at?: string;
    updated_at?: string;
}

export interface Response<T>{
    message?: string;
    data: T;
}