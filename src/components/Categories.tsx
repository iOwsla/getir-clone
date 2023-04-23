import { useState, useEffect } from 'react'
import data from '../api/categories.json';
import Category from './ui/Category';

interface ICategory {
    id: number,
    title: string,
    image: string
}
function Categories() {
    const [categories, setCategories]: any = useState([]);

    useEffect(() => {
        console.log(data);
        
        setCategories(data);
    }, []);


    return (
        <div className='bg-white py-4'>
            <div className='container mx-auto'>
                <h3 className='text-sm font-semibold'>Kategoriler</h3>

                <div className='grid grid-cols-10'>
                    {categories && categories.map((category: ICategory, index: number) => <Category key={index} category={category as ICategory}></Category>)}
                </div>
            </div>
        </div>
    )
}

export default Categories