// Dumb component or Presentational Component
const LivePreview = (props: any) => {
    return (
        <div>
            {
                props.employeeData.map((employee: any, index: number) => (
                    <section>
                        <p>Name: {employee.name}</p>
                        <p>Email: {employee.email}</p>
                        <p>Department: {employee.department}</p>
                        <p>Experience: {employee.experience}</p>
                        <p>Comments: {employee.comments}</p>
                    </section>
                ))
            }
        </div>
    )
}

export default LivePreview;