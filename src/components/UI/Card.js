import './card.css';

const Card = (props) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-14 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {props.data.map((item) => (
                    <a key={item.id} href={ item.link } title={ item.title } className="group">
                        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                            src={ item.img }
                            alt=""
                            className="h-full md:h-52 w-full object-cover object-center group-hover:scale-125 duration-700"
                            />
                        </div>
                        <div className='grid grid-cols-5 sm:grid-cols-4 xl:grid-cols-5 gap-x-1 lg:gap-x-1.5 xl:gap-x-1 px-1'>
                            { item.tools.map((tool) => (
                                <p className={`${ tool.programming.name } text-xs text-center duration-700 group-hover:opacity-100 opacity-5 group-hover:translate-y-4`}>#{ tool.programming.name }</p>
                            ))}
                        </div>
                        <h3 className="mt-4 text-lg font-medium text-gray-900/80 group-hover:text-gray-900 duration-300">{item.title}</h3>
                        <p className="mt-1 text-sm text-gray-600 group-hover:text-gray-700">{item.date}</p>
                    </a>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Card;