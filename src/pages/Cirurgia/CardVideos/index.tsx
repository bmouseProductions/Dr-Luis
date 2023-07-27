interface Exercicios {
  title: string;
  iframeLink?: string;
}

export const CardVideos = ({ title, iframeLink }: Exercicios) => {
  return (
    <article className="card-video shadow-2xl m-auto h-[280px]">
      <div className="">
        <iframe
          className=""
          src={iframeLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="card_content m-auto h-[100px]">
        <h1 className="card_title text-lg py-3 px-14 text-center m-auto">
          {title}
        </h1>
      </div>
    </article>
  );
};

{
  /* <div className="m-auto py-20">
  <h1 className="text-3xl">{title}</h1>
  {exercicios.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
  <iframe
    width="560"
    height="315"
    src={video}
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  ></iframe>
</div>;
 */
}
