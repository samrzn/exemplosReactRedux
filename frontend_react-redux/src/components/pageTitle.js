function PageTitle(props) {

    return (
        <header className="title">
            <h2>{props.text}</h2>
            <hr />
        </header>
    );
}

export default PageTitle;