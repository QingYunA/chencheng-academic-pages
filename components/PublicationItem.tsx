import ExtLink from './ExtLink';

interface Props {
    publication: any;
    index: number;
}

const PublicationItem = ({publication, index}: Props): JSX.Element => {
    // 高亮显示 C Chen 或 Cheng Chen 的函数
    const highlightAuthor = (authorString: string) => {
        const parts = authorString.split(/(C Chen|Cheng Chen)/g);
        return parts.map((part, idx) => {
            if (part === 'C Chen' || part === 'Cheng Chen') {
                return (
                    <span key={idx} className="font-semibold text-gray-800 dark:text-gray-100 border-b-2 border-blue-500 dark:border-blue-400 pb-0.5">
                        {part}
                    </span>
                );
            }
            return part;
        });
    };

    return (
        <div className="shadow-lg dark:shadow-gray-800/50 mb-8 mx-auto lg:w-11/12 lg:flex lg:flex-row bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            {/* 左侧图片 */}
            <div className="lg:w-5/12 w-full flex-shrink-0 bg-white dark:bg-gray-700 flex items-center justify-center">
                <img 
                    className="w-full h-auto max-h-64 lg:max-h-48 object-contain" 
                    src={publication.image} 
                    alt={publication.title}
                    onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/publications/default.png'; // 默认图片
                    }}
                />
            </div>
            
            {/* 右侧内容 */}
            <div className="lg:w-7/12 w-full p-6 flex flex-col justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 leading-tight">
                        {publication.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {highlightAuthor(publication.author)}
                    </p>
                    
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {publication.conference}
                    </p>
                    
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4">
                        {publication.year}
                    </p>
                </div>
                
                {/* 链接部分 */}
                <div className="flex flex-wrap gap-2">
                    {publication.links.map((linkItem: any, idx: any) => (
                        linkItem.url ? (
                            <ExtLink 
                                href={linkItem.url} 
                                key={idx}
                                className="inline-block px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                            >
                                {linkItem.name}
                            </ExtLink>
                        ) : (
                            <span 
                                key={idx}
                                className="inline-block px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-400 dark:text-gray-500 rounded-full cursor-not-allowed"
                            >
                                {linkItem.name}
                            </span>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PublicationItem;
