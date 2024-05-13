export default function Content({ title, content, headerSize = 'text-xl' }: { title: string, content: string, headerSize: string }) {
  return (
    <div>
      <h1 className={`text-kpam-blue font-semibold ${headerSize}`}>{title}</h1>
      <p>{content}</p>
    </div>
  )
}