import { Component } from "react";
import './activities.css';
import ActivitiesCard from "../ActivitiesCard/activitiesCard";

class Activities extends Component {
  state={style:'Grid',category:'All'};
  onStyleChange = (e) => {
    this.setState({style:e.target.id});
  }
  changeCategory = (e) => {
    this.setState({category:e.target.textContent});
  }
  render() {
    const {activitiesList} = this.props;
    const {category,style} = this.state;
    if(category==='All'){
        var newActivitiesList = activitiesList;
    }else{
        var newActivitiesList = activitiesList.filter((activity) => {
            return activity.category === category ;
        });
    }
    const c1="active";
    return (
      <div className="box">
        <h1>Activities</h1>
        <p>Below are a few activities performed by NSS cell of IIT Guwahati over the past weeks.</p>
        <div>
            <div className='barBox'>
                <ul className="bar">
                    <li><button className={(category==="All") && c1} type='button' onClick={this.changeCategory}>All</button></li>
                    <li><button className={(category==="Cleanliness") && c1} type='button' onClick={this.changeCategory}>Cleanliness</button></li>
                    <li><button className={(category==="Donations") && c1} type='button' onClick={this.changeCategory}>Donations</button></li>
                    <li><button className={(category==="Teachings") && c1} type='button' onClick={this.changeCategory}>Teachings</button></li>
                    <li><button className={(category==="Welfare") && c1} type='button' onClick={this.changeCategory}>Welfare</button></li>
                    <li><button className={(category==="Awareness") && c1} type='button' onClick={this.changeCategory}>Awareness</button></li>
                </ul>
                <div className="butBox">
                  <button type='button' id='Grid' className="but1" onClick={this.onStyleChange}>Grid</button>
                  <button type='button' id='List' className="but1" onClick={this.onStyleChange}>List</button>
                </div>
            </div>
            <div className={style + " " + "boxing"}>
              {
                newActivitiesList.map((activity) => {
                    return (
                        <ActivitiesCard key={activity.id} style={style} activity={activity}/>
                    );
                })
              }
            </div>
        </div>
      </div>
    );
  }
}

export default Activities;