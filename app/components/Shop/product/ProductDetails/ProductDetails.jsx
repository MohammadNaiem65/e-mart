import Details from './Details';
import ImageSlider from './ImageSlider';

export default function ProductDetails({ slug }) {
    const product = {
        user: '67986c8660c5024225bf3e76',
        childCategory: '67986d9860c5024225bf3e8a',
        name: 'product with category 241, which is 3 images url + dataUrl',
        skuCode: 'bt-h2ls3',
        manufacturerCode: 'brand-name-h2ls3',

        price: 800,
        discount: '20',
        vat: '2',
        tax: '5',

        coverPhoto:
            'https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg',
        thumbnail:
            'https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg',
        images: [
            'https://images.pexels.com/photos/748598/pexels-photo-748598.jpeg',
            'https://imgs.search.brave.com/g2Og1JV7JQJo4Fs1H-ZwfhmErrAFM9am0TFBsEVNBog/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4LzQ4LzU5LzQw/LzM2MF9GXzg0ODU5/NDAwM19nODJ3aFZY/TjRkbXlBVVExRVV5/OGt3djBFb2tVc1ll/Uy5qcGc',
            'https://imgs.search.brave.com/M3oACemmtjruEHLq5UmaezbJR4_A4vxFbGNpswhW0QE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NDgxNDg4Ny9waG90/by9hcHBsZS1haXJw/b2RzLXdpcmVsZXNz/LWJsdWV0b290aC1o/ZWFkcGhvbmVzLWFu/ZC1jaGFyZ2luZy1j/YXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1TSld5djdk/M29CWXlKQkJwRnpM/Q01XWDVfeWlUN3Np/VmI2M08tQ3Rxdi1R/PQ',
            'https://imgs.search.brave.com/N-0P7BYt5cXlBfxbZ13W_0BXltm0l5CgSE-fSVzU78s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI0/MjQ3OTgwOS9waG90/by9hcHBsZS1haXJw/b2RzLWFyZS1zZWVu/LWF0LXRoZS1zdG9y/ZS1pbi1rcmFrb3ct/cG9sYW5kLW9uLWF1/Z3VzdC0xMy0yMDIy/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1EaGU4QnJqQ1d6/U0JqSjlqcXZyd29u/MDZVUGZYTWNEVWx4/NTBhdHlGMm9NPQ',
        ],

        color: 'blue',
        size: 'lg',
        specification: 'product details goes here...',
        metadata: {
            title: 'title goes here',
            description: 'description goes here',
            keywords: ['keyword1', 'keyword2'],
        },
    };

    return (
        <section className='col-span-8 w-full flex items-start gap-x-3'>
            <ImageSlider images={product.images} />

            <Details />
        </section>
    );
}
