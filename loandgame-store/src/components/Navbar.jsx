import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-gray-950 py-5 mb-2">
        <div class="max-w-screen-xl px-4 py-3 mx-auto">
            <div class="flex items-center">
                <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                    <li>
                        <Link href="/store/game/new" class="text-gray-300 dark:text-white hover:underline" aria-current="page">
                            <h1 className="text-2xl font-bold">New Game</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  );
};