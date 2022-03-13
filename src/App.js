import React from 'react';
import React, { useState } from 'react';
import './style.css';
import Header from './components/Header.js';
import AddItem from './components/AddItem.js';
import ProductListHeading from './components/ProductListHeading.js';
import ProductList from './components/ProductList.js';
import CartTotalAmount from './components/CartTotalAmount.js';
import Footer from './components/Footer.js';

export default function App() {
  const products = [
    {
      name: 'Iphone 10S Max',
      price: 74899,
      quantity: 0,
    },
    {
      name: 'OnePlus Nord CE 5G',
      price: 25999,
      quantity: 0,
    },
    {
      name: 'Redmi Note 10 Pro Max',
      price: 16999,
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  const increamentQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    convertAmountInWords(newTotalAmount);
  };

  const decreamentQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    convertAmountInWords(newTotalAmount);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
    convertAmountInWords(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    convertAmountInWords(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  let amontInWord = 'Zero';
  let [wordAmount, setWordAmount] = useState(amontInWord);
  const convertAmountInWords = (newTotalAmount) => {
    var words = new Array();
    words[0] = '';
    words[1] = 'One';
    words[2] = 'Two';
    words[3] = 'Three';
    words[4] = 'Four';
    words[5] = 'Five';
    words[6] = 'Six';
    words[7] = 'Seven';
    words[8] = 'Eight';
    words[9] = 'Nine';
    words[10] = 'Ten';
    words[11] = 'Eleven';
    words[12] = 'Twelve';
    words[13] = 'Thirteen';
    words[14] = 'Fourteen';
    words[15] = 'Fifteen';
    words[16] = 'Sixteen';
    words[17] = 'Seventeen';
    words[18] = 'Eighteen';
    words[19] = 'Nineteen';
    words[20] = 'Twenty';
    words[30] = 'Thirty';
    words[40] = 'Forty';
    words[50] = 'Fifty';
    words[60] = 'Sixty';
    words[70] = 'Seventy';
    words[80] = 'Eighty';
    words[90] = 'Ninety';
    newTotalAmount = newTotalAmount.toString();
    var atemp = newTotalAmount.split('.');
    var number = atemp[0].split(',').join('');
    var words_string = '';
    var n_length = number.length;
    if (n_length <= 9) {
      var n_array = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0);
      var received_n_array = new Array();
      for (var i = 0; i < n_length; i++) {
        received_n_array[i] = number.substr(i, 1);
      }
      for (var i = 9 - n_length, j = 0; i < 9; i++, j++) {
        n_array[i] = received_n_array[j];
      }
      for (var i = 0, j = 1; i < 9; i++, j++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          if (n_array[i] == 1) {
            n_array[j] = 10 + parseInt(n_array[j]);
            n_array[i] = 0;
          }
        }
      }
      let value = '';
      for (var i = 0; i < 9; i++) {
        if (i == 0 || i == 2 || i == 4 || i == 7) {
          value = n_array[i] * 10;
        } else {
          value = n_array[i];
        }
        if (value != 0) {
          words_string += words[value] + ' ';
        }
        if (
          (i == 1 && value != 0) ||
          (i == 0 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Crores ';
        }
        if (
          (i == 3 && value != 0) ||
          (i == 2 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Lakhs ';
        }
        if (
          (i == 5 && value != 0) ||
          (i == 4 && value != 0 && n_array[i + 1] == 0)
        ) {
          words_string += 'Thousand ';
        }
        if (
          i == 6 &&
          value != 0 &&
          n_array[i + 1] != 0 &&
          n_array[i + 2] != 0
        ) {
          words_string += 'Hundred and ';
        } else if (i == 6 && value != 0) {
          words_string += 'Hundred ';
        }
      }
      words_string = words_string.split('  ').join(' ');

      setWordAmount(words_string);
    }
  };

  return (
    <>
      <Header />
      <AddItem addItem={addItem} />
      <div className="main-body container">
        <ProductListHeading />
        <ProductList
          productList={productList}
          increamentQuantity={increamentQuantity}
          decreamentQuantity={decreamentQuantity}
          removeItem={removeItem}
          convertAmountInWords={convertAmountInWords}
        />
        <CartTotalAmount
          totalAmount={totalAmount}
          resetQuantity={resetQuantity}
          wordAmount={wordAmount}
        />
      </div>
      <Footer />
    </>
  );
}
