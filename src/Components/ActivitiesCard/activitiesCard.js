import './activitiesCard.css';

const ActivitiesCard = (props) => {
    const {style} = props;
    const classnames='card1'
        if(style==='Grid'){
            return (
                <div className="card1 Grid">
                    <img className="img1" src={props.activity.image} alt={props.activity.title}/>
                    <div className='box2'>
                        <h2>{props.activity.heading}</h2>
                        <p>{props.activity.description}</p>
                    </div>
                </div>
            );
        }
        return (
            <div className="card1 List">
                <img className="img2" src={props.activity.image} alt={props.activity.title}/>
                <div className='box2'>
                    <h2>{props.activity.heading}</h2>
                    <p>{props.activity.description}</p>
                </div>
            </div>
        );

}
export default ActivitiesCard;