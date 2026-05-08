import "./ImageRail.css";

export default function ImageRail({ images, alt }) {
  const list = Array.isArray(images) ? images : Object.values(images || {});

  if (!list.length) return null;

  if (list.length === 1) {
    return <img className="project-image-single" src={list[0]} alt={alt} />;
  }

  return (
    <div className="image-rail">
      {list.map((img, i) => (
        <img key={i} src={img} alt={`${alt} ${i + 1}`} />
      ))}
    </div>
  );
}
