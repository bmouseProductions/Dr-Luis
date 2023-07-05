interface Exercicios {
  title: string;
  exercicios: string[];
  iframeLink?: string;
}

export const CardVideos = ({ title, exercicios, iframeLink }: Exercicios) => {
  return (
    <article className="card-video shadow-2xl m-auto">
      <div className="">
        <iframe
          className=""
          src={iframeLink}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="card_content bg-slate-500">
        <h1 className="card_title text-lg mb-2 pe-14 bg-green-500">{title}</h1>
        <span className="card_subtitle ">
          {exercicios.map((item, index) => (
            <li className="font-semibold text-sm" key={index}>
              {item}
            </li>
          ))}
        </span>
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
