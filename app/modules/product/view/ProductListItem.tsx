import { View, Text } from 'react-native'
import React from 'react'
import { useGetProducts } from '../hooks/useGetProductQuery';

export default function ProductListItem() {
    const { data, isSuccess, isFetched } = useGetProducts();
    console.log(isFetched);


    return (
        <View>
            <Text>ProductListItem</Text>
        </View>
    )
}