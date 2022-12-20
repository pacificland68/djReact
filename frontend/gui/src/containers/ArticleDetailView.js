import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card } from "antd";
import { useParams } from 'react-router-dom';


const ArticleDetail = () => {
  const [article, setArticle] = useState({})
  const { articleID } = useParams();
  console.log('articleID', articleID)

  useEffect(() => {
    console.log('props', articleID)
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
        setArticle(res.data)
    });
  },[])

    return (
      <div>
        <Card title={article.title}>
          <p> {article.content} </p>
        </Card>
      </div>
    );
}

export default ArticleDetail;