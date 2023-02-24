export default function Link({ data = "text or jsx", id, url }) {
  if (url) {
    return (
      <a href={url} className="link" id={id} target="_blank">
        {data}
      </a>
    );
  }
  return null;
}
