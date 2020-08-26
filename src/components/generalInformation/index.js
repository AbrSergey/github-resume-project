import React from 'react';
import Card from '../card';
import Avatar from '../avatar';
import GeneralInformationRow from '../generalInformationRow';
import Spinner from '../spinner';

import './style.scss';

const GeneralInformation = ({ data, name, position, loading, avatar }) => {
  return (
    <Card>
      <div className="general-information-card">
        { loading ? <Spinner/> :
        <>
          <Avatar url={avatar}/>
            <div className="general-information">
              <div className="general-information-data">
                <p className="hello">Hello & Welcome</p>
                <p className="whoami">I'm <span>{name}</span></p>
                <p className="work-position">{position}</p>
                <table>
                  {
                    Object.keys(data).map((name) => (<GeneralInformationRow key={name} rowName={name} rowValue={data[name]} />))
                  }
                </table>
              </div>
            </div>
          </>
        }
      </div>
    </Card>
  )
};

export default GeneralInformation;