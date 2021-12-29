


const titreh1 = (props) => {
    const classesCss = "border border-dark bg-primary p-2 m-2 rounded text-white text-center";
    return (
        <h1 className={classesCss}>{props.children}</h1>
    );
};

export default titreh1;