import React,{Component} from 'react';
import NavBar from "../components/NavBar";


class Manage extends Component {
	constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      salary: '',
      age: '',
      image: null,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleImageChange = (e) => {
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const { id, name, salary, age, image } = this.state;

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('salary', salary);
    formData.append('age', age);
    formData.append('image', image);

    try {
      const response = await fetch('/create/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Employee added successfully');
      } else {
        console.error('Error adding employee');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
	render(){
		return (
      <div className="inner-wrapper">
				<NavBar/>
				<section role="main" className="content-body">
				<div class="row">
				<div class="col-md-12">
				<h2>Add New Employee</h2>
        <form onSubmit={this.handleSubmit}>
				<div class="form-group">
					<label class="col-md-1 control-label" for="textareaDefault">ID</label>
							<div class="col-md-6">
								<input class="form-control" data-plugin-maxlength maxlength="20" 
								type="text"
								name="id"
								value={this.state.id}
								onChange={this.handleChange}/>
							</div>
				</div>
				<div class="form-group">
					<label class="col-md-1 control-label" for="textareaDefault">Full Name</label>
							<div class="col-md-6">
								<input class="form-control" data-plugin-maxlength maxlength="20" 
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}/>
							</div>
					</div>
					<div class="form-group">
					<label class="col-md-1 control-label" for="textareaDefault">Salary</label>
							<div class="col-md-6">
								<input class="form-control" data-plugin-maxlength  
								type="number"
								name="salary"
								value={this.state.salary}
								onChange={this.handleChange}/>
							</div>
					</div>
          <div class="form-group">
					<label class="col-md-1 control-label" for="textareaDefault">Age</label>
							<div class="col-md-6">
								<input class="form-control" data-plugin-maxlength  
								type="text"
								name="age"
								value={this.state.age}
								onChange={this.handleChange}/>
							</div>
					</div>
					
					<div class="form-group">
					<label class="col-md-1 control-label" for="textareaDefault">Image:</label>
					<div class="col-md-6">
            <input class="form-control" data-plugin-maxlength
              type="file"
              accept="image/*"
              name="image"
              onChange={this.handleImageChange}/>
						</div>
					</div>
          <div class="row">
							<div class="col-sm-9 col-sm-offset-3">
								<button class="btn btn-primary" type="submit">Submit</button>
								<button type="reset" class="btn btn-default">Reset</button>
							</div>
						</div>
        </form>
					</div>
					</div>
				</section>
      </div>
    );
	}
}

export default Manage;
