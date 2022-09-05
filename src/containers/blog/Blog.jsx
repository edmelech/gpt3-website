import React from 'react'
import './blog.css';
import { Article } from '../../components/'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'

const Blog = () => (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, We are blogging about it. 
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <Article imgUrl={blog01} />
      </div>
      <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='1st Sep, 2022' title="GPT3 and Open AI is the future. Let's explore it. " />
          <Article imgUrl={blog03} date='1st Sep, 2022' title="GPT3 and Open AI is the future. Let's explore it. "/>
          <Article imgUrl={blog04} date='1st Sep, 2022' title="GPT3 and Open AI is the future. Let's explore it. "/>
          <Article imgUrl={blog05} date='1st Sep, 2022' title="GPT3 and Open AI is the future. Let's explore it. "/>
      </div>
    </div>
  );

export default Blog;