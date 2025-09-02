import {NextPage} from 'next';

import About from '../components/About';
import NewsList from '../components/NewsList';
import TeamList from '../components/TeamList';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <NewsList/>
        <TeamList/>
        {/* <PublicationList/>
        <Teaching/>
        <Education/> */}
    </>
);

export default Index;
