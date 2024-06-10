import styled from "styled-components";

const SectionWrapper = styled.div`
  h2{
    text-align: center;
    margin-bottom: 40px;
  }
`;

const NewsWrapper = styled.div`
  display: grid;
  gap: 40px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  .right-column{
    display: grid;
    gap: 34px;
  }
`;

const NewsItem = styled.div`
  img{
    max-width: 100%;
  }
  h3{
    margin:0;
    color: rgb(52, 53, 52);
    font-size: 1.23rem;
    ${props => !props.horizontal && `
      margin-top: 20px;
    `}
  }
  a{
    text-decoration:none;
  }
  a:hover{
    text-decoration: underline;
  }
  p{
    font-size: 15px;
  }
  ${props => props.horizontal && `
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
    img{
      width: 100%;
      @media (min-width: 768px) {
        width: 245px;
      }
    }
    @media (min-width: 768px) {
      gap: 30px;
      grid-template-columns: 245px 1fr;
    }
  `}
`;

export default function NewsSection({title='Club news',news}) {
  return (
    <SectionWrapper>
      <h2>{title}</h2>
      <NewsWrapper>
        <div>
          <NewsItem>
            <div>
              <img src={news?.[0]?.img} alt=""/>
            </div>
            <div>
              <a href={news?.[0]?.link}>
                <h3>{news?.[0]?.title}</h3>
              </a>
              <p>{news?.[0]?.description}</p>
            </div>
          </NewsItem>
        </div>
        <div className="right-column">
          {news?.length > 1 && news.slice(1).map(newsItem => (
            <NewsItem horizontal={true} key={newsItem?.title}>
              <div>
                <img src={newsItem?.img} alt=""/>
              </div>
              <div>
                <a href={newsItem?.link}>
                  <h3>{newsItem?.title}</h3>
                </a>
                <p>{newsItem?.description}</p>
              </div>
            </NewsItem>
          ))}
        </div>
      </NewsWrapper>
    </SectionWrapper>
  );
}