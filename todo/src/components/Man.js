import React from 'react';
import styled from 'styled-components';
import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {List} from './List';
import lamlai from '../images/lamlai.jpg';
import xoa from '../images/xoa.jpg';
import nhamay from '../images/nhamay.jpg';


const Nutthem=styled.div
`   display: flex;
    justify-content: center;
    padding-right: 5px;
    input{
        height: 40px;
        width: 300px;
        border-radius:20%;
        border-color: green;
    }
    button{
       
        width:45px;
        height:45px;
        border-color:green;
        background-color: white;
        padding:0;
        border-radius:50%;
        img{
            width:45px;
            height:45px;
            border-radius:50%;
            -moz-border-radius:50%;
            -webkit-border-radius:50%;
        }
}
`;

const Menuu=styled.ul
`  
`;


function Man() {

    
    const [intext1, setIntext1] = useState("");
    const [intext, setIntext] = useState("");
    const [innews, setInnews] = useState([]);
    const inthem= {
        text:"",
        com: false,
        edit: false,
        xoa: false,
        nhieu: false,
    };   
    const [inan, setInan] = useState(false);
    const [inan2, setInan2] = useState(false);
    
    const nhan =(a)=>{
        setIntext1(a);
    }

    const Them = () =>{
        //console.log(intext);
        if(!intext)
            alert("Thử thôi bằng cách điền vào!");
        else{
            inthem.text=intext;
            setInnews([...innews, inthem]);
            setIntext("");
            alert("Thêm một hành động nhỏ cho cuộc sống thêm xanh");
            setInan(true);
        }
    }
    const Xoatatca = () =>{
        setInnews([]);
        setInan(false); 
        alert("Xóa đi để bắt đầu kế hoạch ngày mới nào!");    
    }

    const Xoanhieu = () =>{
        setInnews(
            innews.map((inthem,index) => {                                  
                return {...inthem, xoa: true};                            
            })
        )
        setInan2(true);
        alert("Nhiều quá, bạn nhớ phân loại trước khi vứt nha!");
    }
    const Xoanhieu1 = () =>{ 
        const newList1 = innews.filter((inthem) => (inthem.nhieu !== true));
        setInnews(
            newList1.map((inthem,index) => {                                  
                return {...inthem, xoa: false};                            
            })
        );
        console.log(newList1);  
        console.log(innews);
        setInan2(false); 
        alert("Ok rồi, nhà máy xử lý nhanh thôi!");
    }
    const Xoanhieunut = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){
                    return {...inthem, xoa: false, nhieu: true};                   
                } else{
                    return inthem;
                }
            })
        )
        alert("Rác không tái chế được nên từ bỏ thôi!");
    }
    const Xoanhieunut1 = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){
                    return {...inthem, xoa: true, nhieu: false};                   
                } else{
                    return inthem;
                }
            })
        )
        alert("Khoan đã, cái này còn tái chế được!");
    }
    const Xoa = (indexid) =>{
        const newList = innews.filter((innews,index) => (index !== indexid));
        setInnews(newList);
        alert("Thật tiếc phải vứt bỏ bạn!");
    }
    const Sua = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){
                    return {...inthem, edit: true};                   
                } else{
                    return inthem;
                }
            })
        )
        alert("Cái này còn dùng được mà, để thử chút không nên lãng phí!");
    }
    const Sua1 = (indexidd) =>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexidd){                    
                    return {...inthem, text: intext1, edit: false};                  
                } else{
                    return inthem;
                }
        }))
        alert("Tái chế đã thành công!");
    }
    const Chuahoanthanh =(indexii)=>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexii){
                    return {...inthem, com: true};
                    
                } else{
                    return inthem;
                }
            })
        )
        alert("Thành công, hãy tiếp tục nào!");
    };
    const Hoanthanh =(indexii)=>{
        setInnews(
            innews.map((inthem,index) => {
                if(index === indexii){
                    return {...inthem, com: false};
                    
                } else{
                    return inthem;
                }
            })
        )
        alert("Thật tiếc, mong đợi vậy mà!");
    };

    return (
        <Container>     
            <Row>
                <Col md="3">
                    1 of 3
                </Col>
                <Col md="6">
                    <Nutthem>
                        <button onClick={Xoatatca} style={{display: inan ? "block" : "none" }}>
                            <img src={xoa} />
                        </button>
                        <input value={intext} onChange={e => setIntext(e.target.value)}/>
                        <button onClick={Them}>
                            <img src={lamlai} />
                        </button> 
                        <button onClick={Xoanhieu} style={{display: (inan2 || !inan) ? "none" : "block" }}>
                            <img src={nhamay} />
                        </button> 
                        <button onClick={Xoanhieu1} style={{display: inan2 ? "block" : "none" }}>
                            <img src={nhamay} />
                        </button> 
                    </Nutthem> 
                </Col>
                <Col md="3">
                    3 of 3
                </Col>
            </Row>
            <Row>
                <Col md="2">
                    1 of 3
                </Col>
                <Col md="8">
                    <Menuu type="none">
                            {innews.map((inthem, index) => {
                                return(
                                    <li key={index}>
                                        <List 
                                            index={index}
                                            text={inthem.text}
                                            edit={inthem.edit}
                                            com={inthem.com}
                                            xoa={inthem.xoa}
                                            nhieu={inthem.nhieu}
                                            setIntext1={nhan}                                  
                                            Xoa={Xoa}
                                            Sua={Sua}
                                            Sua1={Sua1}
                                            Chuahoanthanh={Chuahoanthanh}
                                            Hoanthanh={Hoanthanh}
                                            Xoanhieunut={Xoanhieunut}
                                            Xoanhieunut1={Xoanhieunut1}
                                        />
                                    </li>
                                )
                            })}                       
                    </Menuu>
                </Col>
                <Col md="2">
                    3 of 3
                </Col>             
            </Row>
      </Container>
    );
  }
  
  export default Man;