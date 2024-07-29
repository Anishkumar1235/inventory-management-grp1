import React from 'react';
import './PurchaseTable.css'

const PurchaseTable = () => {
  return (


<div className="container">
  <div className="card1">

  </div>
  <div className="card2">
  <table>
  <tr>
    <th colSpan={6} style={{fontSize:'30px', backgroundColor:'#111', color:'white'}}>Purchase Details</th>
    
  </tr>
  <tr>
    <th >Vendor</th>
    <th>Vendor 1</th>
    <th>Vendor 2</th>
    <th>Vendor 3</th>
    <th>Vendor 4</th>
    <th>Vendor 5</th>
  </tr>
  <tr>
  <th  style={{backgroundColor:'	#D3D3D3'}}>Category</th>
    <td>Category 1</td>
    <td>Category 2</td>
    <td>Category 3</td>
    <td>Category 4</td>
    <td>Category 5</td>
  </tr>
  <tr>
  <th >Product</th>
    <td>Product 1</td>
    <td>Product 2</td>
    <td>Product 3</td>
    <td>Product 4</td>
    <td>Product 5</td>
  </tr>
  <tr>
  <th style={{backgroundColor:'	#D3D3D3'}}>Quantity</th>
    <td>3</td>
    <td>6</td>
    <td>9</td>
    <td>8</td>
    <td>2</td>
  </tr>
  <tr>
  <th >Purchase Rate</th>
    <td>44</td>
    <td>44</td>
    <td>38</td>
    <td>29</td>
    <td>35</td>
  </tr>
  <tr>
  <th style={{backgroundColor:'	#D3D3D3'}} >Sales Rate</th>
    <td>46</td>
    <td>40</td>
    <td>46</td>
    <td>31</td>
    <td>33</td>
  </tr>
</table>
  </div>
</div>
  );
};

export default PurchaseTable;