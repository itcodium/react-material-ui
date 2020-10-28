import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Service from './Service'


export class CourseSelect extends React.Component {
    static propTypes = {
        department: PropTypes.string,
        course: PropTypes.string,
        onChange: PropTypes.func.isRequired,
    };
    state = {
        department: '',
        course: '',
        courses: [],
        _loading: false,
        _saveStatus: 'READY',
    };
    classes = null;
    service = new Service();
    departments = [
        {
            label: "Which department?", value: "",
        },
        {
            label: "Core", value: "core",
        },
        {
            label: "Electives", value: "electives",
        },
    ];

    componentDidUpdate(update) {
        if (update.department !== this.props.department) {
            if (!this.props.department) {
                this.setState({ courses: [] });
            }
            this.setState({
                department: this.props.department,
                course: this.props.course,
            });
        }
    }

/*
    componentDidMount() {
        this.setState({ _loading: true });
        this.service.peopleGetAll().then((people) => {
            console.log("people", people)
            this.setState({ _loading: false, people: people });
        });
    }*/
    componentWillUnmount() {
      }

    onSelectDepartment = (evt) => {
        const department = evt.target.value;
        const course = null;
        this.setState({ department, course });
        this.props.onChange({ name: 'department', value: department });
        this.props.onChange({ name: 'course', value: course });
        if (department) {
            this.fetch(department)
        };
    };
    fetch = (department) => {
        this.setState({ _loading: true, courses: [] });
        this.service.coursesGetAll(department).then((courses) => {
            courses.unshift({ title: "Select Course..", _id: '' })
            this.setState({ _loading: false, courses: courses });
        });
    };
    onSelectCourse = (evt) => {
        const course = evt.target.value;
        this.setState({ course });
        this.props.onChange({ name: 'course', value: course });
    };
    renderDepartmentSelect() {
        return <div className="select-container">
            <select value={this.props.department} onChange={this.onSelectDepartment} >
                {this.departments.map((option) => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>;
    }
    renderCourseSelect() {
        return <div>
            {
                this.state.courses.length ?
                    <select value={this.props.course ? this.props.course : ''} onChange={this.onSelectCourse} >
                        {this.state.courses.map((option) => (
                            <option key={option.title} value={option.createdAt}>{option.title}</option>
                        ))}
                    </select>
                    : ''}
            {this.state._loading ? <CircularProgress></CircularProgress> : ''}

        </div>;
    }
    render() {
        return (
            <div>
                { this.renderDepartmentSelect()}
                <br />
                { this.renderCourseSelect()}
            </div>
        );
    }
}

export default CourseSelect;





