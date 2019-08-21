import React, { Component } from 'react'
import { connect } from 'react-redux'


class Cart extends Component {

    // 主分支
    // 主分支2

    // 数量减
    jian(i){
        var arr = this.props.arr
        
        if (arr[i].num <= 0) {
            // var jian = document.getElementsByClassName('jian')
            // jian.style.display='none'
            // console.log(jian)
            return false
        } else {
            this.props.jian(i)
        }
        // console.log(i)
    }

    // 总价
    zong(){
        var arr = this.props.arr
        var num = 0
        for(let i in arr){
            num += arr[i].price*arr[i].num
        }
        return num
    }

    // 商品数量
    leng(){
        var arr = this.props.arr
        let sum = 0
        for(let i in arr){
            sum +=1
        }
        return sum
    }

    render() {
        return (
            <div className='cart'>
                <h1>购物车</h1>
                <div onClick={()=>{this.props.clear()}}>清空</div>
                {
                    this.props.arr.map((v,i)=>{
                        return(
                            <div className='c' key={i}>
                                <div>{v.name}</div>
                                <div>￥{v.price}</div>
                                <div>
                                    <input type='button' value='-' onClick={()=>{this.jian(i)}} className='jian'/>
                                    {v.num}
                                    <input type='button' value='+' onClick={() => { this.props.jia(i)}}/>
                                </div>
                            </div>
                        )
                    })
                }
                <div>数量{this.leng()}</div>
                <div>总价{this.zong()}</div>
            </div>
        )
    }
}

function text1(state) {
    return ({
        arr: state.arr
    })
}

function text2(dispatch) {
    return {
        jia:(i)=>dispatch({type:'数量加加',i:i}),
        jian:(i)=>dispatch({type:'数量减',i:i}),
        clear:()=>dispatch({type:'清空'})
    }
}

export default Cart = connect(text1, text2,undefined,{pure:false})(Cart)
