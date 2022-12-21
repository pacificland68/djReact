import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card, Form, Button } from "antd";
import { useParams, useHistory } from 'react-router-dom';
import CustomForm from "../components/Form"


const ArticleDetail = (props) => {
  const [article, setArticle] = useState({})
  const { articleID } = useParams();
  const history = useHistory()
  console.log('articleID', articleID)

  useEffect(() => {
    console.log('props', articleID)
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then(res => {
        setArticle(res.data)
    });
  },[])

  const onFinish = (values)=> {
    console.log('here is delete ')
    axios.delete(`http://localhost:8000/api/${articleID}`)
    history.push('/')
  }

    return (
      <div>
        <Card title={article.title}>
          <p> {article.content} </p>
        </Card>
        <CustomForm requestType="put" articleID={articleID} btnText="update"/>
        <Form 
          onFinish={onFinish}>
          <Button type="danger" htmlType="submit">Delete</Button>
        </Form>
      </div>
    );
}

export default ArticleDetail;