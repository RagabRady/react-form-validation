# reactjs-form-validation

reactjs-form-validation is very easy to use. It’s working with form control properties like (required – pattern – min -max – minLength - maxLength………..etc) and it isn’t used only with form tag. It can be used else with a div that contain a collection of inputs.

## Usage

1.  Install

            npm install reactjs-form-validation --save

2.  Import
    import { checkFormValidation,chckInputValidation } from 'reactjs-form-validation';

## Example

```javascript
import React, { FC, useRef, useState } from "react";

import { chckInputValidation, checkValidation } from "reactjs-form-validation";

interface CreateOrUpdateEmployeeProps {}

const Employee: FC<CreateOrUpdateEmployeeProps> = (props) => {

  const formRef = useRef<HTMLFormElement>(null);

  const [employee, setEmployee] = useState({
    id: 0,
    name: '',
    email:'',
    phoneNumber:'',
    salary: 1000,
    departmentId: '',
    password:'',
    confirmPassword:''
  });

 const rules = {
    name: {
      required: true, required_msg: "Name is required",
      minlength: 3, minlength_msg: "Name should not be less than 3 characters"
    },
    email: {
      required: true, required_msg: "Email is required",
      email_msg: "Please enter valid email address"
    },
    phoneNumber: {
      required: true, required_msg: "Phone number is required",
      pattern:'^01[0125][0-9]{8}', pattern_msg: "Please enter valid phone number"
    },
    salary: {
      required: true, required_msg: "Salary is required",
      min:1000, min_msg: "Salary shouldn't be less than 1000",
      max:15000, max_msg:"Salary shouldn't be greater than 15000"
    },
    department: { required: true, required_msg: "Please select department" },
    password: {
      required: true, required_msg: "Password is required",
      match_input_id: 'confirmPassword', mis_match_msg: "Passwords do not match"
    },
    confirmPassword: {
      required: true, required_msg: "Please confirm password",
      match_input_id: 'password', mis_match_msg: "Passwords do not match"
    },
  };

  const addOrEdit = (event: any) => {
    event.preventDefault();
    if (checkValidation(formRef.current)) {
      alert("Your form is valid");
    }
  };

  const onInputChange = (event: any) => {
    setEmployee({ ...employee, [event.name]: event.value });
    chckInputValidation(event);
  };

  return (
    <div>
      <form id="employeeForm" onSubmit={addOrEdit} ref={formRef} noValidate>
      
      <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={employee.name}
            placeholder="Enter your full name"
            id="name"
            name="name"
            {...rules.name}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            value={employee.email}
            placeholder="Enter email"
            id="email"
            name="email"
            {...rules.email}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="text"
            className="form-control"
            value={employee.phoneNumber}
            placeholder="Enter phone number"
            id="phoneNumber"
            name="phoneNumber"
            {...rules.phoneNumber}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            className="form-control"
            value={employee.salary}
            placeholder="Enter salary"
            id="salary"
            name="salary"
            {...rules.salary}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="departmentId">Department:</label>
          <select
            className="form-control"
            value={employee.departmentId}
            id="departmentId"
            name="departmentId"
            {...rules.department}
            onChange={(e) => onInputChange(e.target)}>
            <option value="">-- Select department --</option>
            <option value="1">HR</option>
            <option value="2">IT</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            value={employee.password}
            placeholder="Enter password"
            id="password"
            name="password"
            {...rules.password}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={employee.confirmPassword}
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            {...rules.confirmPassword}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <br />
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Save" />
        </div>
      </form>
    </div>

  );
};

export default Employee;

```

set submit button as disabled if Form is invalid

```javascript

import React, { FC, useRef, useState } from "react";

import { chckInputValidation, checkValidation } from "reactjs-form-validation";

interface CreateOrUpdateEmployeeProps {}

const Employee: FC<CreateOrUpdateEmployeeProps> = (props) => {

  const formRef = useRef<HTMLFormElement>(null);

  const [employee, setEmployee] = useState({
    id: 0,
    name: '',
    email:'',
    phoneNumber:'',
    salary: 1000,
    departmentId: '',
    password:'',
    confirmPassword:''
  });

  const [disapled, setAsdisabled] = useState(true);

  const rules = {
    name: {
      required: true, required_msg: "Name is required",
      minlength: 3, minlength_msg: "Name should not be less than 3 characters"
    },
    email: {
      required: true, required_msg: "Email is required",
      email_msg: "Please enter valid email address"
    },
    phoneNumber: {
      required: true, required_msg: "Phone number is required",
      pattern:'^01[0125][0-9]{8}', pattern_msg: "Please enter valid phone number"
    },
    salary: {
      required: true, required_msg: "Salary is required",
      min:1000, min_msg: "Salary shouldn't be less than 1000",
      max:15000, max_msg:"Salary shouldn't be greater than 15000"
    },
    department: { required: true, required_msg: "Please select department" },
    password: {
      required: true, required_msg: "Password is required",
      match_input_id: 'confirmPassword', mis_match_msg: "Passwords do not match"
    },
    confirmPassword: {
      required: true, required_msg: "Please confirm password",
      match_input_id: 'password', mis_match_msg: "Passwords do not match"
    },
  };

  const addOrEdit = (event: any) => {
    event.preventDefault();
    if (checkValidation(formRef.current)) {
      alert("Your form is valid");
    }
  };

  const onInputChange = (event: any) => {
    setEmployee({ ...employee, [event.name]: event.value });
    chckInputValidation(event);
  };

  return (
    <div>
      <form id="employeeForm" onSubmit={addOrEdit} ref={formRef} noValidate
         onChange={(event) => setAsdisabled(!event.currentTarget.checkValidity())}>

        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            className="form-control"
            value={employee.name}
            placeholder="Enter your full name"
            id="name"
            name="name"
            {...rules.name}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            className="form-control"
            value={employee.email}
            placeholder="Enter email"
            id="email"
            name="email"
            {...rules.email}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone number:</label>
          <input
            type="text"
            className="form-control"
            value={employee.phoneNumber}
            placeholder="Enter phone number"
            id="phoneNumber"
            name="phoneNumber"
            {...rules.phoneNumber}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="salary">Salary:</label>
          <input
            type="text"
            className="form-control"
            value={employee.salary}
            placeholder="Enter salary"
            id="salary"
            name="salary"
            {...rules.salary}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="departmentId">Department:</label>
          <select
            className="form-control"
            value={employee.departmentId}
            id="departmentId"
            name="departmentId"
            {...rules.department}
            onChange={(e) => onInputChange(e.target)}>
            <option value="">-- Select department --</option>
            <option value="1">HR</option>
            <option value="2">IT</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            value={employee.password}
            placeholder="Enter password"
            id="password"
            name="password"
            {...rules.password}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control"
            value={employee.confirmPassword}
            placeholder="Confirm password"
            id="confirmPassword"
            name="confirmPassword"
            {...rules.confirmPassword}
            onChange={(e) => onInputChange(e.target)}/>
        </div>

        <br />
        <div className="form-group">
          <input type="submit" className="btn btn-primary" value="Save" disabled={disapled}/>
        </div>
      </form>
    </div>

  );
};

export default Employee;
```

## Notes

Property validation message key should be like that:

| Validation     | Message       |
| -------------- | ------------- |
| required       | required_msg  |
| type='email'   | email_msg     |
| type='url'     | url_msg       |
| pattern        | pattern_msg   |
| min            | min_msg       |
| max            | max_msg       |
| minlength      | minlength_msg |
| maxlength      | maxlength_msg |
| match_input_id | mis_match_msg |

## Authors

- [@Ragab Rady](https://github.com/RagabRady)

## Feedback

If you have any feedback, please reach out to us at ragab.rady11@gmail.com
