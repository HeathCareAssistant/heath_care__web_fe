import Search from '@/components/template/Search'
import { Button, Input } from '@/components/ui'
import { useState } from 'react'

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '#',
]

const SearchWrapper = () => {
    const [searchTerm, setSearchTerm] = useState<string>('')
    const [activeTab, setActiveTab] = useState<string>('name')

    const handleSearchWithAlphabet = (letter: string) => {
        setSearchTerm(letter)
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {/* Alphabet Navigation */}
            <div className="flex flex-auto flex-wrap md:flex-nowrap justify-center gap-2 mb-6">
                {alphabet.map((letter) => (
                    <Button
                        size="xs"
                        key={letter}
                        className="!px-0 md:!px-1 text-black text-xs md:text-sm hover:text-emerald-200 transition-colors border-none !bg-inherit"
                        onClick={() => handleSearchWithAlphabet(letter)}
                    >
                        {letter}
                    </Button>
                ))}
            </div>

            {/* Search Bar */}
            <div className="relative mb-4">
                <Input
                    type="text"
                    placeholder="Tìm kiếm theo tên thuốc"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-500 justify-center flex items-center" />
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-auto overflow-hidden w-full">
                <Button
                    onClick={() => setActiveTab('name')}
                    className={`flex-1 py-2 px-1 md:px-4 text-center ${
                        activeTab === 'name'
                            ? 'bg-white text-emerald-700'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    TÊN THUỐC
                </Button>
                <Button
                    onClick={() => setActiveTab('ingredient')}
                    className={`flex-1 py-2 px-1 md:px-4 text-center ${
                        activeTab === 'ingredient'
                            ? 'bg-white text-emerald-700'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    HOẠT CHẤT
                </Button>
                <Button
                    onClick={() => setActiveTab('pharmaceutical')}
                    className={`flex-1 py-2 px-1 md:px-4 text-center ${
                        activeTab === 'pharmaceutical'
                            ? 'bg-white text-emerald-700'
                            : 'bg-gray-100 text-gray-700'
                    }`}
                >
                    CSKD DƯỢC
                </Button>
            </div>
        </div>
    )
}

export default SearchWrapper
