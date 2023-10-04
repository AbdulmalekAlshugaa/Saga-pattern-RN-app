
declare namespace product {

    
    interface State {
        data: productResponse[]; // Assuming data is an array of Product type
        isLoading: boolean;
        isError: boolean;
        error: Error | null;
        isSuccess: boolean;
        isRefetching: boolean;
        refetch: () => void;
        // Add more properties or methods if the hook returns additional values
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
