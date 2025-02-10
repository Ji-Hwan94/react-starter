export const ChildComponent = (props) => {
    return (
        <div className="card">
            <div>
                <h2>{props.title}</h2>
                <p>{props.content}</p>
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}