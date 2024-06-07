export default function Feature() {
  const features = [
    {
      id: 1,
      feature: "Kontrol Otomatis",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis mollitia sequi.",
      img: "feature.jpg",
    },
    {
      id: 2,
      feature: "Kontrol Otomatis",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis mollitia sequi.",
      img: "feature2.jpg",
    },
    {
      id: 3,
      feature: "Kontrol Otomatis",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis mollitia sequi.",
      img: "feature.jpg",
    },
    {
      id: 4,
      feature: "Kontrol Otomatis",
      descrption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis mollitia sequi.",
      img: "feature2.jpg",
    },
  ];

  return (
    <section>
      <div className="container mx-auto px-6 xl:px-24">
        <h2 className="font-bold text-4xl text-white text-center mb-24">
          Di Pitikku kamu bisa...
        </h2>
        <div className="grid grid-cols-4 gap-x-12 gap-y-9 ">
          {features.map((feature, index) => (
            <div key={index} className="card card-compact bg-green-800 shadow-xl">
              <figure className="h-44">
                <img
                  src={`./images/${feature.img}`}
                  alt={feature.feature}
                  className="size-full object-cover object-center"
                  loading="lazy"
                />
              </figure>
              <div className="card-body text-white">
                <h2 className="card-title">{feature.feature}</h2>
                <p>{ feature.descrption }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
