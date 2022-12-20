import React from "react";
import Articles from "../components/Article";
import axios from 'axios'


class ArticleList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount(){
    axios.get('http://localhost:8000/api/')
        .then(res => {
            console.log('res', res.data)
            this.setState({
                articles: res.data
            })
        })
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} />
      </div>
    );
  }
}

export default ArticleList;