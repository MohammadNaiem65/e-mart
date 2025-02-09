'use client';

export default function PageFilters() {
    return (
        <div className='flex items-center gap-x-4'>
            <div>
                <label htmlFor='product-quantity'>Show:</label>
                <select
                    id='product-quantity'
                    name='product-quantity'
                    className='ml-2 px-2 py-1 bg-[#F4F4F4] rounded'
                >
                    <option value={15} selected>
                        15
                    </option>
                    <option value={20}>20</option>
                    <option value={25}>25</option>
                </select>
            </div>

            <div>
                <label htmlFor='sort'>Sort by:</label>
                <select
                    id='sort'
                    name='sort'
                    className='ml-2 px-2 py-1 bg-[#F4F4F4] rounded'
                >
                    <option value={15} selected className='[&_svg]:size-2'>
                        Name (A-Z)
                    </option>
                    <option value={15} selected>
                        Name (Z-A)
                    </option>
                    <option value={20}>Price (Low-High)</option>
                    <option value={20}>Price (High-Low)</option>
                    <option value={25}>Rating (High-Low)</option>
                    <option value={25}>Rating (Low-High)</option>
                </select>
            </div>
        </div>
    );
}
