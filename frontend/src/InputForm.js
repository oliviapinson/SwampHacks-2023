import './InputForm.css';
import { useState } from 'react';

const initalInput = {
    name: "",
    email: "",
    number: "",
    school: "",
    year: "",
    major: "",
    skills: "",
    languages: "",
    night: "",
    goal: "",
    takeaway: "",
    time: "",
    location: "",
    myers: ""
}
const Dropdown = ({ open, trigger, menu }) => {
    return (
        <div className="dropdown">
            {trigger}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={menuItem} className="menu-item">{menuItem}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};


function MyForm() {
    const [inputs, setInputs] = useState(initalInput);
    const [schoolDropdown, setSchoolDropdown] = useState(false);
    const [yearDropdown, setYearDropdown] = useState(false);
    const [majorDropdown, setMajorDropdown] = useState(false);

    const skillsList = ['Web Development', 'Animation', 'Game Development', 'Machine Learning', 'Virtual Reality', 'Application Developmemt', 'Mobile Development'];
    const [checkedSkillState, setCheckedSkillState] = useState(
        new Array(skillsList.length).fill(false)
    );

    const languageList = ['JavaScript', 'Python', 'Java', 'C#', 'C++', 'PHP', 'Ruby', 'Swift', 'GO', 'TypeScript', 'MongoDB', 'Express.js', 'React.js', 'Node.js', 'Redux'];
    const [checkedLangState, setCheckedLangState] = useState(
        new Array(languageList.length).fill(false)
    );

    const [nightDropdown, setNightDropdown] = useState(false);

    const goalList = ['Best Overall', 'People\'s Choice', 'Theme', 'Sponsor\'s Goal'];
    const [checkedGoalState, setCheckedGoalState] = useState(
        new Array(goalList.length).fill(false)
    );

    const [takeawayDropdown, setTakeawayDropdown] = useState(false);
    const [timeDropdown, setTimeDropdown] = useState(false);
    const [myersDropdown, setMyersDropdown] = useState(false);

    console.log(inputs);
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("HI");
        //alert(inputs);
    }
    const handleSchoolDropdown = () => {
        setSchoolDropdown(!schoolDropdown);
    }
    const handleYearDropdown = () => {
        setYearDropdown(!yearDropdown);
    }
    const handleMajorDropdown = () => {
        setMajorDropdown(!majorDropdown);
    }
    const handleSkillOnChange = (position) => {
        const updatedCheckedState = checkedSkillState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedSkillState(updatedCheckedState);
        var checkedItems = checkedSkillState.reduce((total, item, index) => {
            total = index === 1 ? "" : total;
            console.log(index);
            var r = item ? total + skillsList[index] + ", " : total;
            console.log(r);
            return r;
        });
        console.log(checkedItems);
        setInputs(values => ({ ...values, skills: checkedItems }));
    };
    const handleLangOnChange = (position) => {
        const updatedCheckedState = checkedLangState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedLangState(updatedCheckedState);
        var checkedItems = checkedLangState.reduce((total, item, index) => {
            total = index === 1 ? "" : total;
            console.log(index);
            var r = item ? total + languageList[index] + ", " : total;
            console.log(r);
            return r;
        });
        console.log(checkedItems);
        setInputs(values => ({ ...values, languages: checkedItems }));
    };
    const handleNightDropdown = () => {
        setNightDropdown(!nightDropdown);
    }
    const handleGoalOnChange = (position) => {
        const updatedCheckedState = checkedGoalState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedGoalState(updatedCheckedState);
        var checkedItems = checkedGoalState.reduce((total, item, index) => {
            total = index === 1 ? "" : total;
            console.log(index);
            var r = item ? total + goalList[index] + ", " : total;
            console.log(r);
            return r;
        });
        console.log(checkedItems);
        setInputs(values => ({ ...values, goal: checkedItems }));
    };
    const handleTakeawayDropdown = () => {
        setTakeawayDropdown(!takeawayDropdown);
    }
    const handleTimeDropdown = () => {
        setTimeDropdown(!timeDropdown);
    }
    const handleMyersDropdown = () => {
        setMyersDropdown(!myersDropdown);
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Name: </h3>
                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={e => setInputs(values => ({ ...values, name: e.value }))}
                        className='input-box grid-element-d'
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Email: </h3>
                    <input
                        type="text"
                        name="age"
                        value={inputs.email}
                        onChange={e => setInputs(values => ({ ...values, email: e.value }))}
                        className='input-box grid-element-d'
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Phone Number: </h3>
                    <input
                        type="text"
                        name="number"
                        value={inputs.number}
                        onChange={e => setInputs(values => ({ ...values, number: e.value }))}
                        className='input-box grid-element-d'
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>School: </h3>
                    <Dropdown
                        open={schoolDropdown}
                        trigger={<button onClick={handleSchoolDropdown} className='grid-element-d menu-item'>{inputs.school}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, school: 'University of Florida' }))}>University of Florida</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, school: 'University of Central Florida' }))}>University of Central Florida</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, school: 'Other' }))}>Other</button>,
                        ]}
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Year in School: </h3>
                    <Dropdown
                        open={yearDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleYearDropdown}>{inputs.year}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, year: 'Freshman' }))}>Freshman</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, year: 'Sophomore' }))}>Sophomore</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, year: 'Junior' }))}>Junior</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, year: 'Senior' }))}>Senior</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, year: 'Super-Senior' }))}>Super-Senior</button>,
                        ]}
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Major: </h3>
                    <Dropdown
                        open={majorDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleMajorDropdown}>{inputs.major}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, major: 'Computer Science' }))}>Computer Science</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, major: 'Computer Engineering' }))}>Computer Engineering</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, major: 'Digital Arts and Sciences' }))}>Digital Arts and Sciences</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, major: 'Other Engineering' }))}>Other Engineering</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, major: 'Other Business' }))}>Other Business</button>,
                        ]}
                    />
            </div>
            <div className='input-line'>
                <h3 className='title'>Skills:
                    <div className="list-container">
                        {skillsList.map((name, index) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedSkillState[index]}
                                        onChange={() => handleSkillOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            );
                        })}
                    </div>
                </h3>
            </div>
            <div className='input-line'>
                <h3 className='title'>Languages:
                    <div className="list-container">
                        {languageList.map((name, index) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedLangState[index]}
                                        onChange={() => handleLangOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            );
                        })}
                    </div>
                </h3>
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Are you ... </h3>
                    <Dropdown
                        open={nightDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleNightDropdown}>{inputs.night}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, night: 'Night Owl' }))}>Night Owl</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, night: 'Morning Person' }))}>Morning Person</button>,
                        ]}
                    />
            </div>
            <div className='input-line'>
                <h3 className='title'>Which project goal do you want to aim for?
                    <div className="list-container">
                        {goalList.map((name, index) => {
                            return (
                                <div>
                                    <input
                                        type="checkbox"
                                        id={`custom-checkbox-${index}`}
                                        name={name}
                                        value={name}
                                        checked={checkedGoalState[index]}
                                        onChange={() => handleGoalOnChange(index)}
                                    />
                                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                                </div>
                            );
                        })}
                    </div>
                </h3>
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>What do you want to get out of the hackathon? </h3>
                    <Dropdown
                        open={takeawayDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleTakeawayDropdown}>{inputs.takeaway}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, takeaway: 'Practice' }))}>To practice. </button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, takeaway: 'Learn' }))}>To learn.</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, takeaway: 'Win' }))}>To win!</button>,
                        ]}
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>How much time do you want to spend on the hackathon? </h3>
                    <Dropdown
                        open={timeDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleTimeDropdown}>{inputs.time}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, time: '1-8 hours' }))}>1-8 hours </button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, time: '8-16 hours' }))}>8-16 hours</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, time: '16-24 hours' }))}>16-24 hours</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, time: '24-36 hours' }))}>24-36 hours</button>,
                        ]}
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>Do you prefer... </h3>
                    <Dropdown
                        open={nightDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleNightDropdown}>{inputs.night}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, night: 'In-person' }))}>In-person</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, night: 'Remote' }))}>Remote</button>,
                        ]}
                    />
            </div>
            <div className='input-line input-box-header'>
                <h3 className='title grid-element-h'>What is your Myers-Briggs personality type? </h3>
                    <Dropdown
                        open={myersDropdown}
                        trigger={<button className='grid-element-d menu-item' onClick={handleMyersDropdown}>{inputs.myers}</button>}
                        menu={[
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ISTJ' }))}>ISTJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ISFJ' }))}>ISFJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'INFJ' }))}>INFJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'INTJ' }))}>INTJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ISTP' }))}>ISTP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ISFP' }))}>ISFP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'INFP' }))}>INFP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'INTP' }))}>INTP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ESTJ' }))}>ESTJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ESFJ' }))}>ESFJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ENFJ' }))}>ENFJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ENTJ' }))}>ENTJ</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ESTP' }))}>ESTP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ESFP' }))}>ESFP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ENFP' }))}>ENFP</button>,
                            <button className='menu-item' onClick={e => setInputs(values => ({ ...values, myers: 'ENTP' }))}>ENTP</button>,
                        ]}
                    />
            </div>
            <div className='input-line'>
                <button className="menu-item" onClick={() => handleSubmit()}> Submit </button>
            </div>
        </form>
    )
}

export default function InputForm() {
    return (
        <section>
            <MyForm />
        </section>
    );
}