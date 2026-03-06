export default function PostContent({ content }) {
  return (
    <div
      className="prose-neon max-w-3xl mx-auto"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
