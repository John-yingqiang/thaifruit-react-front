import React, {Component} from 'react';
import fetch from "../components/common/fetch";
import {Row, Col} from 'antd';
import Fruit from '../components/Fruit/FruitUnit';
import Divider from '../components/Divider';

class FruitContainer extends Component {
    state = {
        tags:[],
        fruits:[],
    }

    componentDidMount(){
        const url_tag = `/fruit/tags/`;
        const data_tag = fetch(url_tag);

        console.log("fetch tags:" + data_tag);

        if (data_tag.code === 200){
            this.setState({tags: data_tag.data});
            try {
                const tags = data_tag.data.detail;
                for (let tag in tags) {
                    let url_fruit = `/fruit/list/kinds__name=${tags[tag].name}`;
                    let data_fruit = fetch(url_fruit);

                    if(data_fruit.code === 200)
                    {
                        let fruits = data_fruit.data.detail;
                        console .log("fetch fruits:" + fruits);

                        this.setState({fruits:this.state.fruits.push({
                                kinds:tags[tag],
                                fruit:fruits
                            })})
                    }
                }
            }
            catch (e) {
                console.log("error:" + e)
            }
        }else {
            console.log('error get data tag');
        }
    }

    generateFruit = (fruit, index) => {
        return (
            <Col span={6} offset={index===0?3:0}>
                <Fruit
                key={index}
                title={fruit.title}
                price={fruit.price}
                content={fruit.content}
                icon={fruit.image_position}
                />
            </Col>
        )
    }

    render(){
        const count = this.state.fruits.length;
        return(
            <div>
                <Divider tilte={this.state.fruits.kinds} more={true} count={count}/>
                <Row>
                    {count===0?<Fruit count={count}/>:this.state.fruits.map(this.generateFruit)}
                </Row>
            </div>
        )
    }
}
export default FruitContainer;
