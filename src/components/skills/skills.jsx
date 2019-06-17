import React from 'react';
import App from '../../App';
import Rubber from 'react-reveal/Jello';
import CV from 'react-ionicons/lib/MdFolder';


function Skills() {

	return (
		<Rubber>
			<App title='Skills' className='skills'>
				<div className='row mx-auto mt-5 '>
					<div className='col-md'>
						<h1 className='display-5 skill-header'>Front-end</h1>
						<div className='desc mx-auto  text-left'>
							<li>HTML</li>
							<li>CSS/SASS</li>
							<li>JQuery</li>
							<li>JavaScript/ES6+</li>
							<li>Ajax & Rest API's</li>
							<li>Responsive Design</li>
							<li>React</li>
							<li>Angular 2+/Typescript</li>
							<li>Cross-browser development</li>
							<li>CSS Preprocessor(SASS)</li>
							<a className='btn btn-light rounded-pill mt-4' href='/assets/cv.pdf'>
								View/Download CV <CV color='gray' fontSize='27px' />
							</a>
						</div>
					</div>
					<div className='col-md'>
						<h1 className='display-5 skill-header'>Back-end</h1>
						<div className='desc mx-auto text-left'>
							<li>Backend with Node</li>
							<li>ExpressJS</li>
							<li>JWT Authentication</li>
							<li>Passportjs Authentication</li>
							<li>Templating handlebars, ejs</li>
							<li>MVC pattern</li>
							<li>Database with SQL, MongoDB</li>
							<li>RESTFUL API Design</li>
							<li>NPM, Nodejs, Gulp etc.</li>

						</div>
					</div>
					<div className='col-md  mb-5'>
						<h1 className='display-5 skill-header'>Extras</h1>
						<div className='desc mx-auto text-left'>
							<li>Designing with Adobe XD</li>
							<li>Mobile Apps with React Native</li>
							<li>Object Oriented Cde</li>
							<li>Project management with Jira, Confluence, Git etc.</li>
							<li>TDD, Unit & Integration testing</li>
							<li>Oh, I speak like 7 languages too </li>
						</div>
					</div>
				</div>
			</App>
		</Rubber>
	);
}

export default Skills;
