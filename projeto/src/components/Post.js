import React from 'react';

import Comment from './Comment';

export default class Post extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            comments:[
                {text : "bom post!s"}
            ]
        }
    }


    render(){
        return (
            <div>
                <h2> {this.props.title}</h2>

                <form>
                    <input></input>
                    <button type="submit"> Comentar </button>
                </form>

                { this.state.comments.map((comment,index) =>{
                    return <Comment key={index} text={comment.text}></Comment>
                })}
            </div>

        )
    }
}


