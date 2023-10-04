import { Platform, StyleSheet, View } from "react-native";
import React, { useState } from 'react';
import { Text, Searchbar } from "react-native-paper";
import { COLORS, SIZES,  } from "../../main/src/mainConstants";


interface ProductSearchProps {
  inputString?: string;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onCancel?: () => void;
}

const ProductSearch = (props: ProductSearchProps) => {
    const [inputString, setInputString] = useState('');
    let inputRef: any = null;

    const _onClear = () => {
        setInputString('');
    };

    const _onChangeText = (text: string) => {
        setInputString(text);
        if (props.onChangeText) {
            props.onChangeText(text);
        }
    };

    const _onFocus = () => {
        if (props.onFocus) { props.onFocus(); }
    };

    const _onCancel = () => {
        if (Platform.OS === 'ios') {
            inputRef.clear();
            setInputString('');
            if (props.onCancel) { props.onCancel(); }
        }
    };

  return (
    <Searchbar
      value={inputString}
      style={styles.container}
      inputStyle={{ fontSize: 14 }}
      onChangeText={_onChangeText}
      allowFontScaling={true}
      placeholderTextColor={COLORS.gray}
      placeholder={"Search"}
      ref={(ref) => (inputRef = ref)}
      onFocus={_onFocus}
    />
  );
};

export default ProductSearch;

const styles = StyleSheet.create({
  container: {
    marginStart: 10,
    marginEnd: 10,
  },
});
