import React, { Component } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Employee } from './Employee';
import './AddEmployee.css'; // Import the CSS file

interface AddEmployeeProps {
  onAddEmployee: (employee: Employee) => void;
  onNavigate: (path: string) => void;
}

interface AddEmployeeState {
  employee: Employee;
}

class AddEmployee extends Component<AddEmployeeProps, AddEmployeeState> {
  constructor(props: AddEmployeeProps) {
    super(props);
    this.state = {
      employee: {
        id: Date.now(),
        name: '',
        email: '',
        phone: '',
        department: '',
        designation: '',
        salary: 0,
        dateOfJoining: '',
        location: '',
        manager: '',
      },
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    this.setState({ employee: { ...this.state.employee, [name]: value } });
  };

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.props.onAddEmployee(this.state.employee);
    this.props.onNavigate('/employees'); // Redirect to employee list
  };

  render() {
    const { employee } = this.state;

    return (
      <div className="add-employee-container">
          {/* Search and Filter section */}
          <div style={{ display: 'flex', float: 'inline-end' , justifyContent: 'space-between', marginBottom: '20px' }}>
            <Link to={`/employees`} style={{ textDecoration: 'none' }}>
              <button style={{ backgroundColor: '#0055AA', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
                List
              </button>
            </Link>
          </div>
        <h2>Add Employee</h2>
        <form onSubmit={this.handleSubmit} className="employee-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={employee.name} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={employee.email} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" name="phone" value={employee.phone} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="department">Department</label>
            <input type="text" name="department" value={employee.department} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="designation">Designation</label>
            <input type="text" name="designation" value={employee.designation} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="salary">Salary</label>
            <input type="number" name="salary" value={employee.salary} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfJoining">Date of Joining</label>
            <input type="date" name="dateOfJoining" value={employee.dateOfJoining} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input type="text" name="location" value={employee.location} onChange={this.handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="manager">Manager</label>
            <input type="text" name="manager" value={employee.manager} onChange={this.handleChange} required />
          </div>
          <button type="submit" className="submit-btn">Add Employee</button>
        </form>
      </div>
    );
  }
}

export default function AddEmployeeWithNavigate(props: Omit<AddEmployeeProps, 'onNavigate'>) {
  const navigate = useNavigate();
  return <AddEmployee {...props} onNavigate={navigate} />;
}
