import React, { Component } from 'react'
import data from './dataGlasses.json'



export default class ChangeGlasses extends Component {
    constructor(props) {
        super(props)

        this.state = {
            urlImg: "",
            listInfo: data,
        }
    }

    handlChangeUrlImg = (urlImg) => {
        this.setState({
            urlImg,
        })
    }

    renderInfo = () => {
        const { listInfo } = this.state;
        return listInfo.map((listInfo) => {
            return (
                <div key={listInfo.id}>
                    <a href='' onClick={() => { this.handlChangeUrlImg(listInfo.url) }}><img className='img-fluid position-absolute' src={listInfo.url} style={{ left: "78px", bottom: "245px", maxWidth: "225px" }} /></a>
                    <div className='position-absolute' style={{ bottom: "0", backgroundColor: "rgb(221,196,136,0.3)" }}>
                        <h5>Tên sản phẩm : {listInfo.name}</h5>
                        <h>Giá : {listInfo.price}</h>
                        <p>Thông tin thêm : {listInfo.desc}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <h1 className='text-center'>Change Glasses</h1>
                <div className='row justify-content-between'>
                    <div className='col-md-4'>
                        <img className='glass1' src={this.state.urlImg} style={{ position: "absolute", zIndex: "1", width:"50%", left: "25%", bottom:"60%" }} />
                        <img className='img-fluid position-relative' src='./glassesImage/model.jpg' />
                        
                        {/* RenderInfo */}
                        {this.renderInfo()}

                    </div>

                    <div className='col-md-4'>
                        <img className='glass2' src={this.state.urlImg} style={{ position: "absolute", zIndex: "1", width:"50%", left: "25%", bottom:"60%" }} />
                        <img className='img-fluid position-relative' src='./glassesImage/model.jpg' />
                    </div>
                </div>

                <div className='row' style={{ backgroundColor: "rgb(221,196,136,0.3)" }}>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v1.png")}><img className='img-fluid' src='./glassesImage/g1.jpg' /></button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v2.png")}><img className='img-fluid' src='./glassesImage/g2.jpg' /></button>
                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v3.png")}><img className='img-fluid' src='./glassesImage/g3.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v4.png")}><img className='img-fluid' src='./glassesImage/g4.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v5.png")}><img className='img-fluid' src='./glassesImage/g5.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v6.png")}><img className='img-fluid' src='./glassesImage/g6.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v7.png")}><img className='img-fluid' src='./glassesImage/g7.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v8.png")}><img className='img-fluid' src='./glassesImage/g8.jpg' /></button>

                    </div>
                    <div className='col-md-2'>
                        <button className='btn' onClick={() => this.handlChangeUrlImg("./glassesImage/v9.png")}><img className='img-fluid' src='./glassesImage/g9.jpg' /></button>
                    </div>
                </div>
            </div>
        )
    }
}
