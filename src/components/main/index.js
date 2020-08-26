import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GeneralInformation from '../../components/generalInformation';
import Title from '../../components/title';
import Skills from '../../components/skills';
import Education from '../../components/education';

import './style.scss';

const Main = ({ informationData
  , informationName
  , informationPosition
  , informationAvatar
  , informationLoading
  , informationError
  , skillProgressData
  , skillText
  , skillLoading
  , skillError
  , educationData
  , educationLoading
  , educationError
 }) => {
  return (
    <div className="main">
      <GeneralInformation
        data={informationData}
        name={informationName}
        position={informationPosition}
        avatar={informationAvatar}
        loading={informationLoading}
        error={informationError}
      />
      <Title name="skills"/>
      <Skills
        data={skillProgressData}
        text={skillText}
        loading={skillLoading}
        error={skillError}
      />
      <Title name="education"/>
      <Education
        data={educationData}
        loading={educationLoading}
        error={educationError}
      />
    </div>
  )
};

const mapStateToProps = ({ generalInformation, skills, education }) => ({
  informationData: generalInformation.informationData,
  informationName: generalInformation.name,
  informationPosition: generalInformation.position,
  informationAvatar: generalInformation.avatar,
  informationLoading: generalInformation.loading,
  informationError: generalInformation.error,
  skillProgressData: skills.skills,
  skillText: skills.text,
  skillLoading: skills.loading,
  skillError: skills.error,
  educationData: education.data,
  educationLoading: education.loading,
  educationError: education.error
});

export default connect(mapStateToProps)(Main);

Main.propTypes = {
  informationData: PropTypes.object,
  informationName: PropTypes.string,
  informationPosition: PropTypes.string,
  informationAvatar: PropTypes.string,
  informationLoading: PropTypes.bool,
  informationError: PropTypes.bool,
  skillProgressData: PropTypes.array,
  skillText: PropTypes.string,
  skillLoading: PropTypes.bool,
  skillError: PropTypes.string,
  educationData: PropTypes.array,
  educationLoading: PropTypes.bool,
  educationError: PropTypes.bool
};