import React from 'react';
import ExamplesComponent from '../components/ExamplesComponent';
import HeroComponent from '../components/HeroComponent';
import TagLineComponent from '../components/TagLineComponent';
import GraphicListComponent from '../components/GraphicListComponent';
import ProjectListComponent from '../components/ProjectListComponent';

const Home = () => {
    return (
      <div>
          <HeroComponent />
          <TagLineComponent />
          <GraphicListComponent />
          <ProjectListComponent /> 
          <ExamplesComponent />
      </div>
    );
}

export default Home;