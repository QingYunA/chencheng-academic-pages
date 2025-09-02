import {ReactNode} from 'react';
import ExtLink from './ExtLink';
import IconImage from './IconImage';
import personalInfo from './data/personalInfo.json';

interface BoxProps {
    href: string;
    label: string;
    onClick?: () => void;
    children: ReactNode;
}

const Box = ({href, label, onClick, children}: BoxProps) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="items-center justify-center cursor-pointer transition-colors rounded-md select-none w-7 h-7"
        onClick={onClick}>
        {children}
    </a>
);

const TextBox = ({href, label, text}: {href: string, label: string, text: string}) => (
    <a target="_blank"
        rel="noopener noreferrer"
        href={href}
        aria-label={label}
        className="flex items-center justify-center cursor-pointer transition-colors hover:bg-gray-300 dark:hover:bg-gray-600 rounded-md select-none px-2 h-7 text-xs font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap"
        title={label}>
        {text}
    </a>
);

const SupportingBox = (): JSX.Element => {
    return (
        <div className="flex items-center gap-3 dark:invert">
            <TextBox href="https://scce.ustb.edu.cn/" label="School Homepage" text="School"/>
            <TextBox href="https://www.ustb.edu.cn/" label="University Homepage" text="University"/>
            <Box href={personalInfo.socialMedia.GoogleScholar} label="Google Scholar Profile">
                <IconImage path='/images/icons8-google-scholar.svg' name="GoogleScholar"/>
            </Box>
        </div>
        );
};

export default SupportingBox;



