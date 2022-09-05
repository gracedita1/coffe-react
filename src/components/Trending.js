import { useCallback, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";

function Trending() {
  const getApi = useCallback(async () => {
    const response = await fetch(
      "https://api.jikan.moe/v4/recommendations/anime"
    );
    console.log(response);
  }, []);

  useEffect(() => {
    getApi()
  }, [getApi]);

  return (
    <div>
      <Container>
        <br />
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <Row>
          <Card />
        </Row>
      </Container>
    </div>
  );
}
export default Trending;
