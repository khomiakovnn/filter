import React, { useState, useEffect } from 'react';
import Toolbar from './Toolbar';
import Projectlist from './ProjectList';

const Portfolio = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [pictureList, setPictureList] = useState([]);

    useEffect(() => {
        const filterPictures = (filter) => {
            const filteredPictures = [];
            for (let index = 0; index < props.projects.length; index++) {
                if (props.projects[index].category === filter || filter === 'All') {
                    filteredPictures.push(String(props.projects[index].img));
                }
            }
            return filteredPictures;
        };
        setPictureList(filterPictures(selectedFilter));
    }, [props.projects, selectedFilter]);

    const handleSelectFilter = (filter) => {
        setSelectedFilter(filter);
    };
  
    return (
        <div className="Portfolio">
            <div>
                <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selectedFilter}
                onSelectFilter={handleSelectFilter}
                />
            </div>   
            {Projectlist(pictureList)}
        </div>
    );
};

export default Portfolio;