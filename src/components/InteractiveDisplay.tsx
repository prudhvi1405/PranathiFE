import React, { useState, useEffect } from 'react';
import './HouseholdsTable.css';

interface Households {
  HSHD_NUM: number;
  L: string;
  AGE_RANGE: string;
  MARITAL: string;
  INCOME_RANGE: string;
  HOMEOWNER: string;
  HSHD_COMPOSITION: string;
  HH_SIZE: number;
  CHILDREN: number;
}

interface Transactions {
  HSHD_NUM: number;
  BASKET_NUM : number; 
  PRODUCT_NUM: number;
  PURCHASE_: string;
  SPEND: number;  
  UNITS: number
  STORE_R: string;
  WEEK_NUM: number;
  YEAR: number;
}

interface Products {
  PRODUCT_NUM: number  
  DEPARTMENT: string;
  COMMODITY: string;
  BRAND_TY: string; 
  NATURAL_ORGANIC_FLAG: string;
}

interface JoinedTable {
  HSHD_NUM: number;
  BASKET_NUM : number;
  PRODUCT_NUM: number;
  DEPARTMENT: string;
  COMMODITY: string;
  SPEND: number; 
  UNITS: number;
  STORE_R: string;
  WEEK_NUM: number;
  YEAR: number;
  L: string;
  AGE_RANGE: string;
  MARITAL: string;
  INCOME_RANGE: string;
  HOMEOWNER: string;
  HSHD_COMPOSITION: string;
  HH_SIZE: number;
  CHILDREN: number;
}

function HouseholdsTable() {
  const [data1, setData1] = useState<Households[]>([]);
  const [data2, setData2] = useState<Transactions[]>([]);
  const [data3, setData3] = useState<Products[]>([]);
  const [data4, setData4] = useState<JoinedTable[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://pranathiserver.onrender.com/api/gettables');
        const result = await response.json();

        if (response.ok) {
          setData1(result.entries1); 
          setData2(result.entries2);
          setData3(result.entries3);
          setData4(result.entries4);
        } else {
          setError(result.message); 
        }
      } catch (error) {
        console.log(error);
        setError('Failed to fetch data'); 
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // // Slice the data array to limit the number of rows displayed to 10
  // const displayedData1 = data1.slice(0, 10);
  // const displayedData2 = data2.slice(0, 10);
  // const displayedData3 = data3.slice(0, 10);
  // const displayedData4 = data4.slice(0, 10);

  return (
    <div className="container">
      <h2 className="table-title">Households Data</h2>

      {data1.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">HSHD_NUM</th>
              <th className="table-header">L</th>
              <th className="table-header">AGE_RANGE</th>
              <th className="table-header">MARITAL</th>
              <th className="table-header">INCOME_RANGE</th>
              <th className="table-header">HOMEOWNER</th>
              <th className="table-header">HSHD_COMPOSITION</th>
              <th className="table-header">HH_SIZE</th>
              <th className="table-header">CHILDREN</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {data1.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{row.HSHD_NUM}</td>
                <td className="table-cell">{row.L}</td>
                <td className="table-cell">{row.AGE_RANGE}</td>
                <td className="table-cell">{row.MARITAL}</td>
                <td className="table-cell">{row.INCOME_RANGE}</td>
                <td className="table-cell">{row.HOMEOWNER}</td>
                <td className="table-cell">{row.HSHD_COMPOSITION}</td>
                <td className="table-cell">{row.HH_SIZE}</td>
                <td className="table-cell">{row.CHILDREN}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br></br>
      <h2 className="table-title">Transactions Data</h2>
      {data2.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">HSHD_NUM</th>
              <th className="table-header">BASKET_NUM</th>
              <th className="table-header">PRODUCT_NUM</th>
              <th className="table-header">PURCHASE_</th>
              <th className="table-header">SPEND</th>
              <th className="table-header">UNITS</th>
              <th className="table-header">STORE_R</th>
              <th className="table-header">WEEK_NUM</th>
              <th className="table-header">YEAR</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {data2.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{row.HSHD_NUM}</td>
                <td className="table-cell">{row.BASKET_NUM}</td>
                <td className="table-cell">{row.PRODUCT_NUM}</td>
                <td className="table-cell">{row.PURCHASE_}</td>
                <td className="table-cell">{row.SPEND}</td>
                <td className="table-cell">{row.UNITS}</td>
                <td className="table-cell">{row.STORE_R}</td>
                <td className="table-cell">{row.WEEK_NUM}</td>
                <td className="table-cell">{row.YEAR}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br></br>
      <h2 className="table-title">Products Data</h2>
      {data3.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">PRODUCT_NUM</th>
              <th className="table-header">DEPARTMENT</th>
              <th className="table-header">COMMODITY</th>
              <th className="table-header">BRAND_TY</th>
              <th className="table-header">NATURAL_ORGANIC_FLAG</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {data3.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{row.PRODUCT_NUM}</td>
                <td className="table-cell">{row.DEPARTMENT}</td>
                <td className="table-cell">{row.COMMODITY}</td>
                <td className="table-cell">{row.BRAND_TY}</td>
                <td className="table-cell">{row.NATURAL_ORGANIC_FLAG}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <br></br>
      <h2 className="table-title">Joint Data</h2>
      {data4.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th className="table-header">HSHD_NUM</th>
              <th className="table-header">BASKET_NUM</th>
              <th className="table-header">PRODUCT_NUM</th>
              <th className="table-header">DEPARTMENT</th>
              <th className="table-header">COMMODITY</th>
              <th className="table-header">SPEND</th>
              <th className="table-header">UNITS</th>
              <th className="table-header">STORE_R</th>
              <th className="table-header">WEEK_NUM</th>
              <th className="table-header">YEAR</th>
              <th className="table-header">L</th>
              <th className="table-header">AGE_RANGE</th>
              <th className="table-header">MARITAL</th>
              <th className="table-header">INCOME_RANGE</th>
              <th className="table-header">HOMEOWNER</th>
              <th className="table-header">HSHD_COMPOSITION</th>
              <th className="table-header">HH_SIZE</th>
              <th className="table-header">CHILDREN</th>
            </tr>
          </thead>
          <tbody className="scrollable-tbody">
            {data4.map((row, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{row.HSHD_NUM}</td>
                <td className="table-cell">{row.BASKET_NUM}</td>
                <td className="table-cell">{row.PRODUCT_NUM}</td>
                <td className="table-cell">{row.DEPARTMENT}</td>
                <td className="table-cell">{row.COMMODITY}</td>
                <td className="table-cell">{row.SPEND}</td>
                <td className="table-cell">{row.UNITS}</td>
                <td className="table-cell">{row.STORE_R}</td>
                <td className="table-cell">{row.WEEK_NUM}</td>
                <td className="table-cell">{row.YEAR}</td>
                <td className="table-cell">{row.L}</td>
                <td className="table-cell">{row.AGE_RANGE}</td>
                <td className="table-cell">{row.MARITAL}</td>
                <td className="table-cell">{row.INCOME_RANGE}</td>
                <td className="table-cell">{row.HOMEOWNER}</td>
                <td className="table-cell">{row.HSHD_COMPOSITION}</td>
                <td className="table-cell">{row.HH_SIZE}</td>
                <td className="table-cell">{row.CHILDREN}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}

export default HouseholdsTable;
