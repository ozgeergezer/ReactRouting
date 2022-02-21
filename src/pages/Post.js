/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { BaseHttpClientService } from "../services/base-service";
import { PostApiClient } from "../services/post-service";
import _, { set } from "lodash";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";

function Post() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const [selectedPost, setSelectedPost] = useState(null); // modal kapalı
  const [selectedComments, setSelectedComments] = useState(null); // modal kapalı

  useEffect(async () => {
    // Get Örneği

    // eslint-disable-next-line no-unused-vars
    //let data2 = await PostApiClient.GetAllPosts("products");
    let data2 = await PostApiClient.GetAllPosts(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let data3 = await PostApiClient.GetCommentsByPostId(
      `https://jsonplaceholder.typicode.com/comments`,
      1
    );

    let data = await BaseHttpClientService.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    let orderedResponse = _.orderBy(data2, ["id"], ["asc"]);
    setPosts([...orderedResponse]);

    console.log("data", data);
    console.log("data2", data2);
    console.log("data3", data3);

    // Post Örneği

    //     let param = {
    //         id:1,
    //         title:'deneme',
    //     }
  }, []);
  //asdf
  const select = async (item) => {
    // setSelectedPost(item);
    let response = await PostApiClient.GetCommentsByPostId(
      "https://jsonplaceholder.typicode.com/comments",
      item.id
    );

    console.log("data", response);

    let orderedComments = _.orderBy(response, ["id"], ["asc"]);

    setComments([...orderedComments]);
  };

  return (
    <div>
      <Container>
        <Row>
          <Col>
            {" "}
            <ListGroup>
              {posts.map((item) => {
                return (
                  <ListGroup.Item onClick={() => select(item)} key={item.id}>
                    {item.title}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Col>
          <Col>
            {comments.map((item, index) => {
              return (
                <Card key={index} style={{ width: "35rem" }}>
                  <Card.Body>
                    <Card.Title>{item?.title}</Card.Title>
                    <Card.Text>{item?.body}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Post;
