import PublicationItem from './PublicationItem'
import data from './data/publications.json'

const PublicationList = (): JSX.Element => {
    // 按年份排序，最新的在前，如果年份相同则按id排序
    const sortedData = [...data].sort((a, b) => {
        const yearA = parseInt(a.year);
        const yearB = parseInt(b.year);
        if (yearA !== yearB) {
            return yearB - yearA; // 年份降序
        }
        return b.id - a.id; // 如果年份相同，按id降序
    });

    return (
        <section className="w-full max-w-6xl mx-auto px-4 py-8" id="publications">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">Publications</h2>
            <div className="space-y-6">
              {sortedData.map((publication, index) => (
                <PublicationItem publication={publication} index={index} key={publication.id}/>
              ))}
            </div>
        </section>
    );
};

export default PublicationList;
