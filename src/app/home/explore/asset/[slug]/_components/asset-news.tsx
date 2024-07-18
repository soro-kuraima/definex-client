export function AssetNews({ newsData }: { newsData: any }) {
  return (
    <div className="asset-news">
      <h2 className="text-2xl font-semibold">Related news</h2>
      <div className="news-stories">
        {newsData.map((news: any) => {
          return (
            <div key={news.id} className="news-story py-2 my-2 px-4">
              <a
                href={news.article_url}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2"
              >
                <img
                  src={news.image_url}
                  alt="news-image"
                  className="h-28 w-28"
                />
                <div className="news-details">
                  <h3 className="text-lg font-semibold">{news.title}</h3>
                  <p>{news.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
