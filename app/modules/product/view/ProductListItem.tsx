import { View, Text } from 'react-native'
import React from 'react'
import { useGetProducts } from '../hooks/useGetProductQuery';

export default function ProductListItem() {
    const { data, isLoading, error } = useGetProducts();
    console.log(data, isLoading, error);
    return (
        <View>
            <Text>ProductListItem</Text>
        </View>
    )
}