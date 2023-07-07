import React from 'react';
import Img from '../../../assets/buwa_front.png';
import './ProjectItem.scss';
interface ProjectItemProps {}

const ProjectItem: React.FunctionComponent<ProjectItemProps> = () => {
    return (
        <div className="project-item">
            <img className="item-image" alt="item" src={Img} />
            <div className="item-desc-wrapper">
                <p className="item-description">Project info</p>
            </div>
        </div>
    );
};

export default ProjectItem;
