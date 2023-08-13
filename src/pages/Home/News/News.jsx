import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const News = () => {
    const news=useLoaderData();
    const {_id,title,details,image_url,category_id}=news;
    return (
        <Card className='mt-4'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Link to={`/category/${category_id}`}><Button variant="primary"><FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
            </Card.Body>
        </Card>
    );
};

export default News;