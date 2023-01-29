import './InputForm.css';
import { useEffect, useState } from 'react';

const initalInput = {
    name: "",
    // email: "",
    // number: "",
    // school: "",
    // year: "",
    // major: "",
    // skills: {},
    // languages: {},
    // night: "",
    // goal: "",
    // takeaway: "",
    // time: "",
    // location: "",
    // myers: ""
}
const Dropdown = ({ open, trigger, menu }) => {
    return (
        <div className="dropdown">
            {trigger}
            {open ? (
                <ul className="menu">
                    {menu.map((menuItem, index) => (
                        <li key={index} className="menu-item">{menuItem}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
const CheckedList = ({list}) => {
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };
    const isChecked = (item) => checked.includes(item) ? "checked-item" : "not-checked-item";
    var checkedItems = checked.length ? checked.reduce((total, item) => {
        return total + ", " + item;
      }) : "";
    list.map((item, index) => (
        <div key={index}>
            <input value={item} type="checkbox" onChange={handleCheck} />
            <span className={isChecked(item)}>{item}</span>
        </div>
    ))
}

function MyForm() {
    const [inputs, setInputs] = useState(initalInput);
    // const [schoolDropdown, setSchoolDropdown] = useState(false);
    // const [yearDropdown, setYearDropdown] = useState(false);
    // const [formData, setFormData] = useState({})


    async function handleSubmit() {
        console.log("HI");

            const response = await fetch("http://127.0.0.1:5000/inputs", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                name: inputs.name
              }),
            })
            .then (response => response.json())
            .then (response => console.log(response))
            .then (response => setInputs(response))
            .then (data => console.log(data))
            .catch(err => console.log(err.message))
            
        }
        
        // const handleSubmit = async(body) => {
        //     console.log("Here");
        //     await fetch("http://127.0.0.1:5000/inputs",{
        //         method: 'POST',
        //         body: JSON.stringify(inputs),
        //         mode: 'cors',
        //         headers: {'Content-type': 'application/json'},
        //     }).then ((response) => response.json())
        //     .then ((data) => setInputs(inputs))
        //     .catch((err) => {
        //         console.log(err.message);
        //     }, [inputs]);
        // }
    
    // const handleSchoolDropdown = () => {
    //     setSchoolDropdown(!schoolDropdown);
    // }
    // const handleYearDropdown = () => {
    //     setYearDropdown(!yearDropdown);
    // }

    return (
        <form onSubmit={handleSubmit}>
            <div className='input-line'>
                <h3 className='title'>Name:
                    <input
                        type="text"
                        name="name"
                        value={inputs}
                        onChange={event => setInputs(event.target.value)}
                        className='input-box'
                    />
                </h3>
            </div>
            
            {/* <div className='input-line'>
                <h3 className='title'>Email:
                    <input
                        type="text"
                        name="age"
                        value={inputs.email}
                        onChange={e => setInputs(values => ({ ...values, email: e.value }))}
                        className='input-box'
                    />
                </h3>
            </div>
            <div className='input-line'>
                <h3 className='title'>Phone Number:
                    <input
                        type="text"
                        name="number"
                        value={inputs.number}
                        onChange={e => setInputs(values => ({ ...values, number: e.value }))}
                        className='input-box'
                    />
                </h3>
            </div> */}
            {/* <div className='input-line'>
                <h3 className='title'>School:
                    <Dropdown
                        open={schoolDropdown}
                        trigger={<button onClick={handleSchoolDropdown}>Dropdown</button>}
                        menu={[
                            <button onClick={e => setInputs(values => ({ ...values, school: 'University of Florida' }))}>University of Florida</button>,
                            <button onClick={e => setInputs(values => ({ ...values, school: 'University of Central Florida' }))}>University of Central Florida</button>,
                            <button onClick={e => setInputs(values => ({ ...values, school: 'Other' }))}>Other</button>,
                        ]}
                    />
                </h3>
            </div>
            <div className='input-line'>
                <h3 className='title'>Year in School:
                    <Dropdown
                        open={yearDropdown}
                        trigger={<button onClick={handleYearDropdown}>Dropdown</button>}
                        menu={[
                            <button onClick={e => setInputs(values => ({ ...values, year: 'Freshman' }))}>Freshman</button>,
                            <button onClick={e => setInputs(values => ({ ...values, year: 'Sophomore' }))}>Sophomore</button>,
                            <button onClick={e => setInputs(values => ({ ...values, year: 'Junior' }))}>Junior</button>,
                            <button onClick={e => setInputs(values => ({ ...values, year: 'Senior' }))}>Senior</button>,
                            <button onClick={e => setInputs(values => ({ ...values, year: 'Super-Senior' }))}>Super-Senior</button>,
                        ]}
                    />
                </h3>
            </div> */}
            {/* <div className='input-line'>
                <h3 className='title'>Major:
                    <Dropdown
                        open={yearDropdown}
                        trigger={<button onClick={handleYearDropdown}>Dropdown</button>}
                        menu={[
                            <button onClick={e => setInputs(values => ({ ...values, major: 'Computer Science' }))}>Computer Science</button>,
                            <button onClick={e => setInputs(values => ({ ...values, major: 'Computer Engineering' }))}>Computer Engineering</button>,
                            <button onClick={e => setInputs(values => ({ ...values, major: 'Digital Arts and Sciences' }))}>Digital Arts and Sciences</button>,
                            <button onClick={e => setInputs(values => ({ ...values, major: 'Other Engineering' }))}>Other Engineering</button>,
                            <button onClick={e => setInputs(values => ({ ...values, major: 'Other Business' }))}>Other Business</button>,
                        ]}
                    />
                </h3>
            </div>
            <div className='input-line'>
                <h3 className='title'>Skills:
                    <Dropdown
                        open={yearDropdown}
                        trigger={<button onClick={handleYearDropdown}>Dropdown</button>}
                        menu={[
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Web Development' }))}>Web Development</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Animation' }))}>Animation</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Game Development' }))}>Game Development</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Machine Learning' }))}>Machine Learning</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Virtual Reality' }))}>Virtual Reality</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Application Development' }))}>Application Development</button>,
                            <button onClick={e => setInputs(values => ({ ...values, skills: 'Mobile Development' }))}>Mobile Developmet</button>,
                        ]}
                    />
                </h3>
            </div> */}
            {/* <div className='input-line'>
                <h3 className='title'>Skills:
                    <div className="list-container">
                        
                    </div>
                </h3>
            </div> */}
        
            <div className='input-line'>
                <input type="button" onClick={e => handleSubmit()} />
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