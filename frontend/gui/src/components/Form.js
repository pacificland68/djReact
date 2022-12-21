import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios'

const CustomForm = (props) => {
  const onFinish = (values, requestType, articleID) => {
    console.log('Success:', values, requestType, articleID);

    switch (requestType){
      case 'post':
        axios.post('http://localhost:8000/api/', {
          title: values.title,
          content: values.content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        break
      case 'put':
        axios.put(`http://localhost:8000/api/${articleID}/`, {
          title: values.title,
          content: values.content
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        break
      default:
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      layout="vertical"
      onFinish={values => onFinish(values,props.requestType,props.articleID)}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your title!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please input your content!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          {props.btnText}
        </Button>
      </Form.Item>
    </Form>
  );
};
export default CustomForm;