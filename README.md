
# reactjs-form-validation

reactjs-form-validation is very easy to use. It’s working with form control properties like (required – pattern – min -max – minLength - maxLength………..etc) and it isn’t used only with form tag. It can be used else with a div that contain a collection of inputs.
## Usage

1.	Install
        
            npm install reactjs-form-validation --save

2.	Import
              
            import { checkFormValidation,chckInputValidation } from 'reactjs-form-validation';


## Example

```javascript
import React, { FC, useRef, useState } from "react";

import { chckInputValidation, checkValidation } from "reactjs-form-validation";

interface CreateOrUpdateEmployeeProps {}

const Employee: FC<CreateOrUpdateEmployeeProps> = (props) => {
  
  const formElement = useRef();

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    email: "",
    salary: 0,
    departmentId: "",
  });

  const [departments] = useState<any[]>([]);

  const rules = {
   
     name: {
      required: true,
      required_msg: "Name is required",
      minLength: 3,
      minlength_msg: "Name should not be less than 3 characters",
    },
    email: {
      required: true,
      required_msg: "Email is required",
      email_msg: "Please enter valid email address",
    },
    department: { required: true, required_msg: "Please select department" },
  };

  const addOrEdit = (event: any) => {

    event.preventDefault();
    if (checkValidation(formElement.current)) {
      alert("Your form is valid");
    }
  };

  const onInputChange = (event: any) => {

    setEmployee({ ...employee, [event.name]: event.value });
    chckInputValidation(event);
  };

  return (
   
    <div> 
      <form id="employeeForm" onSubmit={addOrEdit} noValidate>
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
            onChange={(e) => onInputChange(e.target)}
          />
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
            onChange={(e) => onInputChange(e.target)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Department:</label>
          <select
            className="form-control"
            value={employee.departmentId}
            id="departmentId"
            name="departmentId"
            {...rules.department}
            onChange={(e) => onInputChange(e.target)}
          >
            <option value="">-- Select department --</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
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
  
  const formElement = useRef();

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    email: "",
    salary: 0,
    departmentId: "",
  });

  const [departments] = useState<any[]>([]);

  const [disapled, setAsdisabled] = useState(true);

  const rules = {
   
     name: {
      required: true,
      required_msg: "Name is required",
      minLength: 3,
      minlength_msg: "Name should not be less than 3 characters",
    },
    email: {
      required: true,
      required_msg: "Email is required",
      email_msg: "Please enter valid email address",
    },
    department: { required: true, required_msg: "Please select department" },
  };

  const addOrEdit = (event: any) => {

    event.preventDefault();
    if (checkValidation(formElement.current)) {
      alert("Your form is valid");
    }
  };

  const onInputChange = (event: any) => {

    setEmployee({ ...employee, [event.name]: event.value });
    chckInputValidation(event);
  };

  return (
   
    <div> 
      <form id="employeeForm" onSubmit={addOrEdit} noValidate
         onChange={(event) => setAsdisabled(!event.currentTarget.checkValidity())}

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
            onChange={(e) => onInputChange(e.target)}
          />
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
            onChange={(e) => onInputChange(e.target)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Department:</label>
          <select
            className="form-control"
            value={employee.departmentId}
            id="departmentId"
            name="departmentId"
            {...rules.department}
            onChange={(e) => onInputChange(e.target)}
          >
            <option value="">-- Select department --</option>
            {departments.map((department) => (
              <option key={department.id} value={department.id}>
                {department.name}
              </option>
            ))}
          </select>
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



| Validation             | Message                                                                |
| ----------------- | ------------------------------------------------------------------ |
| required | required_msg |
| email | email_msg |
| pattern | pattern_msg |
| min | min_msg |
| max | max_msg |
| minLength | minlength_msg |
| maxLength| maxlength_msg |



## Authors

- [@Ragab Rady](https://github.com/RagabRady)


## Feedback

If you have any feedback, please reach out to us at ragab.rady11@gmail.com
