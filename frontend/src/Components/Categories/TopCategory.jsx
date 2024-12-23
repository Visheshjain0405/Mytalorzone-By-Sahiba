import React from 'react'

function TopCategory() {
    const categories = [
        {
            title: "Sarees",
            image: "https://sudathi.com/cdn/shop/files/1731566605-900b666ebb2ba54c.jpg?v=1731566611&width=710", // Replace with actual image URL
        },
        {
            title: "Kurta Set",
            image: "https://sudathi.com/cdn/shop/files/1731564929-5028d7b32ab3a2ab.jpg?v=1731564935&width=710", // Replace with actual image URL
        },
        {
            title: "Ready To Wear",
            image: "https://sudathi.com/cdn/shop/files/1731564929-dcc3152cef51cfae.jpg?v=1731564935&width=710", // Replace with actual image URL
        },
        {
            title: "Jewellery",
            image: "https://sudathi.com/cdn/shop/files/1731564929-a54909f7d1ed287c.jpg?v=1731564935&width=710", // Replace with actual image URL
        },
    ];

    return (
        <div className="py-8 px-5">
            <h2 className="text-2xl font-semibold text-center mb-6">Top Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="border rounded-lg text-center shadow-lg"
                    >
                        <img
                            src={category.image}
                            alt={category.title}
                            className="w-full h-full object-cover rounded-md"
                        />
                        {/* <h3 className="text-lg font-bold">{category.title}</h3> */}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopCategory