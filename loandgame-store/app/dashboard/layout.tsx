import MobileHeader from './MobileHeader'

interface Prop {
    children: React.ReactNode
}

export default function Layout({ children, }: Prop) {
    return (
        <section className="bg-gray-100 font-family-karla flex">
            <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                <div className="p-6">
                    <a href="index.html" className="text-white text-5x font-semibold uppercase hover:text-gray-300">Loandgame store</a>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <i className="fas fa-plus mr-3"></i>
                        Mi tienda
                    </button>
                </div>
                <nav className="text-white text-base font-semibold pt-3">
                    <a href="index.html" className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                        <i className="fas fa-tachometer-alt mr-3"></i>
                        Juegos
                    </a>
                    <a href="blank.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-sticky-note mr-3"></i>
                        Cliente
                    </a>
                    <a href="tables.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-table mr-3"></i>
                        Préstamo
                    </a>
                    <a href="forms.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-align-left mr-3"></i>
                        Estudio
                    </a>
                    <a href="tabs.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-tablet-alt mr-3"></i>
                        Colaboradores
                    </a>
                    <a href="calendar.html" className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                        <i className="fas fa-calendar mr-3"></i>
                        Categoria
                    </a>
                </nav>
                <a href="#" className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                    <i className="fas fa-arrow-circle-up mr-3"></i>
                    Cerrar sesion
                </a>
            </aside>

            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">{ children }</main>
            </div>
        </section>
    )
}