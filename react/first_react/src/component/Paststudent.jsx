import { useState } from 'react';
import students from '../data/student.js';

function Paststudent() {
    const [searchTerm, setSearchTerm] = useState('');
    const filteredStudents = students.filter((student) =>
        [student.id, student.name, student.course, student.branch]
            .some((value) => String(value).toLowerCase().includes(searchTerm.trim().toLowerCase()))
    );

    return (
        <main className="students-page">
            <h1>Student Dashboard</h1>
            <label className="students-search-label" htmlFor="student-search">
                Search students
            </label>
            <input
                id="student-search"
                className="students-search"
                type="search"
                placeholder="Search by ID, name, course, or branch"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
            <div className="students-table-wrapper">
                <table className="students-table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Course</th>
                            <th scope="col">Branch</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.course}</td>
                                <td>{student.branch}</td>
                            </tr>
                        ))}
                        {filteredStudents.length === 0 && (
                            <tr>
                                <td className="students-empty" colSpan="4">
                                    No students match your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </main>
    );
}

export default Paststudent;