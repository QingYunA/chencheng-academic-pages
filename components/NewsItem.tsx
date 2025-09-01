import ExtLink from './ExtLink';

interface NewsData {
    id: number;
    content: string;
    date: string;
    isNew: boolean;
    links: Array<{
        name: string;
        url: string;
    }>;
}

interface Props {
    news: NewsData;
    index: number;
}

const NewsItem = ({ news, index }: Props): JSX.Element => {
    return (
        <div className="mt-4 mb-8">
            <div className="flex items-center gap-2 mb-2">
                {news.isNew && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                        NEW
                    </span>
                )}
                <span className="text-base text-serif text-gray-400">{news.date}</span>
                
                <p className="font-serif text-gray-600 leading-relaxed dark:invert">
                    {news.content}
                </p>
            </div>
            {/* <h3 className="text-base font-semibold text-gray-800 mb-2">
                {news.title}
            </h3> */}
            
            {news.links.length > 0 && (
                <p className="text-gray-500 flex justify-end text-sm">
                    {news.links.map((linkItem, idx) => (
                        <ExtLink href={linkItem.url} key={idx}>
                            [{linkItem.name}] &nbsp;
                        </ExtLink>
                    ))}
                </p>
            )}
        </div>
    );
};

export default NewsItem;
