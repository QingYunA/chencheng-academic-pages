import Image from 'next/image';

import ExtLink from './ExtLink';
import ProfileImage from './ProfileImage';
import personalInfo from './data/personalInfo.json'
import { Italic } from 'react-feather';

const About = (): JSX.Element => {
	return (
		<section className="grid gap-12 scroll-mt-24" id="about">
			<div className="flex justify-between">
				<div className="mr-8 hidden md:block rounded-md">
					<ProfileImage></ProfileImage>
				</div>
				<div className="flex flex-col max-w-xl w-full justify-evenly">
					<h1 className="text-4xl font-bold pb-8 md:pb-0">{personalInfo.name}</h1>
					<p>
					Associate Professor and Master's Supervisor
					of <ExtLink href="https://scce.ustb.edu.cn/">SCCE </ExtLink>
					, <ExtLink href="https://www.ustb.edu.cn/">USTB </ExtLink>.
					<br/>✉️<a className = "text-base font-serif text-gray-600 dark:invert"> {personalInfo.about.email}</a>	
					</p>
					{/* <p>
						Cheng Chen is currently working 
						at <ExtLink href="https://scce.ustb.edu.cn/">the School of Computer and Communication Engineering </ExtLink>,
						<ExtLink href="https://www.ustb.edu.cn/">University of Science and Technology Beijing </ExtLink>,
						has dedicated his research efforts to the fields of image semantic understanding and multimodal 3D reconstruction. 
					</p>
					<p className="text-base text-gray-600 italic dark:invert">
						He has undertaken projects funded by the National Natural Science Foundation of China and the China Postdoctoral Science Foundation, among others. 
						In the past three years, he has published over 20 papers as the first or corresponding author in SCI journals and CCF-A conferences, as well as one sole-authored monograph. 
						He has been recognized in the Beijing Municipal Young Talent Support Program and has received accolades such as the Outstanding Postdoctoral Fellow award at the University of Science and Technology Beijing.
					</p> */}
					<p className="text-base italic">
					My current research interests include medical semantic understanding and multi-modal 3D reconstruction. 
					Recently, I have authored over 20 papers in journals and at international conferences and is now in charge of National Natural Science Foundation of China and China Postdoctoral Science Foundation. 
					I was awarded the Beijing Young Talent Support Project, Dingxin Postdoctoral Researcher of Beijing University of Science and Technology, and Outstanding Postdoctoral Researcher.
					</p>
					<p className="text-base">
					陈诚，北京科技大学计算机与通信工程学院，副教授，硕士生导师；
					长期致力于图像语义理解、多模态三维重建等。
					主持国家自然科学基金、中国博士后科学基金等项目。
					近3年，研究成果以第一/通讯作者发表SCI论文/CCF A类会议20余篇，独著著作1部。
					入选北京市青年人才托举工程、北京科技大学鼎新博士后、优秀博士后等。
					</p>
					{/* <p className = "text-sm text-gray-600">
						Research Interest: {personalInfo.about.interest}
					</p>
					<p className = "text-sm text-gray-400">
						Under construction......<br/>
						Re-architecting this site with some modern web technologies.
					</p> */}
				</div>
			</div>
			<div>
			<p className="text-blue-600 font-bold text-xl mb-2">
			Internship and Graduate Students Opening: 
			</p>
			<p>
			
			We warmly welcome all students to apply for graduate studies and encourage undergraduate students to join our research team in advance to achieve early results!
			</p>
			<p>
			欢迎广大学子报考研究生，也欢迎本科生提前进组，早出成果！
			</p>
			
			</div>
		</section>
	);
};

export default About;
