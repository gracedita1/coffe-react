import React, { useCallback, useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { getSeasonNow } from "../server/api";
import CardMovie from "./Card";

function Trending() {
  const [dataItem, setDataItem] = useState([]);
  console.log(dataItem);
  const getApi = useCallback(async () => {
    const data = await getSeasonNow();
    setDataItem(data);
  }, []);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <div>
      <Container>
        <h1 className="text-white">TRENDING MOVIES</h1>
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
export default Trending;
