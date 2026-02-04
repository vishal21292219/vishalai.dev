import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full border-b px-8 py-4 flex justify-between">
      <Link href="/">vishalai.dev</Link>
      <div className="flex gap-6">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  )
}
