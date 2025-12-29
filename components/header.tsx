import React from 'react'

type HeaderProps = {
    brandName?: string
    items?: { label: string; href?: string }[]
}

const HeaderComponent: React.FC<HeaderProps> = ({
    brandName = 'My fist project',
    items = [
        { label: 'Home', href: '/' },
        { label: 'Features', href: '/features' },
        { label: 'Contact', href: '/contact' },
    ],
}) => {
    return (
        <header className="bg-white border-b border-gray-200">
            <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <a href="/" className="text-lg font-semibold text-gray-900 no-underline">
                        {brandName}
                    </a>

                    <ul className="flex items-center space-x-6 m-0 p-0 list-none">
                        {items.map((item) => (
                            <li key={item.label}>
                                <a
                                    href={item.href ?? '#'}
                                    className="text-gray-700 hover:text-gray-900 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderComponent
