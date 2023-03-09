import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../services/api';

function AddProduct() {
    const navigate = useNavigate();
    const[newproduct, setNewProduct] = useState({
        name: "",
        price: 0,
        img: "",
        like: 0,
        quantity: 0,
        description: "",
    });

    const handleSubmit = async() =>{
        const res = await addProduct(newproduct);
        console.log(newproduct);
        //console.log(res);

        if (res.status=== 200) {
            navigate("/products");
        }
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setNewProduct({...newproduct, [e.target.name]: e.target.value})
    }

    const handleLoad= (e)=>{
        e.preventDefault();
        //console.log(e.target.files);
        setNewProduct({...newproduct, [e.target.name]: e.target.files[0].name});
    }

    return(
       <>
       <h2>Add Product</h2>
        <Form style={{marginLeft: "50px" }}>

            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control type='text' style={{width: "50%" }} 
                placeholder= "Enter a Name" name="name"
                onChange={(e)=> handleChange(e)}
                />
            </Form.Group>

            <Form.Group controlId="formDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control type='text' style={{width: "50%" }} 
                placeholder= "Enter a Description" name="description"
                onChange={(e)=> handleChange(e)}
                />
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control type='number' style={{width: "20%" }} 
                placeholder= "Enter a Price" name="price"
                onChange={(e)=> handleChange(e)}
                />
            </Form.Group>

            <Form.Group controlId="formQuantity">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control type='text' style={{width: "50%" }} 
                placeholder= "Enter a Qte" name="quantity"
                onChange={(e)=> handleChange(e)}
                />
            </Form.Group>

            <Form.Group controlId="formImg">
                <Form.Label>Image:</Form.Label>
                <Form.Control type="file" style={{width: "50%" }} 
                name="img"
                onChange={(e)=> handleLoad(e)}
                />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Add Product
            </Button>

            <Button variant="secondary" onClick={()=>navigate('/products')}>
                Back to Products
            </Button>
        </Form>
        </>
    );
}

export default AddProduct;