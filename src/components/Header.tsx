export default function Header({ title }: { title: string }) {

  return (
      <header className="text-white font-semibold text-center text-4xl py-8">
        {title}
      </header>
  )
}