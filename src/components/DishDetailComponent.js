import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function DishDetail({ dish }) {
  const renderDish = (val) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={val.image} value={val.name} />
          <CardBody>
            <CardTitle>{val.name}</CardTitle>
            <CardText>{val.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  };

  const renderComments = (val) => {
    if (val != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {val.map((comment) => {
              return (
                <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>
                    -- {comment.author},{" "}
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "2-digit",
                    }).format(new Date(Date.parse(comment.date)))}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  return dish ? (
    <div className="container">
      <div className="row">
        {renderDish(dish)}
        {renderComments(dish.comments)}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default DishDetail;

