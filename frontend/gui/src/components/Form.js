import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import { useForm } from 'react-hook-form';


const CustomForm = () => {
  const {registry, handleSubmit} = useForm()

  const onSubmit = (data) => {
    // event.preventDefault()
    // const title = event.target.elements.title.value
    // const content = event.target.elements.title.value
  
    console.log(data)
  }
  
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Item label="Title">
        <Input name='title' placeholder="Put a title here" />
      </Form.Item>
      <Form.Item label="Content">
        <Input name='content' placeholder="Enter some content..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType='submit'>Submit</Button>
      </Form.Item>
    </Form>
  );
};
export default CustomForm;