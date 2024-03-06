import Link from "next/link"
import { usePathname } from "next/navigation"

// active links in Link via usePathname()
export function Links() {
    const pathname = usePathname()

    return (
        <nav>
            <ul>
                <li>
                    <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        className={`link ${pathname === '/about' ? 'active' : ''}`}
                        href="/about"
                    >
                        About
                    </Link>
                </li>
            </ul>
        </nav>
    )
}