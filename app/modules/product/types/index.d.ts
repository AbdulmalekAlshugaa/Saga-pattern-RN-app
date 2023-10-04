
declare namespace product {

    interface State {
        loading: boolean;
        error: string;
        data: productResponse[];
    }

    interface productResponse {
        id: number;
        category: string;
        description: string;
        title: string;
        image: ImageSourcePropType;
        price: number;
        rating: rating;
    }

    interface rating {
        count: string;
        rate: string;
    }

}
