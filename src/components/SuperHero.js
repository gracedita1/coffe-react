import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getTrendApi } from "../server/api";
import CardMovie from "./Card";

function SuperHero() {
  const [dataItem, setDataItem] = useState([]);
  console.log(dataItem);
  const getApi = useCallback(async () => {
    const data = await getTrendApi();
    setDataItem(data);
  }, []);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <div>
      <Container>
        <h1 className="text-white" id="superHero">
          TRENDING MOVIES
        </h1>
        <Row>
          {dataItem !== 0
            ? dataItem.map((item) => {
                return (
                  <CardMovie
                    key={item.mal_id}
                    title={item.title}
                    description={item.synopsis}
                    image={item.images.jpg.image_url}
                  />
                );
              })
            : null}
        </Row>
      </Container>
    </div>
  );
}
export default SuperHero;
