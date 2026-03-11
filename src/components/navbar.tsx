import { DATA } from "@/data/resume";
import Link from "next/link";

export default function Navbar() {
return (
<div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
<div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background opacity-0 backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
<nav className="flex max-w-fit items-center gap-4 pointer-events-auto relative mx-auto h-full px-6 py-2 bg-white/80 dark:bg-black/80 border rounded-full shadow-lg backdrop-blur-md">
{DATA.navbar.map((item) => (
<Link
key={item.href}
href={item.href}
className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
>
{item.label}
</Link>
))}
{Object.entries(DATA.contact.social)
.filter(([_, social]) => social.navbar)
.map(([name, social]) => (
<a
key={name}
href={social.url}
target="_blank"
rel="noopener noreferrer"
className="text-sm font-bold text-gray-700 dark:text-gray-200 hover:text-blue-500 transition-colors"
>
{name}
</a>
))}
</nav>
</div>
);
}
