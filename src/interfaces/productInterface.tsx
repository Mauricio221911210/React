export interface ProductRes {
    data: Product[];
}

export interface Product {
    id:          number;
    code:        string;
    name:        string;
    stock:       number;
    precio:      number;
    description: string;
    provider_id: number;
    photo:       string;
    created_at:  string;
    updated_at:  string;
}
