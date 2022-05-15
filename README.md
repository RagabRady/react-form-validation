reactjs-form-validation
------------------------------------------------------------------------------------------------------------------------------------------------------------------

reactjs-form-validation is very easy to use. It’s working with form control properties like (required – pattern – min -max – minLength - maxLength………..etc) and it isn’t used only with form tag. It can be used else with a div that contain a collection of inputs.


Usage:
1.	Install
         npm install reactjs-form-validation --save

2.	Import
               import { checkFormValidation,chckInputValidation } from 'reactjs-form-validation';


Example:

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
    debugger;
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


set submit button as disabled if Form is invalid

import React, { FC, useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import departmentService from '../../../services/department/departmentService';
import employeeService from '../../../services/employee/employeeService';
import { chckInputValidation, checkValidation } from '../../../services/validation';
import './CreateOrUpdateEmployee.less';
interface CreateOrUpdateEmployeeProps {
  match: any;
}

const CreateOrUpdateEmployee: FC<CreateOrUpdateEmployeeProps> = (props) => {
  const history = useHistory();
  const [employee, setEmployee] = useState({
    id: props.match.params.id,
    name: '',
    email: '',
    salary: 0,
    departmentId: '',
  });

  const formElem = useRef<HTMLFormElement>(null);
  const [departments, setDepartmenrs] = useState<any[]>([]);
  const [disapled, setAsdisabled] = useState(true);

  const rules = {
    name: { required: true, required_msg: 'Name is required' },
    email: {
      required: true,
      required_msg: 'Email is required',
      email_msg: 'Please enter valid email address',
    },
    salary: { required: true, required_msg: 'Salary is required' },
    department: { required: true, required_msg: 'Please select department' },
  };

  useEffect(() => {
    departmentService.getAll({ PageSize: 10000000 }).then((res) => {
      if (res.status && res.code === 200) {
        setDepartmenrs(res.content.list);
      }
    });

    if (props.match.params.id > 0) {
      employeeService.get(props.match.params.id).then((res) => {
        debugger;
        if (res.success) {
          setEmployee(res.result);
        } else {
          toast.error(res.error);
        }
      });
    }
  }, []);

  const addOrEdit = (event: any) => {
    debugger;
    event.preventDefault();
    if (checkValidation(formElem)) {
      if (props.match.params.id == 0) {
        employeeService.create(employee).then((res) => {
          if (res.success) {
            toast.success('Employee created successfully');
            history.push('/employees');
          } else {
            toast.error(res.error);
          }
        });
      } else {
        employeeService.update(employee).then((res) => {
          if (res.success) {
            toast.success('Employee updated successfully');
            history.push('/employees');
          } else {
            toast.error(res.error);
          }
        });
      }
    }
  };

  const onInputChange = (event: any) => {
    setEmployee({ ...employee, [event.name]: event.value });
    chckInputValidation(event);
  };

  return (
    <div className="CreateOrUpdateEmployee">
      <form
        id="employeeForm"
        ref={formElem}
        onSubmit={addOrEdit}
        noValidate
        onChange={(event) => setAsdisabled(!event.currentTarget.checkValidity())}
      >
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
          <label htmlFor="pwd">Salary:</label>
          <input
            type="number"
            className="form-control"
            value={employee.salary}
            placeholder="Enter salary"
            id="salary"
            name="salary"
            {...rules.salary}
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
          <input type="submit" className="btn btn-primary" value="Save" disabled={disapled} />
        </div>
      </form>
    </div>
  );
};

export default CreateOrUpdateEmployee;



Notes
Property validation message key should be like that:

Validation	Message
required	required_msg
email	email_msg
pattern	pattern_msg
min	min_msg
max	max_msg
minLength	minlength_msg
maxLength	Maxlength_msg

